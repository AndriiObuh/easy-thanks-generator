// --- 2. SCRIPT LOGIC (JAVASCRIPT) ---
import { coffeeLinkPlaceholder, creatorNameStorageKey, generatorLinkPlaceholder, data } from './data.js';

const ELEMENTS = {
    title: document.getElementById('app-title'),
    subtitle: document.getElementById('app-subtitle'),
    patronNameInput: document.querySelector('.patron-name-input'),
    donationAmountInput: document.querySelector('.donation-amount-input'),
    creatorNameInput: document.querySelector('.creator-name-input'),
    languageSelect: document.querySelector('.generator-language'),
    toneSelect: document.querySelector('.generator-tone'),
    generateButton: document.getElementById('generate-button-text'),
    outputContainer: document.getElementById('output-container'),
    generatedMessage: document.getElementById('generated-message'),
    messageLabel: document.getElementById('message-label'),
    copyButton: document.getElementById('copy-button'),
    coffeeLink: document.getElementById('coffee-link'),
    attributionContainer: document.getElementById('attribution-link-container'),
    selectTonePlaceholder: document.getElementById('select-tone-placeholder')
};

// Встановлюємо 'EN' як мову за замовчуванням
let currentLang = 'EN'; 

// Helper function to get a random item from an array
const getRandomMessage = (messages) => {
    return messages[Math.floor(Math.random() * messages.length)];
};

// Populate Tone/Style options based on the current language
const populateToneOptions = (langKey) => {
    const tones = data[langKey];
    const localization = tones._localization;
    
    // Clear existing options
    ELEMENTS.toneSelect.innerHTML = '';
    
    // Re-create the placeholder option
    const placeholder = document.createElement('option');
    placeholder.value = "";
    placeholder.textContent = localization.selectTone; // Use localized placeholder
    placeholder.id = "select-tone-placeholder";
    ELEMENTS.toneSelect.appendChild(placeholder);
    
    // Populate actual tones
    Object.keys(tones).forEach(key => {
        if (key !== '_localization') {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            ELEMENTS.toneSelect.appendChild(option);
        }
    });
    // Select the placeholder by default
    ELEMENTS.toneSelect.value = "";
};

// Populate Language options
const populateLanguageOptions = () => {
    const langs = Object.keys(data);
    ELEMENTS.languageSelect.innerHTML = ''; // Clear existing
    
    langs.forEach(langKey => {
        const option = document.createElement('option');
        option.value = langKey;
        
        // Display language names in the native tongue if possible
        let langName;
        if (langKey === 'UA') {
            langName = 'Українська (UA)';
        } else if (langKey === 'EN') {
            langName = 'English (EN)';
        } else {
            langName = langKey;
        }
        
        option.textContent = langName;
        ELEMENTS.languageSelect.appendChild(option);
    });

    // Set default language
    ELEMENTS.languageSelect.value = currentLang;
};

// Apply localization to UI elements
const localizeUI = (langKey) => {
    const localization = data[langKey]._localization;

    // Header
    ELEMENTS.title.textContent = localization.title;
    ELEMENTS.subtitle.textContent = localization.subtitle;

    // Inputs
    ELEMENTS.patronNameInput.placeholder = localization.inputPlaceholders.patronName;
    ELEMENTS.donationAmountInput.placeholder = localization.inputPlaceholders.amount;
    ELEMENTS.creatorNameInput.placeholder = localization.inputPlaceholders.creatorName;

    // Buttons & Labels
    ELEMENTS.generateButton.textContent = localization.buttonText;
    ELEMENTS.copyButton.textContent = localization.copyText;
    ELEMENTS.messageLabel.textContent = localization.messageLabel;
};

// Main generation function
const generateThankYou = () => {
    const patronName = ELEMENTS.patronNameInput.value.trim();
    const donationAmount = ELEMENTS.donationAmountInput.value.trim();
    const creatorName = ELEMENTS.creatorNameInput.value.trim();
    const selectedTone = ELEMENTS.toneSelect.value;
    const localization = data[currentLang]._localization;

    // Input Validation
    if (!patronName || !donationAmount || !creatorName || !selectedTone) {
        ELEMENTS.generatedMessage.textContent = localization.error;
        ELEMENTS.outputContainer.classList.remove('hidden');
        ELEMENTS.copyButton.style.display = 'none'; // Hide copy button on error
        ELEMENTS.attributionContainer.innerHTML = ''; // Clear attribution
        return;
    }

    // Get messages for the selected tone
    const messages = data[currentLang][selectedTone];
    const messageTemplate = getRandomMessage(messages);

    // Replace placeholders in the message template
    let finalMessage = messageTemplate
        .replace(/\[NAME\]/g, patronName)
        .replace(/\[AMOUNT\]/g, donationAmount)
        .replace(/\[CREATORNAME\]/g, creatorName);
    
    // Display the message
    ELEMENTS.generatedMessage.textContent = finalMessage;
    ELEMENTS.outputContainer.classList.remove('hidden');
    ELEMENTS.copyButton.style.display = 'block'; // Show copy button

    // Відображення клікабельного посилання на екрані
    ELEMENTS.attributionContainer.innerHTML = `
        ${localization.attributionText}: 
        <a href="${generatorLinkPlaceholder}" target="_blank" class="text-teal-400 hover:text-teal-200 transition-colors">
            ${generatorLinkPlaceholder}
        </a>
    `;

    // Save creator name to local storage
    localStorage.setItem(creatorNameStorageKey, creatorName);
};

// Copy functionality
const copyToClipboard = () => {
    const messageText = ELEMENTS.generatedMessage.textContent;
    const localization = data[currentLang]._localization;
    
    const attributionPrefix = localization.attributionText || data["UA"]._localization.attributionText; 
    
    // Формат: [Подяка]\n\n— [Локалізоване речення] [URL]
    const messageToCopy = messageText + '\n\n— ' + attributionPrefix + ' ' + generatorLinkPlaceholder;
    
    // Використання сучасного Clipboard API (працює на HTTPS/localhost)
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(messageToCopy).then(() => {
            ELEMENTS.copyButton.textContent = localization.copiedText;
            ELEMENTS.copyButton.classList.add('copied');
            
            setTimeout(() => {
                ELEMENTS.copyButton.textContent = localization.copyText;
                ELEMENTS.copyButton.classList.remove('copied');
            }, 1500);
        }).catch(err => {
            console.error('Не вдалося скопіювати текст через Clipboard API', err);
            // Fallback (залишаємо старий метод для безпеки, хоча на GitHub Pages він не потрібен)
            fallbackCopy(messageToCopy, localization);
        });
    } else {
        // Fallback для старих браузерів
        fallbackCopy(messageToCopy, localization);
    }
};

const fallbackCopy = (text, localization) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            ELEMENTS.copyButton.textContent = localization.copiedText;
            ELEMENTS.copyButton.classList.add('copied');
            
            setTimeout(() => {
                ELEMENTS.copyButton.textContent = localization.copyText;
                ELEMENTS.copyButton.classList.remove('copied');
            }, 1500);
        } else {
            console.error("Копіювання не вдалося (fallback).");
        }
    } catch (err) {
        console.error('Не вдалося скопіювати текст', err);
    }
    document.body.removeChild(textarea);
}


// --- 3. INITIALIZATION AND EVENT LISTENERS ---

const init = () => {
    // Load creator name from local storage
    const savedCreatorName = localStorage.getItem(creatorNameStorageKey);
    if (savedCreatorName) {
        ELEMENTS.creatorNameInput.value = savedCreatorName;
    }

    // Set up Buy Me a Coffee link
    ELEMENTS.coffeeLink.href = coffeeLinkPlaceholder;
    
    // Populate languages and tones
    populateLanguageOptions();
    
    // Initialize with default language (EN)
    populateToneOptions(currentLang);
    localizeUI(currentLang);

    // Event Listeners
    ELEMENTS.languageSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        populateToneOptions(currentLang);
        localizeUI(currentLang);
        // Hide output when language changes
        ELEMENTS.outputContainer.classList.add('hidden');
    });

    ELEMENTS.generateButton.addEventListener('click', generateThankYou);
    ELEMENTS.copyButton.addEventListener('click', copyToClipboard);
};

// Run initialization on load
window.onload = init;

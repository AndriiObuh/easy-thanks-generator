// --- 1. CONFIGURATION ---

// !!! ВАЖЛИВО: ВАШЕ РЕАЛЬНЕ ПОСИЛАННЯ "BUY ME A COFFEE" ВСТАВЛЕНО ТУТ !!!
export const coffeeLinkPlaceholder = "https://buymeacoffee.com/andriiobuh"; 
export const creatorNameStorageKey = "easyThanksCreatorName";
// !!! ВАЖЛИВО: Посилання на ваш генератор подяки (GitHub Pages) !!!
export const generatorLinkPlaceholder = "https://andriiobuh.github.io/easy-thanks-generator/"; 


// --- 2. IMPORT ALL TONE DATA FILES ---
// Кожен файл експортує дані лише для свого стилю.
import { pirateData } from './drunken_pirate_data.js'; 
import { failedActorData } from './failed_actor_data.js'; 
import { memeArtistData } from './meme_artist_data.js';
import { conspiracyTheoristData } from './conspiracy_theorist_data.js';
import { madDictatorData } from './mad_dictator_data.js';
import { disappointedProfessorData } from './disappointed_professor_data.js';
import { vacuumSalesmanData } from './vacuum_salesman_data.js';
import { motivationCoachData } from './motivation_coach_data.js'


// --- 3. LOCALIZATION DATA (UI TEXT) ---
// Ці дані не залежать від стилів, тому вони залишаються тут.
const localizationData = {
    "UA": {
        _localization: {
            title: "Easy Thanks Generator",
            subtitle: "Створи унікальні подяки миттєво.",
            buttonText: "Згенерувати Випадкову Подяку",
            copyText: "Копіювати",
            copiedText: "Скопійовано! ✅",
            messageLabel: "Ваше повідомлення:",
            error: "Будь ласка, заповніть усі поля.",
            selectLanguage: "Виберіть Мову",
            selectTone: "Виберіть Стиль",
            inputPlaceholders: {
                patronName: "Ім'я Донатора",
                amount: "Сума Доната",
                creatorName: "Ваше Ім'я / Нікнейм (Підпис)",
            },
            attributionText: "Створено за допомогою" 
        },
    },
    "EN": {
        _localization: {
            title: "Easy Thanks Generator",
            subtitle: "Craft the perfect thank you message instantly.",
            buttonText: "Generate Random Thank You",
            copyText: "Copy",
            copiedText: "Copied! ✅",
            messageLabel: "Your message:",
            error: "Please fill in all fields.",
            selectLanguage: "Select Language",
            selectTone: "Select Style",
            inputPlaceholders: {
                patronName: "Patron's Name",
                amount: "Donation Amount",
                creatorName: "Your Name / Nickname (Signature)",
            },
            attributionText: "Created with"
        },
    }
};


// --- 4. MERGE ALL DATA INTO THE FINAL EXPORT OBJECT ---

// Список усіх імпортованих об'єктів даних стилів
const allTones = [
    pirateData, 
    failedActorData,
    memeArtistData, 
    conspiracyTheoristData, 
    madDictatorData, 
    disappointedProfessorData, 
    vacuumSalesmanData,
    motivationCoachData
];

// Функція для об'єднання (злиття) даних
function mergeTones(locData, tonesArray) {
    // Створюємо глибоку копію локалізаційних даних для безпеки
    const finalData = JSON.parse(JSON.stringify(locData));
    
    for (const toneData of tonesArray) {
        // Проходимо по мовах (UA, EN)
        for (const lang in toneData) {
            if (finalData[lang]) {
                // Об'єднуємо стилі для цієї мови
                // Object.assign додає всі стилі з toneData[lang] до finalData[lang]
                Object.assign(finalData[lang], toneData[lang]);
            } else {
                finalData[lang] = toneData[lang]; 
            }
        }
    }
    return finalData;
}

// Експортуємо остаточну, об'єднану структуру даних
export const data = mergeTones(localizationData, allTones);

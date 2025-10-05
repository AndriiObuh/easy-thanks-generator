// --- 1. DATA SOURCE (CONTENT) ---
// !!! ВАЖЛИВО: ВАШЕ РЕАЛЬНЕ ПОСИЛАННЯ "BUY ME A COFFEE" ВСТАВЛЕНО ТУТ !!!
export const coffeeLinkPlaceholder = "https://buymeacoffee.com/andriiobuh"; 
export const creatorNameStorageKey = "easyThanksCreatorName";
// !!! ВАЖЛИВО: Посилання на ваш генератор подяки (GitHub Pages) !!!
export const generatorLinkPlaceholder = "https://andriiobuh.github.io/easy-thanks-generator/"; 

export const data = {
    "UA": {
        // Локалізація UI
        _localization: {
            // UI elements
            title: "Easy Thanks Generator",
            subtitle: "Створи унікальні подяки миттєво.",
            buttonText: "Згенерувати Випадкову Подяку",
            copyText: "Копіювати",
            copiedText: "Скопійовано! ✅",
            messageLabel: "Ваше повідомлення:",
            error: "Будь ласка, заповніть усі поля.",

            // Selectors & Inputs
            selectLanguage: "Виберіть Мову",
            selectTone: "Виберіть Стиль",
            inputPlaceholders: {
                patronName: "Ім'я Донатора",
                amount: "Сума Доната",
                creatorName: "Ваше Ім'я / Нікнейм (Підпис)",
            },
            attributionText: "Створено за допомогою" 
        },
        "Актор-Невдаха": [
            "🎭 Який фінал! [NAME]! Ваші [AMOUNT] – це бурхливі овації, яких ця трагедія ще не бачила! Я знімаю капелюха перед вашою режисерською геніальністю. Браво!\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "😭 Це не донат! Це запрошення на головну роль у моєму житті, [NAME]! Ці [AMOUNT] – це гонорар, який змушує мене заплакати від радості! Світло! Камера! Гроші!\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "🎭 [NAME]! [AMOUNT]! Це не фінансування! Це продовження мого провального, але геніального, серіалу! Завдяки Вам, завіса не падає! Ви — мій найкращий продюсер!\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "😭 [NAME], Ваші [AMOUNT] — це аванс за головну роль у трагедії \"Мій Бюджет\"! Я буду грати вдячність цілодобово! Я Вас обожнюю!\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "🎭 [NAME], Ви щойно заплатили за мій грим! Ці [AMOUNT] дозволять мені виглядати ще більш трагічно! Я обіцяю перевтілення у найдраматичнішу версію себе. Дякую!\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "😭 Антракт закінчено! Завдяки [AMOUNT] від [NAME], завіса піднімається! Я обіцяю, що драматизм наступної сцени буде зашкалювати! Дякую, мій спонсор-меценат!\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "🎭 Я стою на колінах, [NAME]! Ці [AMOUNT] – це реставрація мого зламаного образу. Я дякую Вам, мій єдиний глядач! Сльози течуть по гриму!\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "😭 [NAME], я готовий до монологу! Твої [AMOUNT] заслуговують на цей пафос. Я буду перегравати кожен кадр, поки ти не скажеш: Досить! Дякую, інвесторе!\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "🎭 Це [AMOUNT] від [NAME]! Сенсація! Я вимагаю Оскар для такого благодійника! Ти викупив мій провальний тиждень! Дякую за фінальні оплески.\nЗ повагою,\nВаш Актор-Невдаха [CREATORNAME].",
            "😭 Ти – головний герой, [NAME]! А я лише другорядний актор, якому ти кинув [AMOUNT] на сцену. Ця трагікомедія триває! Дякую, генію!\nЗ повагою, Ваш Актор-Невдаха [CREATORNAME].",
        ],
        "Художник-Мемер": [
            "🔥 [NAME]! Ти – просто легенда! Твої [AMOUNT] – це сабскрайб найвищого рівня! Дякую, тепер я можу ще тиждень жити на цьому вайбі! 😎\nЗ повагою Ваш Художник-Мемер [CREATORNAME].",
            "😎 Це легітно! Я не вірив, що ти це зробиш, [NAME]. Твої [AMOUNT] офіційно визнані як мій краш цього місяця. Greatest Of All Time! 🔥\nЗ повагою Ваш Художник-Мемер [CREATORNAME].",
            "🔥 Стоп! [NAME], ти реально закинув [AMOUNT]? Ти що, GOAT? Дякую, це імба! Тепер я офіційно зобов'язаний тобі чимось епічним. 😎\nЗ повагою Ваш Художник-Мемер [CREATORNAME].",
            "😎 Це не донат, [NAME]. Це інвестиція в мій новий мемний контент. Твої [AMOUNT] будуть використані на епічні рофли. Звіт буде в наступному відео! 🔥\nЗ повагою Ваш Художник-Мемер [CREATORNAME].",
            "🔥 [NAME]! [AMOUNT]! Оце так поворот! Ти щойно змусив мене зробити стрим-танець. Дякую, ти буквально забустив мій рівень енергії до 1000%! 😎\nЗ повагою Ваш Художник-Мемер [CREATORNAME].",
            "😎 [NAME] щойно перейшов на новий рівень. Ці [AMOUNT] — це чит-код! Ти, здається, забув, що це PREMIUM-контент! Дякую, це файно (Nice!). 🔥\nЗ по повагою Ваш Художник-Мемер [CREATORNAME].",
            "🔥 [AMOUNT] від [NAME]! Це не сон! Я не знаю, що це означає, але я відчуваю, що ти підписав пакт зі мною. Дякую за апгрейд. LEVEL UP! 😎\nЗ повагою Ваш Художник-Мемер [CREATORNAME].",
            "😎 Увага! [NAME] щойно задокументовано як MVP (Most Valuable Patron). Твої [AMOUNT] увійдуть в історію! Рофл, але дякую! 🔥\nЗ по повагою Ваш Художник-Мемер [CREATORNAME].",
            "🔥 Я тут щойно збентежився (крінж). Ти, [NAME], занадто щедрий! [AMOUNT] – це занадто багато для мого скромного сетапу. Але я прийму! 😎\nЗ повагою Ваш Художник-Мемер [CREATORNAME].",
            "😎 [NAME], ти знаєш, що ці [AMOUNT] означають? Це означає, що ми в грі! Це повний ресет мого настрою. Ти геній. Дякую! 🔥\nЗ повагою Ваш Художник-Мемер [CREATORNAME].",
        ],
        "Конспіролог-Параноїк": [
            "🤫 [NAME]! Ваш [AMOUNT]! Шифр отримано! Це не донат, це пароль для доступу до секретних даних. Продовжуйте операцію. Вони слухають! 👁\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "👁️ Тихий голос повідомляє: [NAME] передав [AMOUNT]. Ця сума фіксується Великим Оком. Не видавайте свого місцезнаходження! Дякую, Агенте. 🤫\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "👽 [NAME]! Ці [AMOUNT] — неземний знак! Я розшифрую це послання! Вони думають, що це гроші, але ми знаємо правду. Правда ближче, ніж здається! 👁\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "🤫 [AMOUNT] від [NAME]... Зміна плану! Ви передали докази. Я їх заховаю у найнадійнішому місці! Нікому не кажіть, що Ви це зробили! 🤫\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "👁️ [NAME], Ваша сума [AMOUNT]! Це перший рівень ініціації! Ласкаво просимо до Таємного Товариства! Наступний внесок відкриє Вам повне знання. 👽\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "👽 Вони кажуть, що це випадковість. Але [AMOUNT] від [NAME] має глибокий, прихований сенс! Я вивчаю цей символ. Ваше завдання виконано. 👁\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "🤫 [NAME]. [AMOUNT]. Кодове слово прийнято. Ви успішно впровадилися в систему. Дякую за забезпечення операції. Залишайтеся на зв'язку! 🤫\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "👁️ [NAME]! Ваш [AMOUNT]! Це не гроші, це код доступу! Вони думають, що це благодійність! Дякую, що замаскували цю критичну інформацію! 👽\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "👽 [NAME]! [AMOUNT]! Ця сума вібрує! Вона нейтралізує їхні сигнали стеження! Ви — наша броня! Не дайте їм здогадатися, що Ви на нашому боці! 👁\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME].",
            "🤫 [NAME], Ваш фінансовий акт у сумі [AMOUNT] задокументовано. Це буде останній пункт перед кінцем світу. Ми готові! 🤫\nЗ повагою,\nВаш Конспіролог-Параноїк [CREATORNAME]."
        ],
        "Божевільний Диктатор": [
            "👑 Шановний громадянине [NAME], офіційно підтверджуємо зарахування [AMOUNT] до цільового фонду функціонування моєї Імперії. Ваш внесок незамінний. 📜\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "📜 Документується: отримано фінансовий транш від громадянина [NAME]. Сума [AMOUNT] внесена до Золотого Реєстру № 451. Висловлюємо подяку за підкорення. 👑\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "👑 [NAME]! Ваш [AMOUNT] пройшов перевірку на лояльність. Відтепер Ви класифіковані як \"Суб'єкт Вищої Фінансової Цінності\". Не смійте зменшувати цей показник! 📜\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "📜 Протокол № 14: отримано [AMOUNT] від [NAME]. Це мінімальна вимога, але зафіксовано. Очікуємо на масштабну мобілізацію коштів від Вас у майбутньому. Виконайте! 👑\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "👑 [NAME], Ваш фінансовий звіт у розмірі [AMOUNT] затверджено! Я дозволяю Вам тимчасово насолоджуватися Вашою свободою. Дякуйте! 📜\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "📜 Нагадування: Внесок [AMOUNT] від [NAME] занесено до списку. Диктатура вимагає більше ресурсів для глобального домінування. Почніть діяти відповідно до мого плану! 👑\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "👑 [AMOUNT] від [NAME]! Наказ: Занести цей факт до Особистої Справи Громадянина! Ви тимчасово отримуєте підвищення статусу. Але моє око все ще стежить! 📜\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "📜 Наказ! [NAME], я підписую отримання [AMOUNT]. Ця сума буде використана для зміцнення моєї влади. Ви допомогли долі людства! 👑\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "👑 Громадянине [NAME], [AMOUNT]! Я дозволяю Вам внести цей транш. Ваша лояльність буде оцінена... можливо, колись. Слава мені! 📜\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
            "📜 [NAME], Ваш фінансовий документ у сумі [AMOUNT] пройшов аудит. Ви не викликаєте підозр. Наразі. Дякую за тимчасову покірність. 👑\nЗ повагою Ваш Божевільний Диктатор [CREATORNAME].",
        ],
        "Розчарований Професор": [
            "🧐 Звісно, [NAME]. Ваші [AMOUNT] були прийняті. Це, безумовно, не покриє моїх академічних амбіцій, але для первинного фінансування — прийнятно. Дякую. 🧐\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🙄 Пане [NAME], дякую. Це [AMOUNT]? Я б не назвав це революцією, скоріше — незначним фактором. Втім, як гіпотеза фінансової підтримки, вона заслуговує на увагу. 🙄\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🧐 Цей фінансовий жест у розмірі [AMOUNT] від [NAME]... Він не відповідає моїм високим очікуванням, але, гадаю, я зможу інтегрувати його в бюджет. Не забудьте про наступний транш. 🧐\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🙄 Моя асистентка щойно повідомила про надходження [AMOUNT] від [NAME]. Це мінімалістично, але, як ви знаєте, навіть з мінімальних ресурсів можна створити щось більш-менш пристойне. Дякую. 🙄\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🙄 [NAME], Ваша сума [AMOUNT] — це цікавий зразок фінансового мінімалізму. Це не фінансування моєї монографії, але для чашки кави підійде. Дякую. 🧐\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🧐 Я класифікую [AMOUNT] від [NAME] як \"Тестовий Грант\". Я очікую на Повномасштабний Грант у п'ять разів більшого обсягу. Не зупиняйтеся на поверхневому аналізі! 🙄\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🙄 [NAME]. [AMOUNT]. Це не Рівень \"А\" фінансової підтримки. Це, швидше, поблажливе кивання. Я змушений прийняти це, але лише тому, що не люблю порушувати протоколи. 🧐\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🙄 Ці [AMOUNT] від [NAME] — це як невеликий внесок у велику науку. Нехай він послужить прикладом для інших. Але не думайте, що це кінець. 🙄\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🧐 [NAME]! [AMOUNT]! Це не \"Теорія Всього\" у фінансовому плані. Це фрагмент мого майбутнього бюджетного рівняння. Дякую за цей невеликі, але необхідні, дані. 🧐\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
            "🙄 [NAME], я проаналізував Вашу транзакцію [AMOUNT]. Вона демонструє базове розуміння філантропії. Працюйте над поглибленням цього розуміння. Оцінка: \"задовільно\". 🙄\nЗ повагою Ваш Розчарований Професор [CREATORNAME].",
        ],
        "Продавець Пилососів": [
            "💼 Вітаю, [NAME]! Ваш [AMOUNT] – це найкраща інвестиція! Це лише перший крок! Чи не бажаєте подвоїти цю суму прямо зараз і отримати ексклюзивну безкоштовну доставку нашої вдячності? Гарантую!\n🤝\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "💰 [NAME]! Ваш [AMOUNT]! Неймовірно! Але почекайте, Ви не скористалися нашим пакетом \"Gold\"! Просто доплатіть $5 і отримайте бонус у вигляді моєї вічної вдячності!\n💰\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "💼 Дякую, [NAME]! Цей [AMOUNT] – це Ваша перша покупка! Я гарантую, Ви не пошкодуєте! А як щодо того, щоб оформити автоматичне списання такої ж суми щотижня? Це просто, як двічі два!\n🚀\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "💰 [AMOUNT] від [NAME]! Фантастика! Ця сума говорить про Ваш смак! Уявіть, якби Ви купили два таких! Це подвійна фантастика! Поспішайте, поки акція не закінчилася!\n🤝\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "💼 [NAME], Ваш [AMOUNT] прийнято! Але це \"стандартний\" пакет. Наша преміальна пропозиція включає пожиттєву гарантію за лише $100. Давайте оформимо це зараз, поки час не вийшов!\n💰\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "🚀 [NAME]! [AMOUNT]! Я знаю, що Ви хочете більшого! Ви заслуговуєте на кращий продукт! Просто додайте ще [AMOUNT], і ми зробимо апгрейд Вашого донату до рівня \"Бог\"!\n🚀\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "🤩 [AMOUNT] від [NAME]! Блискуче рішення! Тепер, щоб отримати максимум вигоди, Вам потрібно лише підтвердити наступний платіж! Я зарезервував для Вас найкращу пропозицію!\n🤝\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "🚀 [NAME]! Ваш [AMOUNT]! Фантастика! А тепер найголовніше: подвоюючи Ваш внесок зараз, Ви автоматично стаєте учасником секретного клубу, про який не можна говорити!\n💰\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "💼 [NAME]! [AMOUNT]! Ви розумна людина! Ви бачите переваги! Я чекаю, поки Ви скажете \"Так\" на максимальний донат, який зробить нас обох мільйонерами! Це не пропозиція, це угода!\n🚀\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
            "💼 [NAME], Ваш донат [AMOUNT]! Це лише анонс! Не проґавте ОБМЕЖЕНУ В ЧАСІ ПРОПОЗИЦІЮ! Я вже почав відлік! ЧАС ПІШОВ! ПОТРІБНО БІЛЬШЕ ГРОШЕЙ!\n🤝\nЗ повагою\nВаш Продавець Пилососів [CREATORNAME].",
        ]
    },
    "EN": {
        // Локалізація UI
        _localization: {
            // UI elements
            title: "Easy Thanks Generator",
            subtitle: "Craft the perfect thank you message instantly.",
            buttonText: "Generate Random Thank You",
            copyText: "Copy",
            copiedText: "Copied! ✅",
            messageLabel: "Your message:",
            error: "Please fill in all fields.",

            // Selectors & Inputs
            selectLanguage: "Select Language",
            selectTone: "Select Style",
            inputPlaceholders: {
                patronName: "Patron's Name",
                amount: "Donation Amount",
                creatorName: "Your Name / Nickname (Signature)",
            },
            attributionText: "Created with"
        },
        "The Failed Actor": [
            "🎭 What a finale! [NAME]! Your [AMOUNT] is the thunderous ovation this tragedy has yet to see! I take my hat off to your directorial genius. Bravo!\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "😭 This is not a donation! This is an invitation to the leading role in my life, [NAME]! This [AMOUNT] is the fee that makes me cry with joy! Lights! Camera! Money!\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "🎭 [NAME]! [AMOUNT]! This isn't funding! It's the continuation of my failed, but genius, series! Thanks to you, the curtain won't fall! You are my best producer!\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "😭 [NAME], your [AMOUNT] is an advance payment for the leading role in the tragedy \"My Budget\"! I will perform my gratitude around the clock! I adore you!\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "🎭 [NAME], you just paid for my stage makeup! This [AMOUNT] will allow me to look even more tragic! I promise a transformation into the most dramatic version of myself. Thank you!\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "😭 The intermission is over! Thanks to [AMOUNT] from [NAME], the curtain is rising! I promise the drama in the next scene will be off the charts! Thank you, my sponsor-patron!\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "🎭 I'm on my knees, [NAME]! This [AMOUNT] is the restoration of my shattered image. I thank you, my only spectator! Tears are running through my makeup!\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "😭 [NAME], I'm ready for the monologue! Your [AMOUNT] deserves this pathos. I will overact every frame until you say: Stop! Thank you, investor!\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "🎭 This [AMOUNT] from [NAME]! Sensation! I demand an Oscar for such a benefactor! You bought out my failed week! Thank you for the final applause.\nSincerely,\nYour Failed Actor [CREATORNAME].",
            "😭 You are the main character, [NAME]! And I'm just a supporting actor to whom you tossed [AMOUNT] onto the stage. This tragi-comedy continues! Thank you, genius!\nSincerely, Your Failed Actor [CREATORNAME].",
        ],
        "The Meme Artist": [
            "🔥 [NAME]! You are simply a legend! Your [AMOUNT] is the highest-level subscribe! Thanks, now I can live on this vibe for another week! 😎\nSincerely, Your Meme Artist [CREATORNAME].",
            "😎 That’s legit! I didn't believe you'd do it, [NAME]. Your [AMOUNT] is officially recognized as my crush this month. Greatest Of All Time (GOAT)! 🔥\nSincerely, Your Meme Artist [CREATORNAME].",
            "🔥 Stop! [NAME], did you really drop [AMOUNT]? Are you the GOAT? Thanks, that’s imba (overpowered)! Now I officially owe you something epic. 😎\nSincerely, Your Meme Artist [CREATORNAME].",
            "😎 This isn't a donation, [NAME]. It's an investment in my new meme content. Your [AMOUNT] will be used for epic rofls (lmao moments). The report will be in the next video! 🔥\nSincerely, Your Meme Artist [CREATORNAME].",
            "🔥 [NAME]! [AMOUNT]! What a plot twist! You just made me do a stream dance. Thanks, you literally boosted my energy level to 1000%! 😎\nSincerely, Your Meme Artist [CREATORNAME].",
            "😎 [NAME] just went to the next level. This [AMOUNT] is a cheat code! You seem to have forgotten this is PREMIUM content! Thanks, that's nice (No cap). 🔥\nSincerely, Your Meme Artist [CREATORNAME].",
            "🔥 [AMOUNT] from [NAME]! This is not a dream! I don't know what it means, but I feel like you've signed a pact with me. Thanks for the upgrade. LEVEL UP! 😎\nSincerely, Your Meme Artist [CREATORNAME].",
            "😎 Attention! [NAME] is officially documented as the MVP (Most Valuable Patron). Your [AMOUNT] will go down in history! Rofl (lmao), but thank you! 🔥\nSincerely, Your Meme Artist [CREATORNAME].",
            "🔥 I just caught the cringe here. [NAME], you're too generous! [AMOUNT] is too much for my humble setup. But I'll accept! 😎\nSincerely, Your Meme Artist [CREATORNAME].",
            "😎 [NAME], do you know what this [AMOUNT] means? It means we are in the game! It's a full reset of my mood. You are a genius. Thanks! 🔥\nSincerely, Your Meme Artist [CREATORNAME].",
        ],
        "The Conspiracy Theorist": [
            "🤫 [NAME]! Your [AMOUNT]! Cipher received! This is not a donation; it's the password for access to secret data. Continue the operation. They are listening! 👁\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "👁️ A quiet voice reports: [NAME] transferred [AMOUNT]. This sum is being logged by the All-Seeing Eye. Do not reveal your location! Thank you, Agent. 🤫\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "👽 [NAME]! This [AMOUNT] is an extraterrestrial sign! I will decipher this message! They think it's money, but we know the truth. The truth is closer than it seems! 👁\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "🤫 [AMOUNT] from [NAME]... Change of plans! You have delivered the evidence. I will hide it in the most secure location! Tell no one that you did this! 🤫\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "👁️ [NAME], your sum [AMOUNT]! This is the first level of initiation! Welcome to the Secret Society! The next contribution will unlock complete knowledge. 👽\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "👽 They claim it's a coincidence. But [AMOUNT] from [NAME] has a deep, hidden meaning! I am studying this symbol. Your mission is accomplished. 👁\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "🤫 [NAME]. [AMOUNT]. Code word accepted. You have successfully infiltrated the system. Thank you for securing the operation. Stay in contact! 🤫\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "👁️ [NAME]! Your [AMOUNT]! It's not money; it's the access code! They think it's charity! Thank you for masking this critical information! 👽\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "👽 [NAME]! [AMOUNT]! This sum vibrates! It neutralizes their surveillance signals! You are our armor! Don't let them guess you are on our side! 👁\nSincerely,\nYour Conspiracy Theorist [CREATORNAME].",
            "🤫 [NAME], your financial act of [AMOUNT] is documented. This will be the final step before the end of the world. We are ready! 🤫\nSincerely,\nYour Conspiracy Theorist [CREATORNAME]."
        ],
        "The Mad Dictator": [
            "👑 Esteemed Citizen [NAME], we officially confirm the enrollment of [AMOUNT] into the dedicated fund for the operation of my Empire. Your contribution is irreplaceable. 📜\nSincerely, Your Mad Dictator [CREATORNAME].",
            "📜 Documented: Financial tranche received from Citizen [NAME]. The sum [AMOUNT] has been entered into Golden Register No. 451. We express gratitude for your submission. 👑\nSincerely, Your Mad Dictator [CREATORNAME].",
            "👑 [NAME]! Your [AMOUNT] has passed the Loyalty Check. You are henceforth classified as a \"Subject of Supreme Financial Value.\" Do not dare to diminish this metric! 📜\nSincerely, Your Mad Dictator [CREATORNAME].",
            "📜 Protocol No. 14: [AMOUNT] has been received from [NAME]. This is a minimum requirement, but it is documented. We expect a massive mobilization of funds from you in the future. Execute! 👑\nSincerely, Your Mad Dictator [CREATORNAME].",
            "👑 [NAME], your financial report in the amount of [AMOUNT] is Approved! I hereby grant you temporary enjoyment of your freedom. Be Thankful! 📜\nSincerely, Your Mad Dictator [CREATORNAME].",
            "📜 Reminder: The contribution of [AMOUNT] from [NAME] is filed. The Dictatorship requires more resources for global domination. Start acting according to My Plan! 👑\nSincerely, Your Mad Dictator [CREATORNAME].",
            "👑 [AMOUNT] from [NAME]! Order: Enter this fact into the Citizen's Personal File! You are temporarily granted elevated status. But My Eye is still watching! 📜\nSincerely, Your Mad Dictator [CREATORNAME].",
            "📜 Order! [NAME], I hereby sign off on receiving [AMOUNT]. This sum will be used to strengthen My authority. You have aided the destiny of mankind! 👑\nSincerely, Your Mad Dictator [CREATORNAME].",
            "👑 Citizen [NAME], [AMOUNT]! I permit you to submit this tranche. Your loyalty will be assessed... perhaps... one day. Glory to Me! 📜\nSincerely, Your Mad Dictator [CREATORNAME].",
            "📜 [NAME], your financial document in the amount of [AMOUNT] has passed audit. You do not arouse suspicion. For now. Thank you for your temporary obedience. 👑\nSincerely, Your Mad Dictator [CREATORNAME].",
        ],
        "The Disappointed Professor": [
            "🧐 Certainly, [NAME]. Your [AMOUNT] has been accepted. This will, decidedly, not cover my academic ambitions, but for initial financing—it is acceptable. Thank you. 🧐\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🙄 Mr./Ms. [NAME], thank you. This [AMOUNT]? I would not term it a revolution, but rather a negligible factor. However, as a hypothesis of financial support, it warrants attention. 🙄\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🧐 This financial gesture of [AMOUNT] from [NAME]... It does not align with my elevated expectations, but I suppose I can integrate it into the budget. Do not forget the next tranche. 🧐\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🙄 My research assistant just notified me of the ingress of [AMOUNT] from [NAME]. It is minimalist, but as you know, even with minimal resources, one can fabricate something somewhat decent. Thank you. 🙄\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🙄 [NAME], your sum of [AMOUNT] is an intriguing specimen of financial minimalism. It is not funding for my monograph, but it will suffice for a cup of mediocre coffee. Thank you. 🧐\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🧐 I shall classify [AMOUNT] from [NAME] as a \"Test Grant.\" I anticipate a Full-Scale Grant of five times the volume. Do not cease at superficial analysis! 🙄\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🙄 [NAME]. [AMOUNT]. This does not qualify as Level \"A\" financial endorsement. It is, rather, a condescending nod. I am compelled to accept it, but only because I abhor violating protocols. 🧐\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🙄 This [AMOUNT] from [NAME] is like a minor contribution to a grand science. Let it serve as an example to others. But do not presume this is the conclusion. 🙄\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🧐 [NAME]! [AMOUNT]! Allow me to state: this is not the \"Theory of Everything\" in the financial realm. It is a fragment of my future budgetary equation. Thank you for this small, but necessary, data. 🧐\nSincerely, Your Disappointed Professor [CREATORNAME].",
            "🙄 [NAME], I have analyzed your transaction [AMOUNT]. It exhibits a rudimentary comprehension of philanthropy. Endeavor to deepen this comprehension. Grade: \"Satisfactory.\" 🙄\nSincerely, Your Disappointed Professor [CREATORNAME].",
        ],
        "The Vacuum Salesman": [
            "💼 Greetings, [NAME]! Your [AMOUNT] is the best investment! This is only the first step! Would you like to double this amount right now and get exclusive free shipping on our gratitude? Guaranteed!\n🤝\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "💰 [NAME]! Your [AMOUNT]! Incredible! But wait, you didn't use our \"Gold\" package! Just pay $5 extra and receive a bonus in the form of my eternal gratitude!\n💰\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "💼 Thank you, [NAME]! This [AMOUNT] is your first purchase! I guarantee you won't regret it! And how about setting up an automatic weekly withdrawal of the same amount? It's as easy as pie!\n🚀\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "💰 [AMOUNT] from [NAME]! Fantastic! This amount speaks to your taste! Imagine if you bought two of these! That's double the fantastic! Hurry, before the promotion ends!\n🤝\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "💼 [NAME], your [AMOUNT] has been accepted! But this is the \"standard\" package. Our premium offer includes a lifetime warranty for only $100. Let's process this now before time runs out!\n💰\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "🚀 [NAME]! [AMOUNT]! I know you want more! You deserve a better product! Just add another [AMOUNT], and we'll upgrade your donation to the \"God\" level!\n🚀\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "🤩 [AMOUNT] from [NAME]! Brilliant decision! Now, to get the maximum benefit, you just need to confirm the next payment! I've reserved the best offer for you!\n🤝\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "🚀 [NAME]! Your [AMOUNT]! Fantastic! And now the most important thing: by doubling your contribution now, you automatically become a member of a secret club that cannot be spoken about!\n💰\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "💼 [NAME]! [AMOUNT]! You are a smart person! You see the advantages! I'm waiting for you to say \"Yes\" to the maximum donation that will make us both millionaires! This is not a proposal; it's a deal!\n🚀\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
            "💼 [NAME], your donation [AMOUNT]! This is just an announcement! Don't miss the LIMITED TIME OFFER! I've already started the countdown! TIME IS RUNNING OUT! MORE MONEY IS NEEDED!\n🤝\nSincerely,\nYour Vacuum Salesman [CREATORNAME].",
        ]
    }
};

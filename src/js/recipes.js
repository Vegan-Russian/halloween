/**
 * ИНСТРУКЦИЯ:
 * 1. Все поля должны быть прописаны. Если нет содержимого, например, нет ссылки, то просто вставляем пустую строку — ""
 * 2. Все списки разбиваются на пункты, которые заполняются внутри квадратных скобок [] и перечисляются через запятую. Если список
 * состоит из одного пункта, всё равно прописываем его в скобках
 * 3. Картинки добавляются в папку images. Вне зависимости от формата изображения (jpeg|png) мы пишем расширение .webp.
 * Папка mock создана для демонстрации и не должна использоваться в качестве хранилища фотографий.
 * Пример пути для изображения — ./images/my-image.webp
 * 4. id - это уникальный идентификатор рецепта. Последовательно прибавляем единичку от id предыдущего рецепта, начиная с 1.
 * 5. Любой текст обязательно оборачивается в кавычки. Если внутри названия уже есть какие-то кавычки - заменяем их на кавычки-ёлочки, например - "Говорят, «тощих»..."
 * 6. Если будет что-то непонятно при заполнении, можно написать мне в телеграм - @lefhl
 */

export const actualRecipes = [
  {
    id: 1,
    title: "Пальцы-сосиски",
    image: "./images/recipes/sosiski-palcy.webp",
    author: "paleandsweet",
    authorLink: "instagram.com/paleandsweet",
    year: 2022,
    description:
      ["Говорят, тощих людей легче похитить, но&nbsp;ведь толстяков проще догнать и&nbsp;пальчики у них вкуснее.",
      "Веганские сосиски хороши тем, что можно их и&nbsp;не&nbsp;готовить, а&nbsp;значит подготовка этой закуски займет минимальное количество времени, что важно, если вы делаете много веган блюд для хэллоуинской вечеринки."],
    ingredients: ["Сосиски (у меня миньон Vego)", "Хлебные палочки соленые", "Кетчуп или соус Барбекю"],
    category: "Закуска",
    steps: [
      "С помощью ножа и&nbsp;зубов придать сосискам вид оторванных пальцев с&nbsp;выдернутыми ногтями.",
      "Воткнуть хлебные «косточки» в&nbsp;«пальчики» для реалистичности.",
      "Налить «кровищу» в&nbsp;соусницу, и&nbsp;воткнуть в нее «пальцы», либо полить «пальчики» «кровавым» соусом, разместив их на&nbsp;плоской тарелке.",
    ],
  },
  {
    id: 2,
    title: "Тако на&nbsp;Хэллоуин",
    image: "./images/recipes/tako-na-halloween.webp",
    author: "Варя Платонова",
    description: "Этот рецепт рассчитан на 2 тако, его можно адаптировать под себя, к примеру, фрикадельки заменить на фалафель, а граммовки не строги, но от этого обычный тако на Хеллоуин все равно будет жутким... Жутко вкусным!",
    category: "Закуска",
    authorLink: "https://www.instagram.com/variaplaton",
    year: 2022,
    ingredients: [
      "Ингредиенты для&nbsp;начинки:",
      "4 фрикадельки от Hi!",
      "40 г консервированной фасоли",
      "40 г веганского сыра",
      "Соус тар-тар (покупной или&nbsp;домашний)",
      "Я также добавляла манго, но мне не совсем понравилось сочетание. Можно добавить сладкий перец.",
      "Ингредиенты для&nbsp;теста:",
      "70 г кукурузной муки",
      "70 г пшеничной муки",
      "70 мл воды",
      "20 мл масла растительного",
      "1/3 ч.л. соли",
      "Ингредиенты для&nbsp;гуакамоле:",
      "½ спелого авокадо",
      "½ помидора",
      "½ маленькой луковицы красного лука",
      "Перец по вкусу",
    ],
    steps: [
      "Сначала займёмся тортильями. Если не&nbsp;хотите заморачиваться, то&nbsp;купите готовые и&nbsp;смело пропускайте этот шаг. Итак, смешиваем два вида муки, соль, можно взять и&nbsp;только пшеничную муку. Постепенно вмешиваем воду. Должно получиться немного липкое тесто.",
      "Накрываем тесто полотенцем и&nbsp;даём постоять 30 минут, чтобы волокна глютена «раскрылись»",
      "После того, как тесто постояло, разделяем тесто на&nbsp;одинаковые шарики. Я не&nbsp;могу подсчитать, количество шариков, т.к. готовила больше. Присыпаем поверхность раскатки мукой и раскатываем тесто в&nbsp;лепёшки. Толщину определяйте по вашему вкусу, любите помягче — делайте потолще, более хрустящие лепёшки — потоньше.",
      "Нагреваем сковороду и готовим лепёшки на&nbsp;сухой сковороде при&nbsp;температуре выше среднего (на конфорке это 6).",
      "Сразу после того, как лепешка приготовилась, ей нужно придать форму, для&nbsp;этого я использую салфетницу округлой формы и решётку, важно не&nbsp;медлить, чтобы получить желаемую форму.",
      "После этого (или во время) обжариваем фрикадельки на растительном масле. Предварительно я их не размораживала.",
      "Мнём фасоль. Можно спокойно пропустить этот шаг, если хотите оставить так.",
      "Для гуакамоле разминаем до кашицы авокадо, добавляем мелко нарезанный помидорчик, лук, сок лимона или&nbsp;лайма и&nbsp;соль с&nbsp;перцем.",
      "Нарезаем кружочками маслины.",
      "Натираем сыр.",
      "Собираем! Сначала по дну тортильи распределяем гуакамоле, затем кладём фасоль, сыр, потом два шарика фрикаделек и&nbsp;на каждый из них немного соуса тар-тар, а&nbsp;сверху по кружочку маслин, чтобы это было похоже на&nbsp;глазки:)",
      "Фокус-покус и наши тако готовы! Мне они очень напоминают глаза мумии. Кушайте с&nbsp;удовольствием, под&nbsp;прекрасные хэллоуинские песни.",
    ],
  },
  {
    id: 3,
    title: "Кровавый блинный торт",
    image: "./images/recipes/krovavyi-blinnyi-tort.webp",
    author: "Майя",
    authorLink: "https://www.instagram.com/kolloteka",
    description: "Блинные торты - самые быстрые и простые по-моему! Время приготовления: 1.5~ часа.",
    category: "Десерт",
    year: 2022,
    ingredients: [
      "Ингредиенты для&nbsp;блинов:",
      "500 г муки обычной",
      "600 мл  воды",
      "Ванилин по&nbsp;вкусу",
      "2 ст.л. сахара",
      "Кусочек кокосового масла размером с 1,5 конфеты «Мишка косолапый»",
      "Ингредиенты для кровавого крема:",
      "~280 г сметаны (у меня Green Idea. Примерно 30 г. сметаны оставьте белой на&nbsp;верхушку)",
      "10 мл красного пищевого красителя",
    ],
    steps: [
      "Приготовьте блины по&nbsp;своему любимому рецепту или по&nbsp;моему:",
      "Растапливаем масло в&nbsp;микроволновке, смешиваем все ингредиенты. Жарим максимально круглые блины на&nbsp;сильном огне. Выливаем из&nbsp;теста буквы «b, o, o» или&nbsp;декор какой хотите (я воспользовалась шприцом без\&nbsp;иголки, хотя до&nbsp;этого получалось и&nbsp;без него).",
      "Смешиваем ~ 250г. сметаны с красителем до&nbsp;красного-кровавого вида. Зависит от&nbsp;того боитесь, вы большого количества красителя, или нет)",
      "Мажем крем на&nbsp;каждый слой. Сверху мажем оставшуюся не&nbsp;крашенную сметану. Раскрашиваем буквы boo красителем, брызгаем «кровь» куда хотим — шедевр!",
    ],
  },
  {
    id: 4,
    title: "Булочки с&nbsp;тыквенным муссом",
    image: "./images/recipes/bulochki-tikvennyi.webp",
    author: "Артём Скворцов",
    authorLink: "",
    description: "Тёплые ароматные булочки с пряным тыквенным муссом создадут приятную осеннюю атмосферу и подарят Хэллоуинское настроение.",
    category: "Десерт",
    year: 2022,
    ingredients: [
      "Ингредиенты для&nbsp;теста:",
      "200 г теплой воды",
      "50 г сахара",
      "10 г дрожжей",
      "350 г муки",
      "2 ст.л. подсолнечного масла",
      "1/2 ч.л. корицы",
      "1/2 ч.л. мускатного ореха",
      "1 ч.л. куркумы",
      "50 г маргарина",
      "Ингредиенты для&nbsp;мусса:",
      "250 г тыквы",
      "100 г растительного молока",
      "¼ ч.л. корицы",
      "¼ ч.л. мускатного ореха",
      "На кончике ножа – Порошок имбиря",
      "20 г Сироп по вкусу (у&nbsp;меня топинамбура)",
    ],
    steps: [
      "Булочки:",
      "К теплой воде добавить дрожжи и&nbsp;сахар, размешать.",
      "К смеси добавить муку и&nbsp;специи.",
      "Замесить тесто. К замешанному шарику теста добавить подсолнечного масла",
      "Оставить подниматься под крышкой на&nbsp;час.",
      "Разделить тесто на&nbsp;маленькие шарики диаметром ~ 7 см.",
      "Шарики обвязать ниткой или&nbsp;жгутом с разных сторон в форме сторон тыкв (примерно 8 частей), обязательно оставлять место, так как булочки сильно поднимутся.",
      "Смазать булочки маргарином/чайной заваркой/сахарным сиропом (чтобы они подрумянились).",
      "Выпекать в&nbsp;духовке 30 мин при&nbsp;180°.",
      "После выпекания срезать нитки.",
      "Мусс:",
      "Отварить или&nbsp;запечь тыкву.",
      "Все ингредиенты смешать в&nbsp;блендере.",
      "Подавать в&nbsp;посуде, чтобы можно было макать булочки.",
      ],
  },
];
/**
 * Обрати внимание, что тут логика айди чуть поменялась. Теперь это — год-идентификатор. Это нужно, чтобы изолировать рецепты прошлых лет от новых. Иначе можно запутаться в последовательном присвоении айдишек и не переписывать их все, когда, например, в рецептах этого года поменяется количество рецептов.
 */
export const previousRecipes = {
  2021: [
    {
      id: "2021-1",
      title: "Брауни с привидениями",
      image: "./images/recipes/2021/brauni-prizrak-1-place.webp",
      author: "Евгения",
      authorLink: "https://www.instagram.com/zhenyaveganfood/",
      year: 2021,
      description:
        "",
      ingredients: ["60 г муки", "75 мл воды", "20 г кокосового или&nbsp; любого другого растительного масла","25 г сахара",
        "1 ст. л. варенья (если оно красное, то&nbsp; поменьше, чтобы тесто не&nbsp; окрасилось)",
        "3 г разрыхлителя","Две щепотки ванилина"],
      place: 1,
      category: "Десерт",
      steps: [
        "Для основного теста заливаем воду в миску и&nbsp; смешиваем ее с&nbsp; сахаром.",
        "Добавляем растопленное кокосовое масло, перемешиваем.",
        "В отдельной миске смешиваем муку с&nbsp; какао и&nbsp; разрыхлителем.",
        "Постепенно соединяем сухие ингредиенты со&nbsp; смесью воды, сахара и&nbsp;масла. Перемешивать лучше венчиком.",
        "Добавляем ванилин и&nbsp; варенье.",,
        "В отдельной посуде повторяем то же&nbsp; самое с&nbsp; ингредиентами для привидений, но только без какао.",
        "Застилаем форму бумагой и&nbsp; заливаем основное тесто.",
        "Далее столовой ложкой капаем белое тесто, оттягивая «хвостики».",
        "К остаткам этого теста можно добавить побольше какао, чтобы сделать привидениям глаза.",
        "Ставим брауни в духовку, предварительно разогретую до&nbsp; 180 градусов, на&nbsp; 30-40 минут.",
        "Готовность проверяем зубочисткой, при&nbsp; необходимости увеличиваем время приготовления.",
      ],
    },
    {
      id: "2021-2",
      title: "Капкейки и печенье пальцы",
      image: "./images/recipes/2021/cupcakes-i-pechenia-palci-2-place.webp",
      author: "Tasty_Tales__",
      authorLink: "https://www.instagram.com/tasty_tales__/",
      year: 2021,
      description:
        "",
      ingredients: ["Ингредиенты для&nbsp; капкейков:",
        "100 мл воды", "60 г сахара", "20 г масла подсолнечного","120 г муки","5 г разрыхлителя","20 г какао","Ванилин",
        "Ингредиенты для крема:",
        "100 мл аквафабы","200 г сахара","70 мл воды","Лимонная кислота","Краситель (веганский)",
        "Ингредиенты на&nbsp; тесто для&nbsp; «пальцев»",
        "Арахисовая паста","Кокосовое масло","Сахар","Мука","Разрыхлитель","Орехи и малиновое варенье","Пропорции я брала на&nbsp; глаз."
      ],
      place: 2,
      category: "Десерт",
      steps: [
        "Все смешать хорошенько, выпекать 20 минут.",
        "Воду и&nbsp;сахар поставить на&nbsp; плиту и&nbsp; одновременно начать взбивать аквафабу (я, кстати, беру водичку из-под нута из «Fix Price» и&nbsp;увариваю примерно в 2 раза)",
        "После закипания в&nbsp; сироп добавить лимонную кислоту и&nbsp; варить ещё 2-3 минуты. Добавить тонкой струйкой в&nbsp; уже хорошо взбившуюся аквафабу. Можно использовать как крем или&nbsp; сделать безе.",
        "Смешать ингредиенты для пальцев чтобы получилось тесто как пластилин. Можно убрать в&nbsp; холодильник на часок.",
        "Слепить все, что&nbsp;душе угодно! И&nbsp;запекать 15-20 минут.",
      ],
    },
    {
      id: "2021-3",
      title: "Торт бисквитный «три шоколада»",
      image: "./images/recipes/2021/tort-bisquit-3-chokolate-3-place.webp",
      author: "m.v.pastry",
      authorLink: "https://www.instagram.com/m.v.pastry/",
      year: 2021,
      description:
        "",
      ingredients: ["Ингредиенты для&nbsp; бисквитов:",
        "20 г какао порошка (берите Колумбию, он нереально ароматный)","70 г сахара кокосового","60 г нутовой муки","60 г муки зеленой гречки","30 г рисовой муки","70 г универсальной безглютеновой смеси",
        "260 г ванильного немолока","50 г масла виноградной косточки или&nbsp; оливкового","1 ч. л. разрыхлителя",
        "Ингредиенты для&nbsp; первого ганаша:",
        "80 г сиропа топинамбура","10г кокосовые сливки Aroy-D","80г какао тертое",
        "Ингредиенты для&nbsp; второго ганаша:",
        "60 г кокосового урбеча","60 г тертого какао","80 г сиропа топинамбура","50г ванильного немолока",
        "Ингредиенты для крема:",
        "0.5 ч. л. агар-агар сила 900","80 г ванильного немолока","60 г сиропа топинамбура","60 г какао масла",
        "Ингредиенты для&nbsp;финиш ганаша:",
        "150 г сиропа топинамбура","180 г кокосовых сливок Aroy-D","220 г тертого какао",
      ],
      place: 3,
      category: "Десерт",
      steps: [
        "Приготовление бисквита:",
        "Духовку разогреть до 170 градусов.",
        "Смешать отдельно сухие ингредиенты, отдельно молоко с маслом.",
        "Всыпать через сито сухие ингредиенты (сахар может быть крупным, останется в сите, высыпьте его к остальной смеси потом).",
        "Сразу замешать венчиком тесто. Вылить в форму, выпекать 25 минут.",
        "Бисквит немного охладить, не&nbsp; вынимая из формы, потом достать и&nbsp; завернуть в пищевую пленку",
        "Приготовление первого ганаша:",
        "Нагреть сироп и&nbsp; сливки.",
        "Вылить на&nbsp; тертое какао.",
        "Пробить погружным блендером.",
        "Убрать в холодильник на&nbsp; ночь, накрыв пленкой в&nbsp; контакт.",
        "Приготовление второго ганаша:",
        "Нагреть сироп, молоко и&nbsp; кокосовый урбеч.",
        "Вылить на&nbsp; тертое какао.",
        "Пробить погружным блендером.",
        "Накрыть пленкой в&nbsp; контакт и&nbsp; оставить на&nbsp; ночь в холодильнике.",
        "Приготовление крема:",
        "Соединить в сотейнике агар, молоко и&nbsp; сироп. Нагреть, мешая, кипятить 8 секунд.",
        "Охладить массу до&nbsp; 60 градусов, вылить на&nbsp; какао масло.",
        "Пробить блендером, накрыть пленкой в&nbsp; контакт и&nbsp; отправить в&nbsp; холодильник на ночь.",
        "Пробить блендером перед тем, как&nbsp; мазать на&nbsp; бисквит.",
        "Приготовление финиш ганаша:",
        "Нагреть сироп и&nbsp;сливки.",
        "Вылить на&nbsp;тертое какао.",
        "Пробить блендером.",
        "Накрыть в контакт, убрать в&nbsp;холод.",
        "Сборка:",
        "Немного финишного ганаша выложить на&nbsp;подложку.",
        "Выложить заранее пропитанный бисквит (вода + сироп топинамбура).",
        "Переложить все ганаши в не одноразовые пакеты и&nbsp;нагреть руками.",
        "Промазываем первым ганашем бисквит.",
        "Выкладываем второй бисквит.",
        "Промазываем вторым ганашем.",
        "Выкладываем третий бисквит.",
        "Промазываем кремом.",
        "Выкладываем последний бисквит.",
        "Декор:",
        "Растопить темперированный шоколад, добавить белого красителя, чтобы картинку было видно лучше.",
        "Шоколад нанести на&nbsp;матовую сторону шокотрансфера (Сверху положить что-нибудь тяжелое, чтобы шоколад не погнулся).",
        "Размягчить вафельную бумагу над&nbsp;кипящей водой, придать ей форму.",
        "Приклеить на шоколад картинку и вафельную бумагу.",
        "Отлить из шоколада череп.",
        "Во время прикрепления объемных фигур на торты не забывайте о&nbsp;шпажках, причем чем тяжелее фигура — тем больше шпажек.",
      ],
    },
  ],
  2020: [
    {
      id: "2020-1",
      title: "Пицца «Мёртвая голова»",
      image: "./images/recipes/2020/pizza-mertvaya-golova.webp",
      author: "Юлия Амелина",
      authorLink: "https://och-vkusno.com/vtorye-blyuda/picca-myortvaya-golova-na-xellouin/",
      year: 2020,
      description:
        "",
      ingredients: ["Тесто (на&nbsp;2 пиццы)",
        "475 г пшеничной муки","1 ч л (5 г) соли","2 ч.л. (8 г) сахара","1 пакетик (8 г) сухих быстрых дрожжей","270 г тёплой воды","80 г растительного масла","4 ч.л. (25 г) кукурузного крахмала","1 ч.л. (5 г) пекарского порошка",
        "Топпинг «Мёртвая голова»",
        "Около 200 г любого томатного соуса/пасты + пара ст. л. для штрихов к топпингу0",
        "160-170 г веганского сыра, который можно натереть и который плавится при нагревании",
        "1 небольшой тонкий красный сладкий перец = «нос»",
        "Несколько маленьких помидоров черри = «прыщи»",
        "10 консервированных белых фасолин = «зубы»",
        "Несколько маслин или оливок без косточек или фаршированных = «прыщи» и «глаза»",
        "2-3 ч. л. веганского майонеза = «глазные яблоки»",
        "1 фиолетовая или обычная луковица диаметром 6-8 см = «глазницы»",
        "100-120 г любого готового веганского фарша: подойдёт, например, приготовленный микс для чечевичных/соевых котлет/фалафеля; я использовала 1 бейонд-котлету",
      ],
      place: 1,
      category: "Закуска",
      steps: [
        "Нагреть воду до&nbsp; 45-50°С. Всыпать туда быстрые дрожжи, размешать до&nbsp;полного растворения дрожжей.",
        "В глубокой посуде смешать муку, соль, сахар, крахмал и&nbsp;пекарский порошок. Влить туда воду с&nbsp;дрожжами и&nbsp;растительное масло. Размешать сначала ложкой, потом вымешивать рукой до&nbsp;тех пор, пока тесто не&nbsp;станет отставать от пальцев. Плотно накрыть — крышкой или полотенцем, оставить примерно на час. Тесто должно подняться. Ещё раз вымешать его, оставить ещё на&nbsp;полчаса накрытым.",
        "Противень проложить бумагой/ковриком для&nbsp;выпечки, присыпать мукой.",
        "Через полчаса разделить тесто на&nbsp;2 равные части. Одну — в целлофановый мешок или&nbsp;плотный контейнер и в холодильник до&nbsp;следующей готовки.",
        "Вторую часть теста растягиваем в воздухе в&nbsp;среднюю лепёшку, затем кладём на&nbsp;подготовленный противень, формируем руками большую лепёшку высотой 0.3-0.7 мм.",
        "Включить духовку на разогрев на 180°С. И приступаем непосредственно к&nbsp;«мёртвой голове».",
        "Выложить томатный соус на\&nbsp;тесто и&nbsp;с&nbsp;помощью силиконовой кисточки распределить его по всей поверхности, оставив непокрытой кромку теста шириной около 1 см.",
        "Постарайтесь, чтобы соус лежал равномерно — ведь нам нужен единообразный «кровавый» фон.",
        "Два стаканчика из-под&nbsp;йогурта установить в&nbsp;места будущих глазниц — так фон глазниц останется красным, когда вы будете покрывать пиццу сыром.",
        "Перец разрезать вдоль. Для «носа» понадобится всего лишь небольшая часть одной половинки — кончик высотой около 5 см. Я ещё вырезала внизу «носа» небольшой треугольник, чтобы выражение «лица» было пострашнее.",
        "Можно примерить «нос». И&nbsp;убрать — положим его после сыра.",
        "Веганский сыр натереть на&nbsp;крупной тёрке и засыпать сыром лицо «мёртвой головы» в&nbsp;соответствии с&nbsp;дизайн-макетом. Обратите внимание: в&nbsp;области рта и&nbsp;в&nbsp;некоторых местах по&nbsp;краю пиццы должны оставаться островки без сыра. Вот теперь устанавливаем «нос».",
        "Помидоры черри нарезать половинками, луковицу — на&nbsp;тонкие кольца или&nbsp;полукольца, как получится.",
        "Оливки или маслины нарезать поперёк колёсиками. Два самых ровных и&nbsp;крупных колёсика станут «глазами». Я использовала крупные оливки, фаршированные миндалём, так что миндаль прекрасно исполнил роль зрачка.",
        "Раскладываем на лице «прыщи» — черри и оливки.",
        "Теперь «глаза». Убираем стаканчики, выкладываем луковые кольца в&nbsp;«глазницы». В места, где будут находиться непосредственно оливки-глаза, положить немного майонеза — и уже на него оливки.",
        "Раскладываем консервированную фасоль на месте зубов — чем они будут кривее, тем экспрессивнее получится пицца. Кстати, в процессе выпечки фасоль лопается и выворачивается в разные стороны, так что зубы в&nbsp;результате получатся что надо.",
        "Последний элемент — веганский фарш. Если вы используете готовую котлетку, как&nbsp;я, разомните её руками.",
        "Раскладываем кусочки фарша по&nbsp;бокам «лица» в тех местах, где нет сыра, кроме середины рта.",
        "Завершающий штрих — наносим поверх фарша и&nbsp;там-сям капли томатного соуса, чтобы пицца выглядела более объёмно и выразительно.",
        "Ставим пиццу в духовку на 20-25 минут. Готовой пицце дать немного остыть, затем нарезать на&nbsp;куски. Она будет просто прекрасна, если полить её оливковым чесночным маслом.",

      ],
    },
    {
      id: "2020-2",
      title: "Онигири-тыквы",
      image: "./images/recipes/2020/tikvy-onigiri.webp",
      author: "Інді Сінді",
      authorLink: "https://www.instagram.com/p/CGMuxuPn8W7/",
      year: 2020,
      description:
        "",
      ingredients: ["Рис для суши", "Сахар", "Соль","Рисовый уксус","Баклажаны","Соевый соус","Чеснок","Тофу","Авокадо","Куркума","Нори","Базилик"],
      place: 2,
      category: "Закуска",
      steps: [
        "Готовить их очень просто: нужно приготовить рис для суши и заправить его сахарно-солено-уксусной заправкой (если загуглите, как готовить рис для суши, там вся эта информация будет).",
        "На&nbsp;пищевую пленку выложить рис в&nbsp; форме круглой лепешки и&nbsp; положить в&nbsp; центр начинку (у&nbsp; нас это баклажаны, обжаренные с&nbsp; небольшим количеством воды, соевым соусом, чесноком и&nbsp; подсластителем, но&nbsp; внутрь можно положить что угодно, например, тофу или авокадо).",
        "Затем собрать концы пищевой пленки к&nbsp; верху и&nbsp; сформировать шарик, плотно утрамбовывая рис. Многие делают это просто руками, без&nbsp; использования пленки.",
        "Как формировать онигири – тоже можно посмотреть в&nbsp; интернете, если у вас получился достаточно клейкий рис, то&nbsp; трудностей возникнуть не должно.",
        "Рот и&nbsp; глаза из&nbsp;листа нори, хвостик – базилик."
      ],
    },
    {
      id: "2020-3",
      title: "Дайфуку-привидения на&nbsp;Хэллоуин",
      image: "./images/recipes/2020/daifuku-prividenia.webp",
      author: "Анастасия",
      authorLink: "https://www.instagram.com/p/CGcYyvbMqwN/",
      year: 2020,
      description:
        "",
      ingredients: ["120 г тыквы (у меня кабоча)", "100 г сиропа/анко (или 15-20 г сахара и 20-30 г молока)", "100 г клейкой рисовой муки","20 г белого сахара (другой не подойдёт, т.к. цвет теста изменится)","120 мл воды","2-3 ст.л. картофельного крахмала","Шоколад для украшения",],
      place: 3,
      category: "Закуска",
      steps: [
        "Нарежьте и&nbsp;отварите тыкву (я ставлю на 6 минут в микроволновку).",
        "Очистите тыкву от&nbsp;кожуры и&nbsp;измельчите вилкой в&nbsp;пюре. Добавьте пасту и&nbsp; перемешайте. Сформируйте из&nbsp; начинки 4 овала – тело привидений.",
        "Для теста смешайте в&nbsp; миске все ингредиенты до&nbsp; однородной консистенции, накройте крышкой и&nbsp; поставьте в&nbsp;микроволновку на&nbsp; 2 минуты. Перемешайте тесто и&nbsp; снова поставьте в&nbsp; микроволновку на&nbsp; 1 минуту. Дождитесь, пока тесто остынет.",
        "Выложите тесто на посыпанную крахмалом рабочую поверхность и&nbsp; разделите его на 4 части. Тесто получается довольно липкое, поэтому добавляйте побольше крахмала, чтобы с&nbsp; ним было проще работать. Каждую часть скатайте в шарик и&nbsp; растяните в плоские круги — это будут одеяла для&nbsp; привидений.",
        "Накройте начинку тестом, формируя волны внизу, и&nbsp; нарисуйте растопленным шоколадом глаза и рот. Оставшуюся начинку я скатала в шарик и сделала из&nbsp; неё тыкву.",
      ],
    },
    {
      id: "2020-4",
      title: "Гробики-бутерброды",
      image: "./images/recipes/2020/grobiki-buterbrody.webp",
      author: "Александра Газарова",
      authorLink: "instagram.com/p/CGhf-uuMmoq/",
      year: 2020,
      description:
        "",
      ingredients: ["Хумус", "Нори", "Хлеб и помидор для&nbsp;украшения"],
      category: "Закуска",
      steps: [
        "Вырежьте из хлеба и&nbsp; нори очертания гробиков.",
        "Намажьте хлеб хумусом и&nbsp; выложите сверху нори.",
        "Украсьте ломтиками перца и&nbsp; помидора в&nbsp; виде разных устрашающих рисунков (кресты или надписи).",
      ],
    },
    {
      id: "2020-5",
      title: "Мумии",
      image: "./images/recipes/2020/sosiski-mumii.webp",
      author: "Александра Газарова",
      year: 2020,
      authorLink: "instagram.com/p/CGhf-uuMmoq/",
      description:
        "",
      ingredients: ["Сосиски «Высший Вкус»", "Тесто", "Кетчуп"],
      category: "Закуска",
      steps: [
        "Нарежьте тесто на&nbsp; тонкие полоски и заверните в&nbsp; них сосиску, чтобы она стала похожа на&nbsp; мумию.",
        "Выпекайте до&nbsp; готовности теста и&nbsp; сосисок (около 15-20 минут).",
        "Готовые сосиски полейте кетчупом, имитируя кровь.",
      ],
    },
    {
      id: "2020-6",
      title: "Могилы",
      image: "./images/recipes/2020/mogila-desert.webp",
      author: "Александра Газарова",
      year: 2020,
      authorLink: "instagram.com/p/CGhf-uuMmoq/",
      description:
        "",
      ingredients: ["Кокосовое молоко + шоколад", "Крошка орео", "Печенье Бельвита"],
      category: "Закуска",
      steps: [
        "Покрошите печенье в&nbsp; стакан или кружку и&nbsp; залейте молоком.",
        "Добавьте внутрь кусочки шоколада.",
        "Поставьте половину печеньки сверху стакана, имитируя надгробие, и&nbsp; посыпьте крошкой печенья Орео, чтобы изобразить землю.",
      ],
    },
  ],
};

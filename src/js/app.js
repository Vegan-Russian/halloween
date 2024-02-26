import "swiper/css";
import "../scss/style.scss";
import Swiper, {Pagination} from "swiper";

let sliders = null;

/**
 * Блочим скролл на странице, добавляем падинг, чтобы страница не дёргалась при исчезновении скроллбара
 * @param {boolean} needToLock
 */
function lockScroll(needToLock = true) {
  if (needToLock) {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.position = "fixed";
  } else {
    document.body.style.removeProperty("padding-right");
    document.body.style.removeProperty("position");
  }

  document.body.classList[needToLock ? "add" : "remove"]("scroll-lock");
}

function renderYearRecipesSection({year, winners, other}) {
  const HTMLRoot = document.querySelector(".past-competition");

  const root = document.createElement("section");
  root.classList = "recipes-by-year";

  const winnersElement = winners.map((item) => {
    item.classes = "swiper-slide";
    return getReceiptElement(item);
  });
  const slider = document.createElement("section");
  slider.classList = "swiper recipes-by-year__slider";
  const sliderWrapper = document.createElement("div");
  sliderWrapper.classList = "swiper-wrapper";
  sliderWrapper.append(...winnersElement);
  slider.append(sliderWrapper);
  slider.insertAdjacentHTML(
    "beforeend",
    '<div class="swiper-pagination"></div>'
  );

  const otherElements = other.map(getReceiptElement);
  const otherElementSection = document.createElement("section");
  otherElementSection.classList = "recipes-by-year__items";
  otherElementSection.append(...otherElements);

  root.innerHTML = `
    <h2 class="recipes-by-year__title">Рецепты ${year}</h2>
    <h3 class="recipes-by-year__subtitle">Рецепты-Победители</h3>
  `;

  root.insertAdjacentElement("beforeend", slider);
  root.insertAdjacentElement("beforeend", otherElementSection);
  HTMLRoot.insertAdjacentElement("beforeend", root);
}

function getFullUrl(relativeUrl) {
  const isStaging = window.location.hostname.includes('github.io');
  const baseURL = isStaging ? '/halloween.veganrussian.ru' : '';
  return `${baseURL}${relativeUrl}`;
}

function getReceiptElement({image, title, category, year, id, place}) {
  const root = document.createElement("article");
  root.classList = `recipe`;
  const medalImage = place ? `<img src="./images/medals/${place}.svg" alt="Medal">` : "";
  root.innerHTML = `
    <a href="${getFullUrl(`/recipe.html#${id}`)}" class="recipe__link" title="Перейти на страницу рецепта: ${title}">
    </a>
    <div class="recipe__wrapper">
      <div class="recipe__image">
        <img class="lazy-img" data-lazy="${image}" alt="Фото рецепта: ${title}">
      </div>
      <div class="recipe__content ${place ? "recipe__content--winner" : ""}">
        <div>
          <p class="recipe__category">${category}</p>
          <p class="recipe__name">${title}</p>
        </div>
        ${medalImage}
      </div>
    </div>
  `;
  return root;
}

/**
 * Функция для установления текста на главной четко по середине котла для мобильных экранов.
 * Заодно устанавливается высота для всей секции, чтобы у обёртки была зависимость от высоты котла,
 * который расположен абсолютом, вызывая @function setPromoMobileHeight
 */
function setCauldronTextPosition() {
  const text = document.querySelector(".promo__text");
  if (!text) return;
  if (window.matchMedia("(min-width: 766.98px)").matches) {
    text.style = "";
    setPromoMobileHeight(false);
    return;
  }
  const cauldron = document.querySelector(".cauldron-wrapper");
  const cRect = cauldron.getBoundingClientRect();
  const tRect = text.getBoundingClientRect();
  text.style.top =
    cRect.top + window.pageYOffset + cRect.height / 2 - tRect.height / 2 + "px";
  text.style.maxWidth = cRect.width - 80 + "px";
  text.classList.add("promo__text--visible");
  setPromoMobileHeight();
}

function setPromoMobileHeight(isMobile = true) {
  const cauldron = document.querySelector("#cauldron");
  const promo = document.querySelector(".promo__content");
  const {height} = cauldron.getBoundingClientRect();
  if (isMobile) {
    promo.style.height = height + 90 + "px";
    return;
  }
  promo.style.removeProperty("height");
}

/**
 * Обрабатываем логику открытия-закрытия мобильного меню в шапке
 */
function handleBurgerMenuLogic() {
  const $burger = document.querySelector("#burger-trigger");
  const $menu = document.querySelector("#mobile-menu");
  const $menuCloser = document.querySelector("#menu-closer");

  if ($burger && $menu) {
    $burger.addEventListener("click", function () {
      $menu.classList.toggle("active");
      $menuCloser.setAttribute("aria-hidden", "false");
      lockScroll();
    });

    const closeMenu = () => {
      $menuCloser.setAttribute("aria-hidden", "true");
      $burger.classList.remove("active");
      $menu.classList.remove("active");
      lockScroll(false);
    };

    $menuCloser.addEventListener("click", closeMenu);

    $menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }
}

/**
 * Подставляем нужные данные на странице рецепта в соответствующие поля
 */
function setPageData(data) {
  const image = document.querySelector("#recipe-image");
  const title = document.querySelector("#recipe-title");
  const author = document.querySelector("#recipe-author");
  const ingredients = document.querySelector("#recipe-ingredients");
  const tools = document.querySelector("#recipe-tools");
  const steps = document.querySelector("#recipe-steps");
  const description = document.querySelector("#recipe-description");
  const year = document.querySelector("#recipe-year");
  const button = document.querySelector("#recipe-button");

  image.setAttribute("src", data.image);
  title.innerHTML = data.title;
  author.innerHTML = data.author;
  author.href = data.author_link; // Обновлено для соответствия новой структуре
  year.innerHTML = data.year;
  description.innerHTML = data.description;

  // Исправлено для соответствия структуре данных
  ingredients.innerHTML = data.ingredients.map(ingredient =>
    `<li>${ingredient.name}</li>`
  ).join('');

  tools.innerHTML = data.tools.map(tool =>
    `<li>${tool}</li>`
  ).join('');

  steps.innerHTML = data.steps.map(step =>
    `<li>${step}</li>`
  ).join('');

  const today = new Date();
  if (button) {
    button.classList[today.getFullYear() === data.year ? "remove" : "add"]("hidden");
  }
}

/**
 * Отрисовываем массив с рецептами на главной странице на основе данных из файла recipes.js с актуальными рецптами
 *
 */
function renderReceiptCards(recipes) {
  const receiptItems = document.querySelector("#recipe-items");
  if (!receiptItems) return;

  // Очищаем существующие элементы перед добавлением новых
  receiptItems.innerHTML = '';

  // Используем переданные данные для создания элементов
  const items = recipes.map(recipe => getReceiptElement(recipe));
  receiptItems.append(...items);
}

function organizeAndRenderRecipesByYear(recipes) {
  const recipesByYear = recipes.reduce((acc, recipe) => {
    const year = recipe.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(recipe);
    return acc;
  }, {});

  Object.entries(recipesByYear).sort((a, b) => b[0] - a[0]) // Сортировка по годам
    .forEach(([year, recipes]) => {
      const winners = recipes.filter(recipe => recipe.place && recipe.place <= 3);
      const other = recipes.filter(recipe => !recipe.place || recipe.place > 3);
      renderYearRecipesSection({year, winners, other});
    });
}

/**
 * Функция-наблюдатель. По достижении определённых HTML-элементов мы присваиваем им заданные классы или
 * класс по умолчанию reached, для анимирования элементов при скролле
 * @param {string} classToWatch
 * @param {IntersectionObserverInit} customSettings
 */
function animateItems(classToWatch, customSettings = null, lazyLoad = false) {
  let options = customSettings ?? {
    root: null,
    rootMargin: "30% 0% 30% 0%",
    threshold: 0,
  };

  const loadImage = (image) => {
    image.src = image.dataset.lazy;
    image.removeAttribute('data-lazy');
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const classToSet = el.dataset.class;

        if (lazyLoad && el.hasAttribute('data-lazy')) {
          loadImage(el);
        } else {
          el.classList.add(classToSet ?? 'reached');
        }

        el.classList.remove(classToWatch.substring(1));
        observer.unobserve(el);
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  const toAnimateItems = document.querySelectorAll(classToWatch);

  if (toAnimateItems) {
    toAnimateItems.forEach((item) => {
      observer.observe(item);
    });
  }
}

window.onload = () => {
  document.body.classList.remove("transition-lock");
  animateItems(".observed");

  const {hash, pathname} = window.location;

  if (pathname.includes("/recipe")) {
    const recipeId = hash.replace("#", "");
    fetchRecipeById(recipeId).catch(console.error);

    window.addEventListener("hashchange", (event) => {
      const {newURL} = event;
      const [, newHash] = newURL.split("#");
      fetchRecipeById(newHash.replace("#", "")).catch(console.error); // Адаптируйте обработчик для использования fetchRecipeById
    });
  } else if (pathname.includes("past-competition")) {
    fetchRecipesForPastCompetitions().catch(console.error);
    console.log("Место для функции загрузки данных о прошлых конкурсах");
  } else {
    fetchAllRecipes().catch(console.error); // Загружаем все рецепты для главной страницы или других страниц
  }

  handleBurgerMenuLogic();
  setCauldronTextPosition();
  window.addEventListener("resize", setCauldronTextPosition);

  setTimeout(() => {
    const media = window.matchMedia("(max-width: 1023.98px)");

    if (media.matches) {
      createSliderForMobile(media);
    }
    media.addEventListener("change", createSliderForMobile);
  });
};

function createSliderForMobile(e) {
  if (e && e.matches) {
    sliders = new Swiper(".swiper", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 20,
      slidesPerView: 1,
      breakpoints: {
        420: {
          slidesPerView: "auto",
        },
      },
    });
  } else if (sliders && Array.isArray(sliders)) {
    sliders.forEach((slider) => slider.destroy(true, true));
  }
}

async function fetchAllRecipes() {
  try {
    const response = await fetch('https://seal-pavel.website/api/v1/recipes/');
    if (!response.ok) {
      throw new Error('Не удалось загрузить рецепты');
    }
    const recipes = await response.json();
    renderReceiptCards(recipes); // Передаём загруженные данные в функцию
  } catch (error) {
    console.error("Ошибка при загрузке рецептов: ", error);
    // Обработка ошибок
  }
}

async function fetchRecipesForPastCompetitions() {
  try {
    const response = await fetch('https://seal-pavel.website/api/v1/recipes/');
    if (!response.ok) {
      throw new Error('Не удалось загрузить рецепты');
    }
    const recipes = await response.json();
    organizeAndRenderRecipesByYear(recipes);
    animateItems(".lazy-img", null, true);
  } catch (error) {
    console.error("Ошибка при загрузке рецептов: ", error);
    // Обработка ошибок
  }
}

async function fetchRecipeById(id) {
  // Элемент для отображения, если рецепт не найден
  const warnText = document.querySelector("#recipe-not-found");
  // Контейнер для деталей рецепта
  const receiptHTML = document.querySelector(".recipe-page__receipt");
  try {
    const response = await fetch(`https://seal-pavel.website/api/v1/recipes/${id}/`);
    if (!response.ok) {
      throw new Error(`Не удалось загрузить рецепт с ID ${id}`);
    }
    const recipe = await response.json();

    // Поскольку рецепт успешно загружен, скрываем сообщение об ошибке и показываем контент
    if (warnText) warnText.classList.add("hidden");
    if (receiptHTML) receiptHTML.classList.remove("hidden");

    setPageData(recipe); // Отображение деталей рецепта
  } catch (error) {
    console.error("Ошибка при загрузке рецепта: ", error);
    // Показываем сообщение об ошибке и скрываем контент рецепта
    if (warnText) warnText.classList.remove("hidden");
    if (receiptHTML) receiptHTML.classList.add("hidden");
  }
}

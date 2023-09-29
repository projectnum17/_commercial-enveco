/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pageMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pageMain */ "./src/js/components/pageMain.js");
/* harmony import */ var _components_pageMain__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_pageMain__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footerForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footerForm */ "./src/js/components/footerForm.js");
/* harmony import */ var _components_footerForm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_footerForm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header-1 */ "./src/js/components/header-1.js");
/* harmony import */ var _components_header_1__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_header_1__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_pageActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pageActivity */ "./src/js/components/pageActivity.js");
/* harmony import */ var _components_pageActivity__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_pageActivity__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_pageProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pageProjects */ "./src/js/components/pageProjects.js");
/* harmony import */ var _components_pageProjects__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_pageProjects__WEBPACK_IMPORTED_MODULE_5__);
//main page


//form


//header





/***/ }),

/***/ "./src/js/components/footerForm.js":
/*!*****************************************!*\
  !*** ./src/js/components/footerForm.js ***!
  \*****************************************/
/***/ (() => {

// Функция для валидации формы
function validateForm(event) {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const submitButton = document.getElementById("submit");
  const nameErrorMessage = document.querySelector(".error-message[data-input='name']");
  const emailErrorMessage = document.querySelector(".error-message[data-input='email']");
  const phoneErrorMessage = document.querySelector(".error-message[data-input='phone']");

  // Проверяем, заполнены ли обязательные поля
  if (!nameInput.value || !emailInput.value || !phoneInput.value) {
    event.preventDefault(); // Отменяем отправку формы
    // Изменяем стили полей и кнопки
    nameInput.style.border = "1px solid #7E1D3E";
    emailInput.style.border = "1px solid #7E1D3E";
    phoneInput.style.border = "1px solid #7E1D3E";
    submitButton.style.backgroundColor = "#191919";
    submitButton.style.transition = "none"; // Убираем transition
    submitButton.style.color = "#fff"; // Сохраняем цвет текста как унаследованный
    submitButton.style.border = "1px solid transparent";
    //submitButton.classList.add("hide-after");
  }

  // Валидация имени (только буквы)

  const namePattern = /^[A-Za-zА-Яа-яЁё]+$/;
  if (namePattern.test(nameInput.value)) {
    nameInput.style.border = "1px solid #1D7E33";
    nameErrorMessage.style.display = "none";
    nameInput.style.color = "#191919";
  } else {
    event.preventDefault();
    nameInput.style.color = "#7E1D3E";
    nameInput.style.border = "1px solid #7E1D3E";
    nameErrorMessage.style.display = "block";
  }

  // Валидация email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(emailInput.value)) {
    emailInput.style.border = "1px solid #1D7E33";
    emailErrorMessage.style.display = "none";
    emailInput.style.color = "#191919";
  } else {
    event.preventDefault();
    emailInput.style.color = "#7E1D3E";
    emailErrorMessage.style.display = "block";
    emailInput.style.border = "1px solid #7E1D3E";
  }

  //============================================================
  const phonePattern = /^\+?\d+$/;
  if (phonePattern.test(phoneInput.value)) {
    if (phoneInput.value.length === 13) {
      phoneInput.style.border = "1px solid #1D7E33";
      phoneErrorMessage.style.display = "none";
      phoneInput.style.color = "#191919";
    } else {
      phoneInput.style.border = "1px solid #81b18c";
      phoneErrorMessage.style.display = "none";
      phoneInput.style.color = "#191919";
    }
  } else {
    event.preventDefault();
    phoneInput.style.color = "#7E1D3E";
    phoneErrorMessage.style.display = "block";
    phoneInput.style.border = "1px solid #7E1D3E";
  }
}
//=================================================================

// Добавляем слушателя события отправки формы
const form = document.getElementById("form");
form.addEventListener("submit", validateForm);
form.addEventListener("submit", function (event) {
  const phoneInput = document.getElementById("phone");
  if (phoneInput.value.length !== 13) {
    // Если количество символов в поле телефона не равно 13
    event.preventDefault(); // Отменяем отправку формы
    const phoneErrorMessage = document.querySelector(".error-message[data-input='phone']");
    phoneInput.style.border = "1px solid #7E1D3E";
    phoneErrorMessage.style.display = "block";
    phoneInput.style.color = "#7E1D3E"; // Выводим ошибку
  }
});

// Добавляем слушателей событий для полей ввода
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const submitButton = document.getElementById("submit");
const nameErrorMessage = document.querySelector(".error-message[data-input='name']");
const emailErrorMessage = document.querySelector(".error-message[data-input='email']");
const phoneErrorMessage = document.querySelector(".error-message[data-input='phone']");
nameInput.addEventListener("input", function () {
  // Удаляем стили ошибки и текст ошибки при изменении поля
  nameInput.style.border = "1px solid #81b18c";
  nameErrorMessage.style.display = "none";
  submitButton.style.backgroundColor = "#1d7e33";
  nameInput.style.color = "#191919";

  // Валидация поля имени
  const namePattern = /^[A-Za-zА-Яа-яЁё]+$/;
  if (namePattern.test(nameInput.value)) {
    nameInput.style.border = "1px solid #1D7E33"; // Устанавливаем цвет бордера
    nameErrorMessage.style.display = "none";
  }
});
emailInput.addEventListener("input", function () {
  // Удаляем стили ошибки и текст ошибки при изменении поля
  emailInput.style.border = "1px solid #81b18c";
  emailErrorMessage.style.display = "none";
  submitButton.style.backgroundColor = "#1d7e33";
  emailInput.style.color = "#191919";

  // Валидация поля email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(emailInput.value)) {
    emailInput.style.border = "1px solid #1D7E33"; // Устанавливаем цвет бордера
    emailErrorMessage.style.display = "none";
  }
});

// Добавляем слушателя события фокуса на поле ввода телефона
phoneInput.addEventListener("focus", function () {
  phoneInput.value = "+38"; // При фокусе добавляем "+38"
});

// Добавляем слушателя события ввода на поле телефона
phoneInput.addEventListener("input", function () {
  const phoneValue = phoneInput.value.replace("+38", ""); // Удаляем "+38" из значения
  const phonePattern = /^\+?\d+$/;
  if (phoneValue.length === 10 && phonePattern.test(phoneValue)) {
    // Если введено ровно 10 цифр после удаления "+38"
    phoneInput.style.border = "1px solid #1D7E33";
    phoneErrorMessage.style.display = "none";
    phoneInput.style.color = "#191919";
  } else if (phoneInput.value.length > 13) {
    // Если введено более 13 символов
    phoneInput.style.border = "1px solid #7E1D3E";
    phoneErrorMessage.style.display = "block";
    phoneInput.style.color = "#7E1D3E";
  } else {
    phoneInput.style.border = "1px solid #81b18c";
    phoneErrorMessage.style.display = "none";
    phoneInput.style.color = "#191919";
  }
});

// Добавляем слушателя события потери фокуса на поле телефона
phoneInput.addEventListener("blur", function () {
  if (phoneInput.value === "+38") {
    phoneInput.value = ""; // Если поле содержит только "+38", очищаем его
  }
});

/***/ }),

/***/ "./src/js/components/header-1.js":
/*!***************************************!*\
  !*** ./src/js/components/header-1.js ***!
  \***************************************/
/***/ (() => {

if (document.getElementById("page1Identifier")) {
  //fixed header
  window.addEventListener("scroll", function () {
    var header = document.getElementById("header-main");
    var listItems = document.getElementsByClassName("main-list");
    var langMain = document.getElementById("lang-main");
    var mainBtn = document.getElementById("main-btn");
    var mainBtnText = document.getElementById("main-btn__text");
    var newBurger = document.getElementById("new-burger");
    var newBurgerText = document.getElementById("new-burger__text");
    var newBurgerThumb = document.getElementById("new-burger__thumb");
    var logoDefault = document.getElementById("logo-default");
    var logoAlt = document.getElementById("logo-alt");
    var arrowDefault = document.getElementById("default-arrow");
    var arrowHidden = document.getElementById("hidden-arrow");
    var burgerDefault = document.getElementById("default-burger");
    var burgerHidden = document.getElementById("hidden-burger");
    if (window.pageYOffset > 1) {
      header.classList.add("another-header");
      logoDefault.style.display = "none";
      logoAlt.style.display = "block";
      arrowDefault.style.display = "none";
      arrowHidden.style.display = "block";
      burgerDefault.style.display = "none";
      burgerHidden.style.display = "block";
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "#191919";
      }
      langMain.style.color = "#191919";
      mainBtn.classList.add("hover-effect");
      newBurger.style.background = "#1d7e33";
      newBurgerText.style.color = "#fff";
    } else {
      header.classList.remove("another-header");
      logoDefault.style.display = "block";
      logoAlt.style.display = "none";
      arrowDefault.style.display = "block";
      arrowHidden.style.display = "none";
      burgerDefault.style.display = "block";
      burgerHidden.style.display = "none";
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "#fff";
      }
      langMain.style.color = "#fff";
      mainBtn.classList.remove("hover-effect");
      newBurger.style.background = "#fff";
      newBurgerText.style.color = "#191919";
    }
  });

  //burger
  // Определяем функцию closeMobileMenu() в глобальной области видимости
  function closeMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.body;
    mobileMenu.style.transform = "translateY(-100%)";
    setTimeout(() => {
      mobileMenu.classList.remove("open");
      body.style.overflow = "auto";
    }, 300);
  }

  // Объявляем функцию toggleMobileMenu(), которая использует closeMobileMenu()
  function toggleMobileMenu() {
    const burgerButton = document.querySelector(".header__burger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeButton = document.querySelector(".mobile-menu__content-header__close");
    const body = document.body;
    burgerButton.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      mobileMenu.style.transform = "translateY(0)";
      body.style.overflow = "hidden";
    });
    closeButton.addEventListener("click", () => {
      closeMobileMenu();
    });
    const links = mobileMenu.querySelectorAll("a");
    links.forEach(link => {
      if (link.getAttribute("id") === "contact") {
        link.addEventListener("click", () => {
          closeMobileMenu();
        });
      }
    });
  }
  toggleMobileMenu();

  //dropdown menu
  $(function () {
    $(".accordionDrop").hide();
    $(".accordion").on("click", function () {
      $(this).next().slideToggle("slow");
    });
  });
  $(document).ready(function () {
    var selectText = $(".select-text");
    var selectOptions = $(".select-options li");
    selectText.click(function () {
      $(".select-options").slideToggle();
    });
    selectOptions.click(function () {
      var selectedOption = $(this).text();
      selectText.text(selectedOption);
      $(".select-options").slideUp();
      selectOptions.removeClass("selected");
      $(this).addClass("selected");
    });
    $(document).click(function (e) {
      var container = $(".custom-select");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".select-options").slideUp();
      }
    });
  });
}
//

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

if (!document.getElementById("page1Identifier")) {
  //fixed header
  window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    if (window.pageYOffset > 1) {
      // Измените этот порог, если нужно
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  //burger

  function closeMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.body;
    mobileMenu.style.transform = "translateY(-100%)";
    setTimeout(() => {
      mobileMenu.classList.remove("open");
      body.style.overflow = "auto";
    }, 300);
  }
  function toggleMobileMenu() {
    const burgerButton = document.querySelector(".header__burger-main");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeButton = document.querySelector(".mobile-menu__content-header__close");
    const body = document.body;
    burgerButton.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      mobileMenu.style.transform = "translateY(0)";
      body.style.overflow = "hidden";
    });
    closeButton.addEventListener("click", () => {
      closeMobileMenu();
    });
    const links = mobileMenu.querySelectorAll("a");
    links.forEach(link => {
      if (link.getAttribute("id") === "contact") {
        link.addEventListener("click", () => {
          closeMobileMenu();
        });
      }
    });
  }
  toggleMobileMenu();

  //dropdown menu
  $(function () {
    $(".accordionDrop").hide();
    $(".accordion").on("click", function () {
      $(this).next().slideToggle("slow");
    });
  });
  $(document).ready(function () {
    var selectText = $(".select-text");
    var selectOptions = $(".select-options li");
    selectText.click(function () {
      $(".select-options").slideToggle();
    });
    selectOptions.click(function () {
      var selectedOption = $(this).text();
      selectText.text(selectedOption);
      $(".select-options").slideUp();
      selectOptions.removeClass("selected");
      $(this).addClass("selected");
    });
    $(document).click(function (e) {
      var container = $(".custom-select");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".select-options").slideUp();
      }
    });
  });
}
//

/***/ }),

/***/ "./src/js/components/pageActivity.js":
/*!*******************************************!*\
  !*** ./src/js/components/pageActivity.js ***!
  \*******************************************/
/***/ (() => {

/* var cards = document.querySelectorAll(".activity-card");

cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    var btnText = card.querySelector(".btnText");
    btnText.textContent = "Зв’язатись з нами";
  });

  card.addEventListener("mouseout", function () {
    var btnText = card.querySelector(".btnText");
    btnText.textContent = "Детальніше";
  });
});
 */

/* var cards = document.querySelectorAll(".activity-card");

cards.forEach(function (card) {
  var btnText = card.querySelector(".btnText");

  card.addEventListener("mouseover", function () {
    btnText.textContent = "Зв’язатись з нами";
    btnText.classList.add("hovered");
  });

  card.addEventListener("mouseout", function () {
    btnText.textContent = "Детальніше";
    btnText.classList.remove("hovered");
  });
}); */

/***/ }),

/***/ "./src/js/components/pageMain.js":
/*!***************************************!*\
  !*** ./src/js/components/pageMain.js ***!
  \***************************************/
/***/ (() => {

if (document.getElementById("page1Identifier")) {
  const swiper1 = new Swiper(".card-slider", {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      976: {
        slidesPerView: 2.5
      },
      325: {
        slidesPerView: 1.2
      }
    }
  });
  const swiper2 = new Swiper(".card-slider__activity", {
    loop: false,
    slidesPerView: 3.5,
    spaceBetween: 30,
    breakpoints: {
      1220: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 2.5
      },
      325: {
        slidesPerView: 1.2
      }
    }
  });
  function setupTextToggle() {
    const textBlock = document.getElementById("textBlock");
    const readMoreButton = document.getElementById("readMoreButton");
    const originalText = textBlock.innerHTML;
    const shortText = "Enveco — українська спеціалізована проектно-консалтингова компанія, що надає комплексні інноваційні ...";
    let isShortened = true;
    function toggleText(event) {
      event.preventDefault(); // Предотвращаем стандартное действие браузера
      if (isShortened) {
        textBlock.innerHTML = originalText;
        readMoreButton.innerHTML = "Приховати";
        isShortened = false;
      } else {
        textBlock.innerHTML = shortText;
        readMoreButton.innerHTML = "Читати детальніше";
        isShortened = true;
      }
    }
    function checkWindowWidth() {
      if (window.innerWidth <= 768) {
        if (isShortened) {
          textBlock.innerHTML = shortText;
        }
      } else {
        textBlock.innerHTML = isShortened ? shortText : originalText;
      }
    }
    checkWindowWidth();
    readMoreButton.addEventListener("click", toggleText);
    window.addEventListener("resize", checkWindowWidth);
  }
  setupTextToggle();
}

/***/ }),

/***/ "./src/js/components/pageProjects.js":
/*!*******************************************!*\
  !*** ./src/js/components/pageProjects.js ***!
  \*******************************************/
/***/ (() => {

if (document.getElementById("page3Identifier")) {
  function toggleAdditionalProjects() {
    const showMoreButton = document.getElementById("show-more-projects");
    const projectGroups = document.querySelectorAll(".project-group");
    let currentBlock = 0;
    showMoreButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (currentBlock < projectGroups.length) {
        projectGroups[currentBlock].style.display = "grid";
        currentBlock++;
        if (currentBlock === projectGroups.length) {
          showMoreButton.style.display = "none";
        }
      }
    });
  }
  toggleAdditionalProjects();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
//import './_vendor';
//import vars from './_vars';
//import './_functions';

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
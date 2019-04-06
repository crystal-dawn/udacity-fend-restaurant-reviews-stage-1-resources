/**
 * @description create main element when page loads
 */
const loadPage = () => {
  mainElement();
}

/**
 * @description add main element for start of criteria cards
 */
const mainElement = () => {
  document.querySelector('header')
    .insertAdjacentHTML('afterend', `<main class="criterias" id="criterias"></main>`);

  criteriaCard();
}


document.body.onload = loadPage();

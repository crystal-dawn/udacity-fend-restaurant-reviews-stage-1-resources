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


/**
 * @description Create one criteria card for each item from the rubric
 */
function criteriaCard() {
  //create a Set for criterias. Sets automatically don't add duplicate values
  //without sending an error. This creates one list with a single entry for
  //any criteria listed in resources
  let criteriaSet = new Set();
  resources.forEach(criteria => criteriaSet.add(criteria.criteria));

  const entries = criteriaSet.entries();

  //one card for each criteria from the array
  for (const [criteriaIndex, criteria] of entries) {
    document.querySelector('main').insertAdjacentHTML('afterbegin',
      `<section class="criteria">
          <div id="ctn${criteriaIndex}" style="position:relative;">
            <a id="criteria${criteriaIndex}">&nbsp;</a>
            <h2 class="criteria-header">${criteria}</h2>
          </div>
        </section>`);

    //populate Rubric criteria dropdown nav
    document.querySelector('ul').insertAdjacentHTML('afterbegin',
      `<li class="criteria-list">
         <a class="dropdown-link" href="#criteria${criteriaIndex}">${criteria}</a>
      </li>`)
    typeCard(criteria, criteriaIndex);
  }
}
document.body.onload = loadPage();

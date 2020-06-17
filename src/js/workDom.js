import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';
import { alert } from '@pnotify/core';
import notMoreTen from '../templates/notMoreTen.hbs';
import onlyOne from '../templates/onlyOne.hbs';

const input_country = document.querySelector('.input_country');
const country_list = document.querySelector('.country_list');
// ====================================================
input_country.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(e) {
  fetchCountries(e.target.value);
}
// ====================================================
function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(data => {
      if ((data.length > 1) & (data.length < 10)) {
        const allLi = data.map(item => notMoreTen(item)).join('');
        country_list.insertAdjacentHTML('beforeend', allLi);
      }
      if (data.length === 1) {
        const result = data.map(item => onlyOne(item)).join('');
        country_list.insertAdjacentHTML('beforeend', result);
      }
      console.log(data);
    });
  // .catch(err => err(pnotify));
}

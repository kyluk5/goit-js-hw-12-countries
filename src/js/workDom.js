import debounce from 'lodash.debounce';
import { notice } from './pnotify';
import notMoreTen from '../templates/notMoreTen.hbs';
import onlyOne from '../templates/onlyOne.hbs';
import fetchCountries from './fetchCountries';

// ===================================================
const country_list = document.querySelector('.country_list');
const input_country = document.querySelector('.input_country');
// ====================================================
input_country.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(e) {
  fetchCountries(e.target.value)
    .then(data => {
      if ((data.length > 1) & (data.length <= 10)) {
        const allLi = data.map(item => notMoreTen(item)).join('');
        country_list.innerHTML = allLi;
      }
      if (data.length === 1) {
        const result = data.map(item => onlyOne(item)).join('');
        country_list.innerHTML = result;
      }
      if (data.length > 10) {
        country_list.innerHTML = '';
        notice();
      }
    })
    .catch(err => console.warn(err));
}

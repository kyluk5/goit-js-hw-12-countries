import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
// ===================================================
const input_country = document.querySelector('.input_country');
// ====================================================
input_country.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(e) {
  fetchCountries(e.target.value);
}
// ====================================================

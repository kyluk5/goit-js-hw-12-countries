import { notice } from './pnotify';
import notMoreTen from '../templates/notMoreTen.hbs';
import onlyOne from '../templates/onlyOne.hbs';
const country_list = document.querySelector('.country_list');

export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
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

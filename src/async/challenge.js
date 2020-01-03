const fetchData = require('../utils/fetchData');
const URL = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url) => {
  try {
    const data = await fetchData(url);
    const character = await fetchData(`${URL}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log('Before...');
anotherFunction(URL);
console.log('After...');
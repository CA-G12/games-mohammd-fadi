const fetch = require('node-fetch');

const seatchForInObject = (arr, searchTerm) => {
  const filtred = arr.filter((el) => {
    if (el.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return el;
    }
  });
  return filtred;
};

const getSearchValue = (req, res) => {
  fetch('https://www.freetogame.com/api/games').then((data) => data.json())
    .then((data) => seatchForInObject(data, req.body.searchValue))
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

module.exports = getSearchValue;

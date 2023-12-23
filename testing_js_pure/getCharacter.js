const axios = require("axios");

let baseUrl = "https://rickandmortyapi.com/api/character";
let page = 1;

const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${baseUrl}?page=${page}`);
    if (response.status === 200) {
      return response.data.results;
    }
  } catch (error) {
    return error?.statusText || { error } || "Unknown error occurred";
  }
};

module.exports = getAllCharacters;

const endpoint = 'https://rickandmortyapi.com/api/character/';

const getCharacters = () => {
    return fetch (endpoint)
        .then (response => response.json())
}

export { getCharacters };
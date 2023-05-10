export const getPokemon = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemons = async (offset) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
    );
    const data = await response.json();

    const arr = await Promise.all(
      data?.results?.map(async (pok) => await getPokemon(pok?.url))
    );

    return arr;
  } catch (error) {
    console.error(error);
  }
};

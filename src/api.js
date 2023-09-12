import axios from "axios";

const instance = axios.create({
 baseURL:'https://rickandmortyapi.com/api'
});


  //Get de personajes paginados
  export const getPersonajes = async (page) => {
    const URL = `/character?page=${page}`;
    try {
      const response = await instance.get(URL);
      console.log("Respuesta de la API:", response); // Imprime la respuesta completa
      return response.data;
    } catch (error) {
      console.error("Error al obtener los personajes", error);
      throw error;
    }
  };

  // Get de episodios paginados
export const getEpisodios = async (page) => {
  const URL = `/episode?page=${page}`;
  try {
    const response = await instance.get(URL);
    console.log("Respuesta de la API (Episodios):", response);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los episodios", error);
    throw error;
  }
};

  // Función para obtener un solo personaje por su ID
export const getPersonajePorId = async (id) => {
  const URL = `/character/${id}`;
  try {
    const response = await instance.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el personaje por ID", error);
    throw error;
  }
};

 // Función para obtener un solo personaje por su ID
 export const getEpisodiosPorId = async (id) => {
  const URL = `/episode/${id}`;
  try {
    const response = await instance.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el episodio por ID", error);
    throw error;
  }
};
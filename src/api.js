import axios from "axios";

const instance = axios.create({
 baseURL:'https://rickandmortyapi.com/api'
});


  //Get de personajes
export const getPersonajes = async () => {
    const URL = '/character';
    try {
      const response = await instance.get(URL);
      console.log("Respuesta de la API:", response); // Imprime la respuesta completa
      return response.data;
    } catch (error) {
      console.error("Error al obtener los personajes", error);
      throw error;
    }
  };

  //Get de episodios
  export const getEpisodios = async () => {
    const URL = '/episode';
    try {
      const response = await instance.get(URL);
      return response.data;
    } catch (error) {
      console.error("Error al obtener los episodios", error);
      throw error;
    }
  };
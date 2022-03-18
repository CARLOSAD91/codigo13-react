/**
 * Sera nuestro archivo donde vamos a alamacenar las peticiones
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10'
//

//como parametro vamos a recibir la URL que puede ser la que lista o 
// que nos da el detalle 

export const  getDataFromPokemon = async (url = BASE_URL) => {
  try {
    // ahora debemos ejecutar el fetch
    const reponse = await fetch(url)
    const data = await reponse.json()
    return data
  } catch (error) {
    console.log(error.message)
  }

}



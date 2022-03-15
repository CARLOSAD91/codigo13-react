// primer paso para definir un componente es el nombre
// El nombre de un componente siempre debe iniciar en mayusculas
// un componente es un funcion, por ende podemos crearlo function
// o arrow function
const PrimerComponente = () => {
  // esta funcion lo que hara sera retornar una vista
  // lo que esta dentro de los parentisis sera el objeto visual
  // que vamos a retonar
  return (
    <div>
      <h1> Hola Mundo</h1>
    </div>
  )
}

export default PrimerComponente

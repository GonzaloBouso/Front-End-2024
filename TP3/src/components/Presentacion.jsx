import './presentacion.css'



export const Presentacion = ({ nombre, edad }) => {
  return (
    <section className='presentacion'>
        <div className='containerpresentacion'>
          <h2>Hola, mi nombre es {nombre}</h2>
          <p className='parrafo'>Vivo en Rio Seco, un pueblo de tucuman y mi objetivo es <br /> todos los dias aprender algo nuevo en el mundo de la programacion.</p>
          <p className='parrafo'>Tengo {edad} años y este soy yo</p>
          <img src="src/assets/GonzaloBouso.png" alt="" />
        </div>
    </section>
  )
}
 
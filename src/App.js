import React,{useState} from 'react'
import Datos from './Componentes/datos'
import Navegador from './Componentes/Navegador'
import Nosotros from './Componentes/Nosotros'
import Horario from './Componentes/Horario'
import Nuestroequipo from './Componentes/Nuestroequipo'
import Convenios from './Componentes/Convenios'
import Comentarios from './Componentes/Comentarios/Comentarios'
import Consultas from './Componentes/Consultas'
import Mapa from './Componentes/Mapa'
import Footer from './Componentes/Footer'
import { makeStyles, Hidden } from '@material-ui/core'
import SimpleMap from './Componentes/SimpleMap'
import Carousel from './Componentes/Comentarios/Carrusel'
import Galeria from './Componentes/Galeria/Galeria'
import Cajon from './Componentes/Menu/Cajon'
import Social from './Componentes/RedesSociales/Social'
import Whatsapp from './Componentes/RedesSociales/Whatsapp'
import MenuDown from './Componentes/Menu/MenuDown'



const useStyle=makeStyles((theme)=>({
  root:{
    flexGrow:1,
   
  }

}))


const App = () => {
  const clases=useStyle()

//state para abrir el menu 
  const [abrir, setabrir] = useState(false)

const accionAbrir=()=>{
    setabrir(!abrir)
}


  return (
    <div className={clases.root}>
        <Datos></Datos>
        <Navegador   accionAbrir={accionAbrir}   ></Navegador>
        
        <Nosotros></Nosotros>
        <Horario></Horario>
        <Nuestroequipo></Nuestroequipo>
        <Convenios></Convenios>
        <Comentarios></Comentarios>
        <Galeria></Galeria>
        <Social></Social>
        <Consultas></Consultas>
        <Mapa></Mapa>
        <Footer></Footer>
        <Whatsapp></Whatsapp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir}  ></Cajon>
        
        <Hidden smUp>
        <MenuDown></MenuDown>
        </Hidden>
        


       




    </div>
  )
  }

export default App


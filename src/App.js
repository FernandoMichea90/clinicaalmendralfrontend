import React from 'react'
import Datos from './Componentes/datos'
import Navegador from './Componentes/Navegador'
import Nosotros from './Componentes/Nosotros'
import Horario from './Componentes/Horario'
import Nuestroequipo from './Componentes/Nuestroequipo'
import Convenios from './Componentes/Convenios'
import Comentarios from './Componentes/Comentarios'
import Galeria from './Componentes/Galeria'
import Consultas from './Componentes/Consultas'
import Mapa from './Componentes/Mapa'
import Footer from './Componentes/Footer'
import { makeStyles } from '@material-ui/core'
import SimpleMap from './Componentes/SimpleMap'

const useStyle=makeStyles((theme)=>({
  root:{
    flexGrow:1
  }

}))


const App = () => {
  const clases=useStyle()
  return (
    <div className={clases.root}>
        <Datos></Datos>
        <Navegador></Navegador>
        <Nosotros></Nosotros>
        <Horario></Horario>
        <Nuestroequipo></Nuestroequipo>
        <Convenios></Convenios>
        <Consultas></Consultas>
        <SimpleMap></SimpleMap>
        <Footer></Footer>

       

       

        


       




    </div>
  )
  }

export default App


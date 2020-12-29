import React from 'react'
import { makeStyles } from '@material-ui/core'





const useStyle=makeStyles((theme)=>({
         imagen:{

                width:"100%",
                height:"100%"

         },
         divPrincipal:{

                height:"100vh",
                width:"100vw",
                marginTop:"84vh"

         },   

}))




const Mapa = () => {

    const clases=useStyle()
    return (
        <div>

            <div className={clases.divPrincipal}>

            <iframe className={clases.imagen} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13377.937375855014!2d-71.6274704!3d-33.0437133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83b600b3a891ade9!2sHostal%20Ecomusic!5e0!3m2!1sen!2scl!4v1608782916509!5m2!1sen!2scl?key=AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc&zoom=13" frameborder="0" style={{border:'0'}} allowfullscreen="" zoom="19" aria-hidden="false" tabindex="0"></iframe>


            </div>        



        </div>
    )
}

export default Mapa

    



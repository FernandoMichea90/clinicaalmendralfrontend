import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'


const useStyle=makeStyles((theme)=>({
    divPrincipal:{
        margin:"200px 10vw 0px 10vw"
    }

}))





const Comentarios = () => {
   
    const clases=useStyle()


    return (
        <div className={clases.divPrincipal}>

            <Typography variant="h3" align="center" >
                        Nuestros Comentarios
            </Typography>


            <div>

                <Typography>
                    La evaluacion
                    4.5 estrellas
                    97  reseñas
                </Typography>


            </div>
            
        </div>
    )
}

export default Comentarios

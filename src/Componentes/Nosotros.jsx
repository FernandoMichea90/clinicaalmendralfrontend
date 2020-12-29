import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Dentista from '../Imagenes/dentist.jpg'



const useStyle=makeStyles((theme)=>({

    imagen:{
         top:"0",
         bottom:"0",
         left:"0",
         right:"0",
         margin:"auto",
         height:"50vh",
         minHeight:"360px",
         display:"block"             

    },

    divPrincipal:{

        margin:"200px 0vw 0px 0vw",
        minWidth:"446px"
    },
    texto:{
    
         textAlign:"center",
         margin:"30px 15px 0px 15px",
         fontFamily:"Lato",
         fontWeight:"400",
         color:"#969595",
         fontSize:"1.5rem"

    },
    textoTitulo:{
        fontFamily:"Poppins",
        fontWeight:"900",
      

    }


}))





const Nosotros = () => {


            const clases=useStyle();     




    return (
        <div className={clases.divPrincipal} >
                

                <Grid container>
                        <Grid xs={12} lg={6}>
                                <img className={clases.imagen} src={Dentista} ></img>
                        </Grid>

                        <Grid xs={12} lg={6}>

                                
                                <Typography className={clases.textoTitulo} style={{textAlign:"center"}} variant="h4">
                                        ODONTOLOGIA DE ALTA CALIDAD
                                        
                                </Typography>
                                <Typography className={clases.texto}  variant="h5">

                                Clinica Odontologica Almendral tiene presencia mayor a 9 años en el valle del Aconcagua, 
                                aquí nuestros pacientes encuentran  prestaciones odontológicas  de alta 
                                calidad,entregadas por profesionales chilenos,en un ambiente grato y confortable, para 
                                que tú experiencia dental resulte agradable y exitosa.

                                </Typography>


                        </Grid>


                </Grid>            
        </div>




    )
}

export default Nosotros





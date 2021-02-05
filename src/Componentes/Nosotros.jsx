import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Dentista from '../Imagenes/dentist.jpg'
import ScrollAnimation from 'react-animate-on-scroll';



const useStyle=makeStyles((theme)=>({

    imagen:{
         top:"0",
         bottom:"0",
         left:"0",
         right:"0",
         margin:"auto",
         height:"50vh",
         minHeight:"360px",
         display:"block",
         [theme.breakpoints.down("sm")]:{
           
                minHeight:"unset"
         }             

    },

    divPrincipal:{

        margin:"0px 0vw 0px 0vw",
        paddingTop:"100px"
       
    },
    texto:{
    
         textAlign:"center",
         margin:"30px 15px 0px 15px",
         fontFamily:"Lato",
         fontWeight:"400",
         color:"#969595",
         fontSize:"1.5rem",
        [theme.breakpoints.down("sm")]:{
                fontSize:"1rem"
        }



    },
    textoTitulo:{
        fontFamily:"Poppins",
        fontWeight:"900",
        [theme.breakpoints.down("sm")]:{
                fontSize:"2rem"
        }

    }


}))





const Nosotros = () => {


            const clases=useStyle();     




    return (
        <div name="nosotros" className={clases.divPrincipal} >
                

                <Grid container>
                        <Grid xs={12} lg={6}>

                                        <ScrollAnimation animateIn='fadeIn'
                                                animateOut='fadeOut'>
                                                <img className={clases.imagen} src={Dentista} ></img>
                                                  </ScrollAnimation>
                        </Grid>

                        <Grid xs={12} lg={6}>

                                <ScrollAnimation animateIn='bounceInRight'
                                animateOut='bounceInRight'>
                                <Typography className={clases.textoTitulo} style={{textAlign:"center"}} variant="h4">
                                        ODONTOLOGIA DE ALTA CALIDAD
                                        
                                </Typography>
                                <Typography className={clases.texto}  variant="h5">

                                Clinica Odontologica Almendral tiene presencia mayor a 9 años en el valle del Aconcagua, 
                                aquí nuestros pacientes encuentran  prestaciones odontológicas  de alta 
                                calidad,entregadas por profesionales chilenos,en un ambiente grato y confortable, para 
                                que tú experiencia dental resulte agradable y exitosa.

                                </Typography>
                                </ScrollAnimation>


                        </Grid>


                </Grid>            
        </div>




    )
}

export default Nosotros





import React from 'react'
import { Typography,Grid, makeStyles } from '@material-ui/core'
import GaleriaFoto from '../../Imagenes/galeria.png'
import ImagenUno from '../../Imagenes/almendralfotos/1.png'
import ImagenDos from '../../Imagenes/almendralfotos/2.png'
import ImagenTres from '../../Imagenes/almendralfotos/3.jpeg'
import ImagenCuatro from '../../Imagenes/almendralfotos/4.jpeg'
import ImagenCinco from '../../Imagenes/almendralfotos/5.jpg'
import ImagenSeis from '../../Imagenes/almendralfotos/6.png'
import ImagenSiete from '../../Imagenes/almendralfotos/7.png'
import ImagenOcho from '../../Imagenes/almendralfotos/8.png'
import ImagenNueve from '../../Imagenes/almendralfotos/9.jpg'
import ScrollAnimation from 'react-animate-on-scroll';


const useStyles=makeStyles((theme)=>({


        root:{
            paddingTop:"100px"
        },



    divFotoIntro:{

        width:"90%",
        margin:"90px 0px 0px 0px",
        [theme.breakpoints.down("xs")]:{
            margin:"40px 0px 0px 0px"    
   
           }

    }
    ,fotoGaleria:{
        width:"90%",
        margin:"45px auto 0px auto",
        display:"block"

    },
    textoTitulo:{
        fontFamily:"Poppins",
        fontWeight:"900",
        margin:"50%",
        [theme.breakpoints.down("xs")]:{
         margin:"90px 0px 0px 0px"    

        }
      

    }



}))


const Galeria = () => {


const clases= useStyles()



    return (
        <div name="galeria" className={clases.paddingTop}>
            <Grid container >

            <Grid xs={12} sm={6}>
            <ScrollAnimation animateIn='bounceInLeft'
                                animateOut='bounceInLeft'>
                <Typography className={clases.textoTitulo} style={{textAlign:"center"}} variant="h4">
                        Galeria                                        
                </Typography>
            </ScrollAnimation>
            </Grid>






                <Grid xs={12} sm={6}>
                <ScrollAnimation animateIn='fadeIn'
                                                animateOut='fadeOut'>
                   <img  className={clases.divFotoIntro} src={GaleriaFoto} alt="" ></img> 

                </ScrollAnimation>
                </Grid>

                
                <Grid xs={12} sm={4}>


                    <img className={clases.fotoGaleria} src={ImagenUno} alt=""/>

                    
                </Grid>   
                <Grid xs={12} sm={4}>


                    <img src={ImagenDos} className={clases.fotoGaleria} alt=""/>

                    
                </Grid>   
                <Grid xs={12} sm={4}>


                    <img src={ImagenTres} className={clases.fotoGaleria} alt=""/>

                    
                </Grid>   
                <Grid xs={12} sm={4}>


                    <img src={ImagenCuatro} className={clases.fotoGaleria} alt=""/>

                    
                </Grid>   
                <Grid xs={12} sm={4}>


                    <img src={ImagenCinco}  className={clases.fotoGaleria} alt=""/>

                    
                </Grid>   
                <Grid xs={12} sm={4}>


                    <img src={ImagenSeis} className={clases.fotoGaleria} alt=""/>

                    
                </Grid>   
                <Grid xs={12} sm={4}>


                    <img src={ImagenSiete} className={clases.fotoGaleria} alt=""/>

                    
                </Grid>   
                <Grid xs={12} sm={4}>


                    <img src={ImagenOcho} className={clases.fotoGaleria} alt=""/>

                    
                </Grid>   
                <Grid xs={12} sm={4}>


                    <img src={ImagenNueve} className={clases.fotoGaleria} alt=""/>

                    
                </Grid>   
        </Grid>


            
        </div>
    )
}

export default Galeria

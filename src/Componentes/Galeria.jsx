import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Galeriaimg from '../Imagenes/galeria.png'
import Imagenes from '../Imagenes/imagenes.png'


const Galeria = () => {
    return (
        <div>

            <Typography variant="h3" align="center" >
                Galeria
            </Typography>


            <Grid container>
                <Grid xs={6} md={4} >

                    <Typography variant="h5" align="center">

                    Clinica Odontologica Almendral tiene presencia mayor a 9 años en el valle del Aconcagua, 
                    aquí nuestros pacientes encuentran  prestaciones odontológicas  de alta 
                    calidad,entregadas por profesionales chilenos,en un ambiente grato y confortable, para 
                    que tú experiencia dental resulte agradable y exitosa.


                    </Typography>

                </Grid>

                <Grid xs={6} md={4} >

                     <img src={Galeriaimg} />

                </Grid>

                <Grid xs={12} md={4} >

                        <img src={Imagenes}/>

                </Grid>
            </Grid>
            
        </div>
    )
}

export default Galeria

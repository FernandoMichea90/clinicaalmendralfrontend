import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography, makeStyles , Grid} from '@material-ui/core'
import Iconoblanco from '../Imagenes/iconoblanco.png'


const useStyle=makeStyles((theme)=>({
        fondo:{
            backgroundImage: "radial-gradient(circle at 120.71% 50%, #ff94fc 0, #ff8dfc 12.5%, #ff86f9 25%, #ff7ef1 37.5%, #e475e4 50%, #c16bd5 62.5%, #a163c7 75%, #845cbb 87.5%, #6a56af 100%)"

        },
        icono:{
            height:"6vh",
            margin:"10px 0px 10px 20px"
        },
        iconoDos:{
            height:"6vh",
            margin:"0px 20px 10px 20px"
        }




}))




const Footer = () => {

        const clases=useStyle()

    return (
        <div className={clases.fondo}>
            
            <Grid container>

                <Grid xs={6}>
                    <img className={clases.icono} src={Iconoblanco} ></img>
                </Grid>
                <Grid xs={6}>
                    <Typography className={clases.iconoDos}>
                          
                    </Typography>
                </Grid>
    

            </Grid>



        </div>
    )
}

export default Footer

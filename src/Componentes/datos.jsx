import React from 'react'
import {Typography} from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {Grid,makeStyles,Hidden} from '@material-ui/core'
import Clinica from '../Imagenes/clinic.png'

import Descripcion from './DivPrincipal/Descripcion'



const estilos=makeStyles((theme)=>({
    fondo:{
        backgroundImage: "radial-gradient(circle at 120.71% 50%, #ff94fc 0, #ff8dfc 12.5%, #ff86f9 25%, #ff7ef1 37.5%, #e475e4 50%, #c16bd5 62.5%, #a163c7 75%, #845cbb 87.5%, #6a56af 100%)"
            ,   color:"#FFFFFF",
        position:"relative",
        height:"100vh",
       
        minHeight:"700px",
        minWidth:"446px",
        overflow:"hidden"
       
    },
    centro:{
        textAlign:"center",
        
    },imagen:{
        width:"98vw",
        opacity:"0.2",
        position:"absolute",
        top:"-37px",
        [theme.breakpoints.down('md')]:{
            top:"0",
            bottom:"0",
            left:"0",
            right:"0",
            margin:"auto"
        }
    },
    efecto:{

        position: "absolute",
  
   width: "100%",
   bottom: '-15px',
   [theme.breakpoints.down('md')]:{
    bottom: '-5px',
   }

    },
    divText:{
        position:"absolute",
        top:"35%"
    },

    margenDesc:{

        margin:"5px 0px 0px 0px"
    },
    margenIco:{

        margin:"0px 5px 0px 5px"
    }

}))


const datos = () => {
    const clases=estilos()
    return (
        <div className={clases.fondo}>


         <Hidden mdDown >
                <Grid className={clases.centro} container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <Grid xs={4}>
                            <Typography className={clases.margenDesc}>
                                <PhoneIcon></PhoneIcon>
                                + 569 7622 6068
                        </Typography>
                        </Grid>
                        <Grid xs={4}>
                        <Typography className={clases.margenDesc}>
                                <RoomIcon></RoomIcon>
                                Dimalow 231 , cerro Alegre ,Valparaiso
                    </Typography>
                    </Grid>
                    <Grid xs={4}>
                    <Typography className={clases.margenDesc}>
                    
                            <InstagramIcon></InstagramIcon>
                            <FacebookIcon className={clases.margenIco}></FacebookIcon>
                            <WhatsAppIcon></WhatsAppIcon>
                    
                    </Typography>
                    </Grid>

                </Grid>


         </Hidden>   
           <div>
                <img  className={clases.imagen}  src={Clinica} alt="clinica dental almendral" />
                <div className={clases.efecto}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,208C384,224,480,256,576,277.3C672,299,768,309,864,288C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>          
                </div>    

                <div>
                    <Descripcion>

                    </Descripcion>
                </div>
           
           
            </div> 

        </div>

)
}

export default datos




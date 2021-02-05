import React from 'react'
import { makeStyles, Typography,Grid, Link } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
const styles =makeStyles((theme)=>({

    root:{
        paddingTop:"100px",
        "& .MuiTypography-colorPrimary": {
            color: "#ffffff"
        }
    },

    principal:{

        margin :"100px 0px 200px 0px",
     
  
        backgroundImage:" radial-gradient(circle at 120.71% 50%, #ff94fc 0, #ff8dfc 12.5%, #ff86f9 25%, #ff7ef1 37.5%, #e475e4 50%, #c16bd5 62.5%, #a163c7 75%, #845cbb 87.5%, #6a56af 100%)"

    },

    texto:{

        
        padding:"80px 0px 80px 0px",
        textAlign: "center",
        fontFamily: 'Poppins',
        fontWeight: "400",
        color:"#ffffff",
        [theme.breakpoints.down("sm")]:{

            height:"unset",
            padding:"20px 0px 20px 0px",
            fontSize:"1.125rem"
        },


        "& .MuiSvgIcon-root":{

            fontSize:"3rem"
        }


    },
    textodos:{
            fontSize:"3rem"

    }   




}))



const Social = () => {

        const clases=styles()

    return (
        <div className={clases.root} name="redes">
        <div  className={clases.principal}>
            <Grid container>

                <Grid xs={6}>
            <Typography  className={clases.texto} align="center" variant="h4" >
                Siguenos en Nuestros redes sociales
              
            </Typography>
                </Grid>
                <Grid xs={6}>
            <Typography  className={clases.texto} align="center" variant="h4" >
               <Link  href="https://www.facebook.com/clinicaalmendral" target="_blank"> 
                <FacebookIcon></FacebookIcon>
                </Link>
                <Link href="https://www.instagram.com/dentistaclinicaalmendral/" target="_blank">
                <InstagramIcon></InstagramIcon>
                </Link>
            </Typography>
                </Grid>
            </Grid>

        </div>
        </div>
    )
}

export default Social




import React from 'react'
import {makeStyles,Typography,Button} from '@material-ui/core'


const estilos=makeStyles((theme)=>({
    divText:{
        position:"absolute",
        top:"35%"
    }
    ,
    divSec:{
          
        position:"relative",
        marginLeft:"20vw",
        [theme.breakpoints.down('md')]:{
            marginLeft:"4vw",
        }

    },
    tipUno:{
        fontFamily: 'Lato',
        fontWeight: "bold",
        color:"#ED95D5"
    },
    tipDos:{
        fontFamily: 'Poppins',
        fontWeight: "bold",
        color:"#FFFFFF",
        [theme.breakpoints.down('md')]:{

            fontSize:"4rem"

        }


    },
    tipTres:{
        fontFamily: 'Lato',
        fontWeight: "regular",
        color:"#FFFFFF"

        

    },

    boton:{
    
        background:"#FFFFFF",
        color:"#ED95D5",
        fontFamily: 'Lato',
        fontWeight: "bold",
        fontSize: "29px",
         boxShadow:" 13px 9px 15px 6px rgba(0,0,0,0.4)",
         margin:"10px 10px 10px 30px",
    
         [theme.breakpoints.down('md')]:{
            margin:"24px 10px 10px 30px", 
         }


    }

})
)


const Descripcion = () => {

   
        const clases=estilos()
    return (
      
              <div className={clases.divText}>
                  <div className={clases.divSec}>
                        <Typography className={clases.tipUno} variant="h4">
                            Bienvenido a nuestra clinica
                        </Typography>
                        <Typography className={clases.tipDos} variant="h1">
                            Clinica Almendral
                        </Typography>
                        <Typography className={clases.tipTres} variant="h4">
                            Conoce nuestros Servicios
                        </Typography>
                        <div>
                        <Button className={clases.boton} variant="contained">Servicios</Button>  
                        </div>
                    </div>
              </div>
    )
}

export default Descripcion

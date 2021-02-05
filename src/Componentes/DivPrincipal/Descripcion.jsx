import React from 'react'
import {makeStyles,Typography,Button} from '@material-ui/core'
import {Link} from 'react-scroll'

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
        color:"#ED95D5",
        [theme.breakpoints.down("sm")]:{
                fontSize:"1.125rem"

        }
    },
    tipDos:{
        fontFamily: 'Poppins',
        fontWeight: "bold",
        color:"#FFFFFF",
        [theme.breakpoints.down('sm')]:{

            fontSize:"3rem"

        },
        [theme.breakpoints.only('md')]:{

            fontSize:"4rem"

        }


    },
    tipTres:{
        fontFamily: 'Lato',
        fontWeight: "regular",
        color:"#FFFFFF",
        [theme.breakpoints.down("sm")]:{
            fontSize:"1.325rem"

    }
        

    },

    boton:{
        position:"absolute",
        background:"#FFFFFF",
        color:"#ED95D5",
        fontFamily: 'Lato',
        fontWeight: "bold",
        fontSize: "29px",
         boxShadow:" 13px 9px 15px 6px rgba(0,0,0,0.4)",
         margin:"10px 10px 10px 30px",
         padding: "10px 10px 10px 10px",
         borderRadius: "10px",
         letterSpacing: "0.02857em",
         textTransform: "uppercase",
         cursor:"pointer",
         [theme.breakpoints.down('md')]:{
            margin:"24px 10px 10px 30px", 
         },
         "&:hover":{

            boxShadow:"0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
            backgroundColor: "#d5d5d5"
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


                        <Link  className={clases.boton} to="servicios" smooth={true} duration={1000}  >

                            Servicios
                        
                         </Link>   

                        </div>
    
                    
                    </div>
              </div>
    )
}

export default Descripcion

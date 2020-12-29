import React from 'react'
import { makeStyles ,Typography,TextField, Button   } from '@material-ui/core'
import Clinica from '../Imagenes/clinica.jpg'






const useStyle=makeStyles((theme)=>({


       root:{
        position:"relative",
      
        height:"100vh",
       
        overflow:"hidden",
        margin:"200px 0px 0px 0px",
        
        "& .MuiTextField-root":{

                background:"#ffffff",
                borderRadius:"25px",
                display:"block",
                width:"400px",
                margin:"80px auto 68px auto",

             
        },
        "& .MuiFilledInput-root": {
    
                backgroundColor:"unset" ,
                width:"100% "

       }, "& .MuiFilledInput-underline:before ": {
    
        borderBottom:"none"

        },"& .MuiFilledInput-underline:after": {
    
            borderBottom:"none"
    
            },"& .MuiButton-root:hover": {
                textDecoration: "none",
                backgroundColor: "#00000000",
                border: "1px solid #ED95D5"
            }
          
       
       


    },
    boton:{
    
        background:"#FFFFFF",
        color:"#ED95D5",
        fontFamily: 'Lato',
        fontWeight: "bold",
        fontSize: "15px",
         boxShadow:" 13px 9px 15px 6px rgba(0,0,0,0.4)",
         margin:"10px auto 10px auto",
         width:"200px",
         display: "block"
         






    },

    divPrincipal:{
        
        position:"relative",
      
        height:"100vh",
       
        overflow:"hidden",
        margin:"200px 0px 0px 0px"
    },
    img:{

        height:"100%",
        width:"100%",position:"absolute",
        zIndex:"-1"
    }
    ,
    textoTitulo:{
        fontWeight:"900",
        fontFamily:"Poppins",
        padding:"150px 0px 0px 0px",
        color:"#ffffff"
    }
}))





const Consultas = () => {


        const clases=useStyle();


    return (
        <div className={clases.root}>
            <div>
            <img className={clases.img} src={Clinica} />       
            <Typography  className={clases.textoTitulo} variant="h4" align="center" >
                        CONSULTAS
           </Typography>

           <div>
           <TextField id="filled-basic" label="Nombre" variant="filled" />
           </div> 
           <div>
           <TextField id="filled-basic" label="Correo" variant="filled" />
           </div>
           <div>
           <TextField id="filled-basic" label="Asunto" variant="filled" 
            multiline
            
           />
           </div>
           <div>
               <Button className={clases.boton} >
                   Enviar
               </Button>
           </div>
           </div>
            
        </div>
    )
}

export default Consultas

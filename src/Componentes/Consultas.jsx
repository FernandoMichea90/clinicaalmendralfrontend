import React,{useState} from 'react'
import { makeStyles ,Typography,TextField, Button,TextareaAutosize   } from '@material-ui/core'
import Clinica from '../Imagenes/clinica.jpg'
import Swal from "sweetalert2"




const useStyle=makeStyles((theme)=>({


       root:{
        position:"relative",
      
        height:"100vh",
        minHeight:"800px",
        overflow:"hidden",
        margin:"200px 0px 0px 0px",
        
        "& .MuiTextField-root":{

                background:"#ffffff",
                borderRadius:"25px",
                display:"block",
                width:"400px",
                margin:"50px auto 50px auto",
                [theme.breakpoints.only("sm")]:{
                    margin:"36px auto 36px auto",
                    
                },
                [theme.breakpoints.only("xs")]:{
                    width:"auto",
                    
                }

             
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
                backgroundColor: "#ED95D5",
                border: "1px solid #ED95D5",
                color:"#ffffff"
                
            }
          
       
       


    },

    textoAreados:{

        margin:"0px auto 50px auto !important",
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
        padding:"135px 0px 0px 0px",
        color:"#ffffff",
        [theme.breakpoints.only("sm")]:{
            padding:"250px 0px 0px 0px",
            
        },

    },

  
}))





const Consultas = () => {











        const clases=useStyle();
        const [state, setstate] = useState({
            nombre:"",
            correo:"",
            asunto:""
        })


        const [error, seterror] = useState({
            nombre:"",
            correo:"",
            asunto:""
        })


        const [validado, setvalidado] = useState(false)



        const actualizarState=(e)=>{
            e.preventDefault()
            setstate({...state,[e.target.name]:e.target.value})


        }



        const mandarCorreo=()=>{
            
                setvalidado(false)    
                seterror({nombre:"",
                email:"",
                asunto:""})


             let errorUno={nombre:"",correo:"",asunto:""}
            if(state.nombre==""){

            errorUno.nombre="debe ingresar su nombre"
                setvalidado(true)
                
            }
            if(state.correo==""){
                errorUno.correo="debe ingresar su correo"
                setvalidado(true)
            }if(state.asunto==""){
                errorUno.asunto="debe ingresar su asunto"
                setvalidado(true)
            }


            console.log(errorUno)
            seterror(errorUno)
            Swal.fire({
                title:'Ups!',
                icon:'warning',
                html:`<p> ${errorUno.nombre} </p> <p>  ${errorUno.correo} </p><p> ${errorUno.asunto} </p>`

                
                
            })

        }






    return (
        <div name="consultas" className={clases.root}>
            <div>
            <img className={clases.img} src={Clinica} />       
            <Typography  className={clases.textoTitulo} variant="h4" align="center" >
                        CONSULTAS
           </Typography>

           <div>
           <TextField  id="filled-basic" label="Nombre" variant="filled" name="nombre" onChange={actualizarState} />
           </div> 
           <div>
           <TextField id="filled-basic" label="Correo" variant="filled" name="correo" onChange={actualizarState} />
           </div>´
           <div>
           <TextField id="filled-basic" label="Asunto"   rowsMax={6} name="asunto" className={clases.textoAreados}  onChange={actualizarState} variant="filled" multiline />
           </div>
           

           <div>
               <Button className={clases.boton} onClick={()=>mandarCorreo()} >
                   Enviar
               </Button>
           </div>
           </div>
            
        </div>
    )
}

export default Consultas

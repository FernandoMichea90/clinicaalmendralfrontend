import React ,{useEffect,useState}from 'react'
import { Typography, makeStyles,Paper,Grid,Button} from '@material-ui/core'
import Google from '../../../src/iconos/google.png'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { red } from '@material-ui/core/colors';
import {CardHeader,Avatar,IconButton }from '@material-ui/core';
import iconoGoogle from '../../iconos/icogoogle.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ItemComentario from '../Comentarios/ItemComentario'
import clienteAxios from '../../config/axios';






const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };





const useStyle=makeStyles((theme)=>({
    divPrincipal:{
        margin:"100px 10vw 0px 10vw",
        paddingTop:"100px",
        '& .MuiButton-root:hover	': {
                
            backgroundColor: "rgb(56, 159, 255)"
            }
      ,[theme.breakpoints.only("xs")]:{
        margin:"200px 1vw 0px 1vw",
        width: "100vw",
        overflow: "hidden"
      }
    },
    avatar: {
        backgroundColor: red[500],
      }
    ,textoTitulo:{
        fontFamily:"Poppins",
        fontWeight:"900",
        margin:"0px 0px 150px 0px"
      
    
    },divEvaluacion:{
        display:"flex",
        color: "rgb(17, 17, 17)",
        fontSize: "20px",
        
    },
    textNota:{
        fontWeight: "700",
        fontSize: "19px"


    },
    textResena:{
        fontWeight: "400",
    fontSize: "12px",
    lineHeight: "1.17",
    color: "rgba(17, 17, 17, 0.5)"
    },

    botonReseña:{
    padding: "9px 20px",
    borderRadius: "16px",
    backgroundColor: "rgb(28, 145, 255)",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "14px",
    color: "rgb(255, 255, 255)",
    display: "inline-flex",
    textTransform: "uppercase",
    userSelect: "none",
    cursor: "pointer",
    transition: "all 0.1s ease 0s",
    justifyContent: "center",
    whiteSpace: "nowrap",
    textDecoration: "none !important",
    margin:"14px 25% 0px 25%",
    
    },
    divPaper:{
        display:"inline-flex",
        padding:"18px",
        margin:"auto",
        width:"75%",
        [theme.breakpoints.down("sm")]:{
            display:"block",
            width:"unset"
        }
    },
    divPaperDos:{
       padding:"18px",
       margin:"20px auto 0px auto",
       width:"75%",
       [theme.breakpoints.down("sm")]:{
           width:"unset"
       }

    },

    
    

}))





const Comentarios = () => {





 const [state, setstate] = useState([])
   
    const clases=useStyle()





    useEffect(() => {
       

        console.log("pasoporcomentarios")
        consultarApi()

    }, [])





    const consultarApi=async()=>{



        try{
        const lista = await clienteAxios.get("/comentariostres");

            setstate(lista.data)
        console.log(lista.data)
        }catch(error){
            console.log(error)
        }

    }



    return (
        <div  name="comentarios" className={clases.divPrincipal}>

            <Typography variant="h4" align="center" className={clases.textoTitulo}>
                ¿que opinan de nosotros?
            </Typography>


            <div style={{display:"flex"}}>
            <Paper elevation={3} className={clases.divPaper} >
                
            <Grid container > 

            <Grid xs={12}  md={6}  >    

            <div className={clases.divEvaluacion}>
                <img src={Google} style={{marginRight:"8px"}} height="25"></img>    
             
                La evaluacion
            </div>    
            <div style={{display: "flex",
    alignItems: "center",marginTop:"5px"}}>
                   
                    <div className={clases.textNota}>4.5</div>
                    <div style={{color: "#fbb300",margin:"0px 5px 0px 5px"}}>
                         <span class="material-icons" >star</span>
                          <span class="material-icons">star</span>
                          <span class="material-icons">star</span>
                          <span class="material-icons">star</span>
                          <span class="material-icons">star_half</span>
                    </div> 
                    <div className={clases.textResena}>97 reseñas</div>
            </div>
            </Grid>
            <Grid xs={12} md={6}>
                <Button className={clases.botonReseña} href="https://search.google.com/local/writereview?placeid=ChIJTzeAZOAEiJYRBC_N1Yd8svw" target="_blank">
                    Escribre una reseña
                </Button>
            </Grid>
            </Grid>
            </Paper>
            </div>

            <Carousel responsive={responsive}>


                    {state.map(item=>(
                                                <ItemComentario item={item}>

                                                </ItemComentario>

                    ))}





            </Carousel> 


            
        </div>
    )
}

export default Comentarios

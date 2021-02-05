import React from 'react'
import { makeStyles, Typography, Grid, Paper,Box } from '@material-ui/core'
import Jm from '../Imagenes/dentistaUno.png'


const useStyle=makeStyles((theme)=>({


    root: {
        flexGrow: 1,
        margin:"100px 10vw 100px 10vw",
        paddingTop:"100px"
      },


texto:{
    textAlign:"center"
},
divCirujano:{
    backgroundImage: "radial-gradient(circle at 120.71% 50%, #ff94fc 0, #ff8dfc 12.5%, #ff86f9 25%, #ff7ef1 37.5%, #e475e4 50%, #c16bd5 62.5%, #a163c7 75%, #845cbb 87.5%, #6a56af 100%)"
    ,
    color:"#FFFFFF",
    borderRadius:"35px",
    position:"relative",
    width:"280px",
    height:"150px",
    top:"0px",
    bottom:"0px",
    left:"0px",
    right:"0px",
    margin:"auto",
    [theme.breakpoints.down("md")]:{
           marginTop:"20px"
    }
   
    },

  divPrincipal:{

    margin:"200px 10vw 0px 10vw",
  } ,
  
  textoNombre:{

        padding:"20px 0px 0px 20px"
  },
  textoTitulo:{
    padding:"25px 0px 0px 25px"
  },
  imagenDentista:{
   height:"150px",
   position:"absolute",
   bottom:"0",
   right:"0"

  },textoTitulo:{
    fontFamily:"Poppins",
    fontWeight:"900",
    margin:"0px 0px 150px 0px"
  

},textoCirujano:{
    margin:"0px 0px 0px 20px"
}


}))



const Nuestroequipo = () => {

   const   clases =useStyle()
    return (
        <div name="equipo" className={clases.root}>
            
            <Box m={10}>
            <Typography variant="h4" align="center" className={clases.textoTitulo}>
                Nuestro Equipo 
            </Typography>
            </Box>   
            <Grid container direction="row"
  justify="center"
  alignItems="center">
            <Grid xs={12} md={4}>
                    <Paper  elevation={3} className={clases.divCirujano}>
                       
                  
                        <Typography className={clases.textoNombre}  variant="h5">

                            Jocelyn Michea
                             
                        </Typography>
                    
                        <Typography className={clases.textoCirujano} variant="subtitle1">
                            Cirujano Dental
                        </Typography>
                        
                        <img className={clases.imagenDentista} src={Jm}></img>

                    </Paper>
                </Grid>

                <Grid xs={12} md={4}>
                    <Paper  elevation={3} className={clases.divCirujano}>
                       
                  
                        <Typography className={clases.textoNombre}  variant="h5">

                            Jocelyn Michea
                             
                        </Typography>
                    
                        <Typography className={clases.textoCirujano} variant="subtitle1">
                            Cirujano Dental
                        </Typography>
                        
                        <img className={clases.imagenDentista} src={Jm}></img>

                    </Paper>
                </Grid>

                <Grid xs={12} md={4}>
                    <Paper  elevation={3} className={clases.divCirujano}>
                       
                  
                        <Typography className={clases.textoNombre}  variant="h5">

                            Jocelyn Michea
                             
                        </Typography>
                    
                        <Typography className={clases.textoCirujano} variant="subtitle1">
                            Cirujano Dental
                        </Typography>
                        
                        <img className={clases.imagenDentista} src={Jm}></img>

                    </Paper>
                </Grid>

                  

            </Grid>

        </div>





)
}

export default Nuestroequipo


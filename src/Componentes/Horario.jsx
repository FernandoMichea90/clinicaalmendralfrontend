import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'


const useStyle=makeStyles((theme)=>({


    divPrincipal:{
    backgroundImage: "radial-gradient(circle at 120.71% 50%, #ff94fc 0, #ff8dfc 12.5%, #ff86f9 25%, #ff7ef1 37.5%, #e475e4 50%, #c16bd5 62.5%, #a163c7 75%, #845cbb 87.5%, #6a56af 100%)"
    ,margin:"200px 10vw 0px 10vw",
    color:"#FFFFFF",
    borderRadius:"25px"





    }
    , textoTitulo:{
        fontFamily:"Lato",
        fontWeight:"900",
        margin:"20px 0px 20px 0px "

    },
     textoTituloDos:{
       
        [theme.breakpoints.down("md")]:{
            height:"193px"
        }

    }
    ,textoParrafo:{
    
    margin:"20px 0px 20px 0px "
    }
    ,
    textoParrafoDos:{
        margin:"20px 0px 20px 20px ",
        [theme.breakpoints.down('md')]:{
            margin:"0px",
            textAlign:"center"
        }
    }
}))




const Horario = () => {

    const clases=useStyle()

    //        backgroundImage: "radial-gradient(circle at 120.71% 50%, #ff94fc 0, #ff8dfc 12.5%, #ff86f9 25%, #ff7ef1 37.5%, #e475e4 50%, #c16bd5 62.5%, #a163c7 75%, #845cbb 87.5%, #6a56af 100%)"

    return (
        <div>
            <div className={clases.divPrincipal}>
                <Grid container>
                        <Grid xs={12} md={4}>

                            <Typography className={clases.textoTitulo} variant="h5" style={{textAlign:"center"}}>
                            Prestaciones
                            </Typography>


                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Implantes Dentales
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Ortodoncia
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Endodoncia (Tratamineto de Conductos)
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Protesis Fija (Corona-Puentes)
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Periodoncia (Encias Sangrantes-Sarro)
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Urgencias
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Exdoncias
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Atencion de Niños 
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Operatoria Dental(Caries -Restauraciones-Tapaduras)
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Protesis Removibles 
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Planes de Relajacion
                            </Typography>   
                            <Typography className={clases.textoParrafoDos} variant="subtitle1" >
                                    Blanqueamiento Dental
                            </Typography>   
                              






                          </Grid>
                        <Grid xs={12}  md={4} style={{textAlign:"center"}} >
                            <div>
                        <Typography  className={clases.textoTitulo} variant="h5" style={{textAlign:"center"}}>
                            Horario de apertura
                            </Typography>

                            <Typography variant="subtitle1" >
                            Lun 08:00-13:00  13:00-18:00
                            </Typography>
                            <Typography className={clases.textoParrafo} variant="subtitle1" >
                            Mar 08:00-13:00  13:00-18:00  
                            </Typography>
                            <Typography className={clases.textoParrafo} variant="subtitle1" >
                            Mier 08:00-13:00  13:00-18:00  
                            </Typography>  
                             <Typography className={clases.textoParrafo} variant="subtitle1" >
                            Jue 08:00-13:00  13:00-18:00  
                            </Typography>   
                            <Typography className={clases.textoParrafo} variant="subtitle1" >
                            Vie 08:00-13:00  13:00-18:00  
                            </Typography>  
                             <Typography className={clases.textoParrafo} variant="subtitle1" >
                            Sab 08:00-13:00  13:00-18:00  
                            </Typography>
                            <Typography variant="subtitle1" >
                            Dom Cerrado
                            </Typography>
                            </div>
                        </Grid>
                        <Grid xs={12}  md={4} className={clases.textoTituloDos      }>
                        <Typography className={clases.textoTitulo} variant="h5" style={{textAlign:"center"}}>
                            Tratamiento
                            </Typography>

                            <Typography variant="subtitle1" style={{textAlign:"center"}}>
                            Su plan de tratamiento está diseñado para un progreso constante, con cada fase implementada.
                            </Typography>
                        </Grid>
                    
                
                </Grid>
        </div>
        </div>
    )
}

export default Horario

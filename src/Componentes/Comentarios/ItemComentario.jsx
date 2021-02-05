import React from 'react'
import { Typography, makeStyles,Paper,Grid,Button} from '@material-ui/core'
import iconoGoogle from '../../iconos/icogoogle.png'
import {CardHeader,Avatar,IconButton }from '@material-ui/core';


const useStyles=makeStyles((theme)=>({
    divPaperDos:{
        padding:"18px",
        margin:"20px auto 0px auto",
        width:"75%",
        [theme.breakpoints.down("sm")]:{
            width:"unset"
        }
        ,
    textResena:{
        fontWeight: "400",
    fontSize: "12px",
    lineHeight: "1.17",
    color: "rgba(17, 17, 17, 0.5)"
    },


}}))



const ItemComentario = (props) => {

const clases=useStyles()
const item=props.item


    return (
    
        <div key={item.key} style={{padding:"3px"}}>
        <Paper className={clases.divPaperDos} elevation={3}>
        <Grid container >
            <Grid container xs={12}>
                    <Grid xs={1}>
                        <Avatar src={item.imagen}>
                        
                        </Avatar>
                    </Grid>
                <Grid xs={11}>
                        <Grid>{item.nombre}</Grid>
                        <div style={{display: "flex",
alignItems: "center",marginTop:"5px"}}>
        
        
            <div style={{color: "#fbb300",margin:"0px 5px 0px 5px"}}>
                <span class="material-icons" >star</span>
                <span class="material-icons">star</span>
                <span class="material-icons">star</span>
                <span class="material-icons">star</span>
                <span class="material-icons">star</span>
            </div> 
            <div className={clases.textResena}></div>
    </div>
                    
                    </Grid>
        
            </Grid>

            <Grid xs ={12}>

                <Typography  style={{margin:"25px auto 25px auto",color: "rgba(17, 17, 17, 0.5)"}} variant="h6" align='left'>
                        
                        {item.comentario}
                </Typography>
            </Grid>      

            <div style={{display:"flex"}}>
                    <div>
                        <img style={{margin:"0px 10px 0px 10px"}} src={iconoGoogle}  alt=""  height="25"  />

                    </div>
                    <div>

                        <div style={{color: "rgba(17, 17, 17, 0.5)"}}>
                            Publicado en 
                        </div>

                        <div>
                            google 
                        </div>

                    
                    </div>    

            </div>   

        
        </Grid>    
        </Paper>

    </div>






    )
}

export default ItemComentario

import React from 'react'
import Caja18 from '../Imagenes/caja18.png'
import Losandes from '../Imagenes/losandes.png'
import Losheroes from '../Imagenes/losheroes.png'
import { Grid, makeStyles } from '@material-ui/core'


const useStyle=makeStyles((theme)=>({

     divPrincipal:{
        margin:"200px 10vw 0px 10vw",
     },imagen:{

        width:"250px",
        display:"block",
        margin:"auto",
        top:"0",
        left:"0",
        right:"0",
        bottom:"0"
     }

}))




const Convenios = () => {


        const clases=useStyle()

    return (
        <div className={clases.divPrincipal}>
            
            <Grid container>
                    <Grid xs={12} md={4} >
                        <img src={Caja18} className={clases.imagen} />
                    </Grid>
                    <Grid xs={12} md={4}>
                         <img src={Losandes} className={clases.imagen} />   
                    </Grid>
                    <Grid xs={12}  md={4}>
                         <img src={Losheroes} className={clases.imagen} />   
                    </Grid>
            </Grid>


        </div>
    )
}

export default Convenios       


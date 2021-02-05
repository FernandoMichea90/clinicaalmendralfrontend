import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icono from '../iconos/logo.png';
import {animateScroll as scroll} from 'react-scroll'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    '& .MuiButton-root:hover	': {
      background:"#FFFFFF!important",
      color:"#ed95d5"
      },
      [theme.breakpoints.only("xs")]:{
        '& .MuiButton-root': {
        fontSize:"0.675rem"
      }
      }

      
  ,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  
    paddingRight: '12px',
    marginLeft: '2px',
    color:"#c16bd5",
    [theme.breakpoints.down('sm')]: {
      marginRight:'0px',
  
    paddingRight: '12px',
    marginLeft: '0px',}
},
      barra:{
        background:"#FFFFFF",
        boxShadow:"none",
        marginTop:"42px",
       
      }

  ,
  barrados:{
    background:"#FFFFFF",
    boxShadow:"none",
    marginTop:"0px",
   
  }
,
  title: {
    flexGrow: 1,
  },
  logo:{
    maxHeight:'45px',
      [theme.breakpoints.down('sm')]: {
        height:"5vh",
        minHeight:"34px"
},
  },

  boton:{
      background:"#ed95d5",
      color:"#FFFFFF",
      borderRadius:"5px",
      
      fontFamily: 'Lato',
      fontWeight: "bold",
      
      
      [theme.breakpoints.down('sm')]: {
        marginRight:'vw'



     }},
     

 
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  // state Scroll
  const [scrollapp,setscrollapp]=useState(false)

  // listener scroll pantalla 
  
  const cambiarAppbar=()=>{
   

    if(window.scrollY>=20){

      setscrollapp(true)

    }else{

      setscrollapp(false)

    }



  }

  window.addEventListener('scroll',cambiarAppbar)

  return (
    <div className={classes.root} >
      <AppBar position="fixed" className={scrollapp ? classes.barrados:classes.barra}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
          onClick={()=>props.accionAbrir()}
          >
            
            <MenuIcon  />
            
          </IconButton>
          
          <IconButton onClick={()=>scroll.scrollToTop()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={Icono} alt="logo"  className={classes.logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
          
          </Typography>
         
          
         
          <Button  variant="contained"  className={classes.boton}  href="https://e9ce63006869ea140e20053ac15620ffc8ee3a0b.agenda.softwaredentalink.com/agendas/agendamiento " target="_blank">Pedir Cita</Button>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}

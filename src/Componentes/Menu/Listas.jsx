import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import {Room,Home,RoomService,Comment,Hotel,Mail} from '@material-ui/icons'
import {Link} from 'react-scroll'
import FacebookIcon from '@material-ui/icons/Facebook';
import Photo from '@material-ui/icons/PhotoCamera';
import Servicio from '@material-ui/icons/Assignment';
import Equipo from '@material-ui/icons/Group';
import Convenio from '@material-ui/icons/Redeem';
const useStyles=makeStyles((theme)=>({

    root:{
     "& .MuiListItem-root:hover > .MuiListItemIcon-root,.MuiListItem-root:hover > .MuiListItemText-root":{
       color:"#ffffff",
       
     },
     "& .MuiListItem-root:hover, .MuiListItemIcon-root:hover":{
       

    }, "& .MuiListItem-button:hover":{
        textDecoration: "none",
        backgroundColor: "#e475e4"
    }  
  
    },
    colico:{
    }


}))



const Listas = (props) => {

    const clases=useStyles()
      
    return (
        <div className={clases.root}>
            <List className="nav">

               

              
            <Link to="nosotros" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem button >
                    
                    <ListItemIcon>
                        <Home className={clases.colico}>

                        </Home>
                    </ListItemIcon>
                    <ListItemText>
                        Nosotros 
                       
                    </ListItemText>
                  
                </ListItem> 
                </Link>
                <Link to="servicios" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                        <Servicio className={clases.colico}></Servicio>
                    </ListItemIcon>
                    <ListItemText>
                        Servicios               
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="equipo" smooth={true} duration={1000} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                      <Equipo className={clases.colico}></Equipo>
                    </ListItemIcon>
                    <ListItemText>
                        Nuestro equipo
                        
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="convenios" smooth={true} duration={1000} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                        <Convenio className={clases.colico}></Convenio>
                    </ListItemIcon>
                    <ListItemText>
                        Convenios
                     
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="comentarios" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                    <Comment className={clases.colico}></Comment>
                    </ListItemIcon>
                    <ListItemText>
                        Comentarios
                       
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="galeria" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                        <Photo className={clases.colico}></Photo>
                    </ListItemIcon>
                    <ListItemText>
                        Galeria
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="redes" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                        <FacebookIcon className={clases.colico}> </FacebookIcon>
                    </ListItemIcon>
                    <ListItemText>
                        Redes Sociales
                    
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="consultas" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                        <Mail className={clases.colico}></Mail>
                    </ListItemIcon>
                    <ListItemText>
                        Consultas
                    
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="ubicacion" smooth={true} duration={1000} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                      <Room className={clases.colico}></Room>
                    </ListItemIcon>
                    <ListItemText>
                        Ubicacion
                        
                    </ListItemText>
                </ListItem>
                </Link>

            </List>

        </div>
    )
}

export default Listas

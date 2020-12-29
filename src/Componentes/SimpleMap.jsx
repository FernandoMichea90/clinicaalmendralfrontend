import React, { Component }  from 'react'
import GoogleMapReact from 'google-map-react'
import RoomIcon from '@material-ui/icons/Room';


const AnyReactComponent=({text})=><div style={{color:"#ED95D5"}}>
  
  
  <RoomIcon fontSize="large"  ></RoomIcon>
  {text}</div>  




class SimpleMap extends Component {
    static defaultProps = {
      center: {
        lat: -33.04371,
        lng: -71.62747
      },
      zoom: 21
    };
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={-33.04371}
              lng={-71.62747}
              text="Clinica Almendral"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default SimpleMap;
  
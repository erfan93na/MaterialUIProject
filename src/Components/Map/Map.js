import { makeStyles } from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {data} from "../../data"
const useStyles=makeStyles({root:{
     height:"100%",
}})
const Map = () => {
    const classes=useStyles()
    return (
      <MapContainer center={[35.773024, 51.413525

      ]} zoom={12} scrollWheelZoom={false} className={classes.root}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />{
    data.map(gym=><Marker position={gym.coords}>
      <Popup>
        {gym.name} <br /> {gym.gender}
      </Popup>
    </Marker>)
  }
  
</MapContainer>
       );
}
 
export default Map;
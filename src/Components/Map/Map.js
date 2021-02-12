import { makeStyles } from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const useStyles=makeStyles({root:{
     height:"100%",
}})
const Map = () => {
    const classes=useStyles()
    return ( <MapContainer  position={[35.68, 51.68]} zoom={13} scrollWheelZoom={false} className={classes.root}>
       <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.68, 51.68]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> );
}
 
export default Map;
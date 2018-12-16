import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={this.props.center}
        zoom={14}
      >
        {this.props.positions.map(pos => (
          <Marker key={pos.name} name={pos.name} position={pos.coords} />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API
})(MapContainer);

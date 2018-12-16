import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import Map from "./MapContainer";
import "./App.css";

class App extends Component {
  state = {
    origen: "",
    destino: "",
    positions: [
      {
        name: "SOMA",
        coords: { lat: 37.778519, lng: -122.40564 }
      },
      {
        name: "Dolores park",
        coords: { lat: 37.759703, lng: -122.428093 }
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <header className="App-header">
              <Input
                placeholder="Origen"
                onChange={e => {
                  this.setState({ origen: e.target.value });
                }}
              />
              <Input
                placeholder="Destino"
                onChange={e => {
                  this.setState({ destino: e.target.value });
                }}
              />
              <Button
                onClick={() => {
                  debugger;
                }}
              >
                Buscar
              </Button>
              <div>origen: {this.state.origen}</div>
              <div>destino: {this.state.destino}</div>
            </header>
          </Grid>
          <Grid item xs={8}>
            <div id="mapid">
              <Map
                positions={this.state.positions}
                center={{ lat: 37.778519, lng: -122.40564 }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

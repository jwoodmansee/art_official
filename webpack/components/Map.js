import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: 0, long: 0 };
    this.state.handler = this.state.handler.bind(this);
  }

  componentWillMount() {
    // make ajax call to get specific lat and long for map
    // set state and render the map
    // HTML5 location services if you need to get current users location
    //
  }

  componentDidMount() {
    handler = Gmaps.build('Google');
    handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
      markers = handler.addMarkers([
        {
          "lat": 0,
          "lng": 0,
          "picture": {
            "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
            "width":  32,
            "height": 32
          },
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    });
  }

  render() {
    return(
      <div>
        <div id="map"></div>
      </div>
    );
  }
}

export default Map;

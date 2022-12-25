import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapBox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  // Transform the search results object into the  lat long object required
  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = React.useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 13,
  });

  useEffect(() => {
    setViewState({
      width: "100%",
      height: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 13,
    });
  }, [searchResults]);
  //center.latitude, center.longitude, 

  return (
    <Map
      mapStyle="mapbox://styles/whatever777/clc3jw7jh001a14n6bs6ptf3i"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      
    >
      {searchResults.map((result, index) => (
        <div key={index}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-md bg-white rounded-lg px-2 shadow-md font-semibold hover:bg-black hover:text-white"
              aria-label="push-pin"
            >
              {result.price}
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.long}
              anchor="bottom-right"
            >
              {result.name}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default MapBox;

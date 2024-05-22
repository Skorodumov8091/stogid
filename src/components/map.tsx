import React from "react";
import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker
} from "ymap3-components";
// import { features, LOCATION } from './helpers'

function Map() {
  return (
    // <YMapComponentsProvider apiKey={process.env.REACT_APP_YMAP_KEY}>
    <YMapComponentsProvider apiKey={'ce5a32fd-92d5-47a5-aad9-852cfb129c4d'}>
      <YMap location={{ center: [31.271, 58.5213], zoom: 11 }}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapDefaultMarker
          coordinates={[31.271, 58.5213]}
        />
      </YMap>
    </YMapComponentsProvider>
  );
}

export default Map;
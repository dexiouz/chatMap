import React from 'react';
import mapDarkTheme from '../../styles/mapDarkTheme.json';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import mapLightTheme from '../../styles/mapLightTheme.json';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

const NIGERIA_CAMERA = {
  center: {
    latitude: 9.59396,
    longitude: 8.105306,
  },
  zoom: 20,
};

const MapViewRef = React.forwardRef(function Map(props, ref) {
  const schema = useColorScheme();

  return (
    <MapView
      ref={ref}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: NIGERIA_CAMERA.center.latitude,
        longitude: NIGERIA_CAMERA.center.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      customMapStyle={schema === 'light' ? mapLightTheme : mapDarkTheme}
      {...props}>
      {props.children}
    </MapView>
  );
});

export default MapViewRef;

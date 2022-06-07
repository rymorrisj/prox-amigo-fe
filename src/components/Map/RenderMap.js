import { useEffect, useMemo, useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

export default function RenderMap() {
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState('');
  const [center, setCenter] = useState();
  const mapRef = useRef();
  const options = useMemo(() => ({
    mapId: 'cbfb6e9ece8ce943', // This is currently causing a hanging request to google, comment out while I dev for prototype
    disableDefaultUI: true,
    clickableIcons: false,
  }), []);

  useEffect(() => {
    const _getCenter = async () => {
      const _successGetCurPos = pos => {
        const { latitude, longitude } = pos.coords;
        setCenter({ lat: latitude, lng: longitude });
        setIsMounted(true);
      };
      const _errorGetCurPos = err => {
        setError(err)
        setIsMounted(true);
        console.log(error);
      };
  
      if (navigator?.geolocation?.getCurrentPosition) {
        await navigator.geolocation.getCurrentPosition(_successGetCurPos, _errorGetCurPos, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        });
      } else {
        console.log('This app must have location permission to work properly. Please enable location in settings.');
      }
  
      return center;
    };

    if (!isMounted && !center) {
      _getCenter();
    }
  }, [center, error, isMounted]);

  const onLoad = useCallback(map => (mapRef.current = map), []);

  if (!center) return <section>Loading...</section>;
  return (
    <section>
      <GoogleMap 
        zoom={13} 
        center={center} 
        mapContainerClassName='map-container'
        options={options}
        onLoad={onLoad}
      >
        <Marker
          key={center.lat}
          position={center}
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" 
        />
      </GoogleMap>
    </section>
  );
}

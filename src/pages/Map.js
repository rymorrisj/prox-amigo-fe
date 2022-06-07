import { useLoadScript  } from '@react-google-maps/api';
import RenderMap from '../components/Map/RenderMap';

const GOOGLE_API_KEY = 'its a secret';
const libraries = ['directions'];

const Map = () => {
    const { isLoaded } = useLoadScript({
        libraries,
        googleMapsApiKey: GOOGLE_API_KEY,
    })
    
    if (!isLoaded) return <section>Loading...</section>;
    return <RenderMap />;
}

export default Map;
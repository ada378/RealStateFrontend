import React, { useState } from 'react';
import { GoogleMap, LoadScript, KmlLayer, Marker } from '@react-google-maps/api';

const MapSection = () => {
  const [map, setMap] = useState(null);
  
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '15px'
  };

  const center = {
    lat: 34.0522,
    lng: -118.2437
  };

  const properties = [
    { id: 1, position: { lat: 34.0522, lng: -118.2437 }, title: 'Property 1' },
    { id: 2, position: { lat: 34.0622, lng: -118.2537 }, title: 'Property 2' },
    { id: 3, position: { lat: 34.0422, lng: -118.2337 }, title: 'Property 3' }
  ];

  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
  const KML_FILE_URL = 'https://your-domain.com/path/to/properties.kml';

  return (
    <section className="map-section" id="map">
      <div className="map-container">
        <div className="map-header">
          <h2 className="map-title">Property Locations</h2>
          <p className="map-subtitle">Explore our properties on the interactive map</p>
        </div>
        
        <div className="map-wrapper">
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              mapContainerClassName="google-map"
              center={center}
              zoom={12}
              onLoad={map => setMap(map)}
            >
              <KmlLayer
                url={KML_FILE_URL}
                options={{ preserveViewport: true }}
              />
              
              {properties.map(property => (
                <Marker
                  key={property.id}
                  position={property.position}
                  title={property.title}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

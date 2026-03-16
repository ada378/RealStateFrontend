import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt, FaExpand, FaCompress, FaCheckCircle, FaClock } from 'react-icons/fa';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const createCustomIcon = (completed) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${completed ? '#10b981' : '#f59e0b'};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
};

const projectLocations = [
  { id: 1, name: 'Chandraprabha Enclave', location: 'Lucknow', lat: 26.8467, lng: 80.9289, completed: true, families: 250, type: 'Chandraprabha' },
  { id: 2, name: 'Chandraprabha Heights', location: 'Lucknow', lat: 26.8600, lng: 80.9450, completed: true, families: 320, type: 'Chandraprabha' },
  { id: 3, name: 'QalaGriha Estates', location: 'Lucknow', lat: 26.8700, lng: 80.9150, completed: true, families: 180, type: 'QalaGriha' },
  { id: 4, name: 'QalaGriha Gardens', location: 'Lucknow', lat: 26.8650, lng: 80.9200, completed: false, families: 150, type: 'QalaGriha' },
  { id: 5, name: 'Chandraprabha Grand', location: 'Lucknow', lat: 26.8550, lng: 80.9350, completed: false, families: 400, type: 'Chandraprabha' },
  { id: 6, name: 'Spark Heights', location: 'Noida', lat: 28.5355, lng: 77.3910, completed: true, families: 280, type: 'Chandraprabha' },
  { id: 7, name: 'Chandraprabha Tower', location: 'Noida', lat: 28.5400, lng: 77.4050, completed: false, families: 400, type: 'Chandraprabha' },
  { id: 8, name: 'QalaGriha Royal', location: 'Noida', lat: 28.5500, lng: 77.4200, completed: false, families: 120, type: 'QalaGriha' },
  { id: 9, name: 'Metro View', location: 'Noida', lat: 28.5200, lng: 77.3800, completed: true, families: 180, type: 'Chandraprabha' },
];

const MapControls = ({ zoomIn, zoomOut, fitBounds, isFullscreen, toggleFullscreen }) => {
  return (
    <div className={`map-controls-new ${isFullscreen ? 'fullscreen' : ''}`}>
      <button onClick={zoomIn} className="map-control-btn" title="Zoom In">
        +
      </button>
      <button onClick={zoomOut} className="map-control-btn" title="Zoom Out">
        -
      </button>
      <button onClick={fitBounds} className="map-control-btn" title="Fit All">
        <FaExpand />
      </button>
      <button onClick={toggleFullscreen} className="map-control-btn" title="Fullscreen">
        {isFullscreen ? '−' : '⤢'}
      </button>
    </div>
  );
};

const LegacyImpactMap = () => {
  const [mapError, setMapError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const mapRef = useRef(null);

  const bounds = L.latLngBounds(projectLocations.map(p => [p.lat, p.lng]));

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  const handleFitBounds = () => {
    if (mapRef.current) {
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const lucknowProjects = projectLocations.filter(p => p.location === 'Lucknow');
  const noidaProjects = projectLocations.filter(p => p.location === 'Noida');

  return (
    <section className="legacy-map" id="legacy-map">
      <div className="legacy-map-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="legacy-map-header"
        >
          <span className="legacy-map-tag">Our Presence</span>
          <h2 className="legacy-map-title">Legacy Impact Map</h2>
          <p className="legacy-map-subtitle">
            Explore our growing footprint across Lucknow and Noida. Each marker represents a project that's transformed communities and created thousands of happy homes.
          </p>
        </motion.div>

        <div className="legacy-map-stats">
          <div className="legacy-stat">
            <span className="legacy-stat-number">{projectLocations.length}+</span>
            <span className="legacy-stat-label">Projects</span>
          </div>
          <div className="legacy-stat">
            <span className="legacy-stat-number">2380+</span>
            <span className="legacy-stat-label">Families Happy</span>
          </div>
          <div className="legacy-stat">
            <span className="legacy-stat-number">2</span>
            <span className="legacy-stat-label">Major Cities</span>
          </div>
          <div className="legacy-stat">
            <span className="legacy-stat-number">15+</span>
            <span className="legacy-stat-label">Years of Excellence</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`legacy-map-wrapper ${isFullscreen ? 'fullscreen' : ''}`}
        >
          <MapControls 
            zoomIn={handleZoomIn} 
            zoomOut={handleZoomOut} 
            fitBounds={handleFitBounds}
            isFullscreen={isFullscreen}
            toggleFullscreen={toggleFullscreen}
          />

          <div className="leaflet-map-container">
            <MapContainer
              ref={mapRef}
              center={[26.8467, 80.9289]}
              zoom={10}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {projectLocations.map((project) => (
                <Marker
                  key={project.id}
                  position={[project.lat, project.lng]}
                  icon={createCustomIcon(project.completed)}
                  eventHandlers={{
                    click: () => setSelectedProject(project),
                  }}
                >
                  <Popup>
                    <div className="map-popup">
                      <h4>{project.name}</h4>
                      <p><strong>Location:</strong> {project.location}</p>
                      <p><strong>Type:</strong> {project.type}</p>
                      <p><strong>Families:</strong> {project.families}+</p>
                      <span className={`popup-status ${project.completed ? 'completed' : 'ongoing'}`}>
                        {project.completed ? 'Completed' : 'Ongoing'}
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div className="map-legend">
            <div className="legend-item">
              <span className="legend-dot completed"></span>
              <span>Completed ({projectLocations.filter(p => p.completed).length})</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot ongoing"></span>
              <span>Ongoing ({projectLocations.filter(p => !p.completed).length})</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot chandraprabha"></span>
              <span>Chandraprabha ({projectLocations.filter(p => p.type === 'Chandraprabha').length})</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot qalagriha"></span>
              <span>QalaGriha ({projectLocations.filter(p => p.type === 'QalaGriha').length})</span>
            </div>
          </div>
        </motion.div>

        <div className="legacy-projects-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="legacy-city-section"
          >
            <h3 className="city-section-title">
              <FaMapMarkerAlt /> Lucknow ({lucknowProjects.length} Projects)
            </h3>
            <div className="city-projects">
              {lucknowProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  className="legacy-project-card"
                  onClick={() => {
                    setSelectedProject(project);
                    handleFitBounds();
                  }}
                >
                  <div className="legacy-project-icon" style={{ background: project.type === 'Chandraprabha' ? 'linear-gradient(135deg, #1e3a8a, #3b82f6)' : 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className="legacy-project-info">
                    <h4>{project.name}</h4>
                    <p>{project.type}</p>
                    <span className={`legacy-status ${project.completed ? 'completed' : 'ongoing'}`}>
                      {project.completed ? <FaCheckCircle /> : <FaClock />} {project.completed ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>
                  <div className="legacy-project-families">
                    <span className="families-number">{project.families}+</span>
                    <span className="families-label">Families</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="legacy-city-section"
          >
            <h3 className="city-section-title">
              <FaMapMarkerAlt /> Noida ({noidaProjects.length} Projects)
            </h3>
            <div className="city-projects">
              {noidaProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  className="legacy-project-card"
                  onClick={() => {
                    setSelectedProject(project);
                    handleFitBounds();
                  }}
                >
                  <div className="legacy-project-icon" style={{ background: project.type === 'Chandraprabha' ? 'linear-gradient(135deg, #1e3a8a, #3b82f6)' : 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className="legacy-project-info">
                    <h4>{project.name}</h4>
                    <p>{project.type}</p>
                    <span className={`legacy-status ${project.completed ? 'completed' : 'ongoing'}`}>
                      {project.completed ? <FaCheckCircle /> : <FaClock />} {project.completed ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>
                  <div className="legacy-project-families">
                    <span className="families-number">{project.families}+</span>
                    <span className="families-label">Families</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegacyImpactMap;

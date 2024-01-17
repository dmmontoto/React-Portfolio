import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from 'react';


export default function Imaging() {
  const [datePattern, setDatePattern] = useState('');
  const [active, setActive] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDescription, setSearchDescription] = useState('');
  const [selectedCamera, setSelectedCamera] = useState('');
  const [searchAlert, setSearchAlert] = useState('');
  const [responseTitle, setResponseTitle] = useState('');
  const [roverDescription, setRoverDescription] = useState('');
  const [youtubeIframeSrc, setYoutubeIframeSrc] = useState('');
  const [cameraOptions, setCameraOptions] = useState([]);

  return (
    <main id="nasa-api">
      <div className="mars-background"></div>
  
      <div id="nasaLogo">
        <img id="nasa-img" src="assets/images/NASA.png" alt="NASA Logo" />
      </div>
  
      <section className="container justify-content-center align-items-center">
        <div id="search" className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="buttons d-flex justify-content-center flex-lg-row flex-column">
              <button onClick={() => handleRoverButtonClick('curiosity', '2012-08-06', curiosityCameras)} className={`btn btn-primary ${active === 'curiosity' ? 'active' : ''}`}>
                Curiosity
              </button>
              <button onClick={() => handleRoverButtonClick('spirit', '2004-01-08', spiritCameras)} className={`btn btn-primary ${active === 'spirit' ? 'active' : ''}`}>
                Spirit
              </button>
              <button onClick={() => handleRoverButtonClick('opportunity', '2004-01-26', opportunityCameras)} className={`btn btn-primary ${active === 'opportunity' ? 'active' : ''}`}>
                Opportunity
              </button>
            </div>
            <h2 id="search-title" className="text-center">{searchTitle}</h2>
            <p id="search-description" className="text-center">{searchDescription}</p>
            <div id="selectors" className="d-flex flex-wrap justify-content-center align-items-center">
              <input type="date" id="date-pattern" className="form-control me-2 mb-2" value={datePattern} onChange={(e) => setDatePattern(e.target.value)} />
              <input
                id="rover-camera-input"
                list="cameras"
                className="form-control mb-2"
                type="text"
                placeholder="Rover Cameras"
                value={selectedCamera}
                onChange={(e) => setSelectedCamera(e.target.value)}
              />
              <datalist id="cameras">
                {cameraOptions.map((option) => (
                  <option key={option.id} value={option.value} />
                ))}
              </datalist>
            </div>
            <h3 id="search-alert">{searchAlert}</h3>
            <div id="selectors" className="d-flex flex-wrap justify-content-center align-items-center">
              <button onClick={handleSearchButtonClick} className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <section id="response">
        <h2 id="response-title">{responseTitle}</h2>
        <div className="row">
          <div className="col-lg-6">
            <div id="rover-details">
              <p id="rover-description">{roverDescription}</p>
              <iframe id="youtube-iframe" width="100%" height="315" src={youtubeIframeSrc} frameBorder="0" allowFullScreen title="Mars Rover Video"></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="slideshow" className="carousel slide" data-bs-ride="carousel">
              <div id="slideshow-inner" className="carousel-inner">
                {/* Slides will be added dynamically */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );  
}

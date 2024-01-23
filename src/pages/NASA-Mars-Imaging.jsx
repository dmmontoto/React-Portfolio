import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';


export default function Imaging() {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDescription, setSearchDescription] = useState('');
  let selectedCamera = "";
  let searchAlert = "";
  let responseTitle = "";
  let roverDescription = "";
  let youtubeIframeSrc = "";

  let active = "";

  const [cameraOptions, setCameraOptions] = useState([
    { id: 'FHAZ', value: 'Front Hazard Avoidance Camera' },
    { id: 'RHAZ', value: 'Rear Hazard Avoidance Camera' },
    { id: 'MAST', value: 'Mast Camera' },
    { id: 'CHEMCAM', value: 'Chemistry and Camera Complex' },
    { id: 'MAHLI', value: 'Mars Hand Lens Imager' },
    { id: 'MARDI', value: 'Mars Descent Imager' },
    { id: 'NAVCAM', value: 'Navigation Camera' },
    { id: 'PANCAM', value: 'Panoramic Camera'},
    { id: 'MTES', value: 'Miniature Thermal Emission Spectrometer'}
  ]);


  const handleCuriosityClick = () => {
    setSearchTitle("Curiosity");
    setSearchDescription("For the Curiosity rover, images are available starting from August 6th, 2012. The newest available images can be found three to four days prior to the current date.");

    const datePatternInput = document.getElementById('date-pattern');
    if (datePatternInput) {
      datePatternInput.value = "2012-08-06";
    }

    active = "Curiosity";

    // Filter camera options based on the selected rover
    const curiosityCameras = [
      { id: 'FHAZ', value: 'Front Hazard Avoidance Camera' },
      { id: 'RHAZ', value: 'Rear Hazard Avoidance Camera' },
      { id: 'MAST', value: 'Mast Camera' },
      { id: 'CHEMCAM', value: 'Chemistry and Camera Complex' },
      { id: 'MAHLI', value: 'Mars Hand Lens Imager' },
      { id: 'MARDI', value: 'Mars Descent Imager' },
      { id: 'NAVCAM', value: 'Navigation Camera' },
    ];
    
    // Update the state with the filtered camera options
    setCameraOptions(curiosityCameras);
  };

  return (

    <main id="nasa-api">
      <div className="mars-background"></div>
  
      <div id="nasaLogo">
        <img id="nasa-img" src="assets/NASA.png" alt="NASA Logo" />
      </div>
  
      <section className="container justify-content-center align-items-center">
        <div id="search" className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="buttons d-flex justify-content-center flex-lg-row flex-column">
              <button className={`btn btn-primary`} onClick={handleCuriosityClick}>
                Curiosity
              </button>
              <button className={`btn btn-primary`}>
                Spirit
              </button>
              <button className={`btn btn-primary`}>
                Opportunity
              </button>
            </div>
            <h2 id="search-title" className="text-center">{searchTitle}</h2>
            <p id="search-description" className="text-center">{searchDescription}</p>
            <div id="selectors" className="d-flex flex-wrap justify-content-center align-items-center">
              <input type="date" id="date-pattern" className="form-control me-2 mb-2" />
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
              <button className="btn btn-primary">
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

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';


export default function Imaging() {
  let date = new Date();
  let year = date.getFullYear();
  let month = (date.getMonth()+1).toString();
  if (month.length === 1) {
      month = '0' + month;
  }
  let today = String(date.getDate()).padStart(2,'0');
  const datePattern = `${year}-${month}-${today}`;

  const [searchTitle, setSearchTitle] = useState('');
  const [searchDescription, setSearchDescription] = useState('');
  const [selectedCamera, setSelectedCamera] = useState('');
  const [searchAlert, setSearchAlert] = useState('');
  const [responseTitle, setResponseTitle] = useState('');
  const [roverDescription, setRoverDescription] = useState('');
  const [youtubeIframeSrc, setYoutubeIframeSrc] = useState('');
  const [active, setActive] = useState('');

  const [cameraOptions, setCameraOptions] = useState([
    { id: 'FHAZ', value: 'Front Hazard Avoidance Camera' },
    { id: 'RHAZ', value: 'Rear Hazard Avoidance Camera' },
    { id: 'MAST', value: 'Mast Camera' },
    { id: 'CHEMCAM', value: 'Chemistry and Camera Complex' },
    { id: 'MAHLI', value: 'Mars Hand Lens Imager' },
    { id: 'MARDI', value: 'Mars Descent Imager' },
    { id: 'NAVCAM', value: 'Navigation Camera' },
    { id: 'PANCAM', value: 'Panoramic Camera'},
    { id: 'MINITES', value: 'Miniature Thermal Emission Spectrometer'}
  ]);


  const handleCuriosityClick = () => {
    setSearchTitle("Search Curiosity Images");
    setSearchDescription("For the Curiosity rover, images are available starting from August 6th, 2012. The newest available images can be found three to four days prior to the current date.");
    setSearchAlert('');

    const datePatternInput = document.getElementById('date-pattern');
    if (datePatternInput) {
      datePatternInput.value = "2012-08-06";
    }

    setActive('curiosity');

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
    setSelectedCamera('');
  };

  const handleSpiritClick = () => {
    setSearchTitle("Search Spirit Images");
    setSearchDescription("For the Spirit rover, images are available between the dates of January 8th, 2004 to January 10th, 2010.");
    setSearchAlert('');

    const datePatternInput = document.getElementById('date-pattern');
    if (datePatternInput) {
      datePatternInput.value = "2004-01-08";
    }

    setActive('spirit');

    // Filter camera options based on the selected rover
    const SpiritCameras = [
      { id: 'FHAZ', value: 'Front Hazard Avoidance Camera' },
      { id: 'RHAZ', value: 'Rear Hazard Avoidance Camera' },
      { id: 'NAVCAM', value: 'Navigation Camera' },
      { id: 'PANCAM', value: 'Panoramic Camera'},
      { id: 'MINITES', value: 'Miniature Thermal Emission Spectrometer'}
    ];
    
    // Update the state with the filtered camera options
    setCameraOptions(SpiritCameras);
    setSelectedCamera('');
  };

  const handleOpportunityClick = () => {
    setSearchTitle("Search Opportunity Images");
    setSearchDescription("For the Opportunity rover, images are available between the dates of January 29th, 2004 to June 11th, 2017.");
    setSearchAlert('');

    const datePatternInput = document.getElementById('date-pattern');
    if (datePatternInput) {
      datePatternInput.value = "2004-01-29";
    }

    setActive('opportunity');

    // Filter camera options based on the selected rover
    const opportunityCameras = [
      { id: 'FHAZ', value: 'Front Hazard Avoidance Camera' },
      { id: 'RHAZ', value: 'Rear Hazard Avoidance Camera' },
      { id: 'NAVCAM', value: 'Navigation Camera' },
      { id: 'PANCAM', value: 'Panoramic Camera'},
      { id: 'MINITES', value: 'Miniature Thermal Emission Spectrometer'}
    ];
    
    // Update the state with the filtered camera options
    setCameraOptions(opportunityCameras);
    setSelectedCamera('');
  };

  const clearResponse = () => {
    setResponseTitle('');
    setRoverDescription('');
    setYoutubeIframeSrc('');
  };

  const apiSearch = () => {
    setSearchAlert('');
    if (active == '') {
      setSearchAlert("Please select a Mars Rover, date, and camera before clicking search.");
      clearResponse();
    }

    const dateParam = document.getElementById("date-pattern").value;
    const [year, month, day] = dateParam.split('-');
    const parsedYear = parseInt(year);
    const parsedMonth = parseInt(month);
    const parsedDay = parseInt(day);

    if(!parsedYear || !parsedYear || !parsedDay) {
      return;
  }

  let camParam;
  switch (selectedCamera) {
    case "Front Hazard Avoidance Camera":
      camParam = 'FHAZ';
      break;
    case "Rear Hazard Avoidance Camera":
      camParam = 'RHAZ';
      break;
    case "Mast Camera":
      camParam = 'MAST';
      break;
    case "Chemistry and Camera Complex":
      camParam = 'CHEMCAM';
      break;
    case "Mars Hand Lens Imager":
      camParam = 'MAHLI';
      break;
    case "Mars Descent Imager":
      camParam = 'MARDI';
      break;
    case "Navigation Camera":
      camParam = 'NAVCAM';
      break;
    case "Panoramic Camera":
      camParam = 'PANCAM';
      break;
    case "Miniature Thermal Emission Spectrometer":
      camParam = 'MINITES';
      break;
    default:
      setSearchAlert('Please select a camera');
      return;
  }

  switch(active) {
    case "curiosity":
        if (parsedYear < 2012) {
          setSearchAlert('Invalid date: Too early for the Curiosity rover');
          return;
        } else if (parsedYear === 2012 && parsedMonth < 8) {
          setSearchAlert('Invalid date: Too early for the Curiosity rover');
          return;
        } else if (parsedYear === 2012 && parsedMonth === 8 && parsedDay < 6) {
           setSearchAlert('Invalid date: Too early for the Curiosity rover');
          return;
        } else if (parsedYear === new Date().getFullYear() && parsedMonth === new Date().getMonth() + 1 && parsedDay > new Date().getDate() - 3) {
          setSearchAlert('Invalid date: Too close to today');
          return;
        } else {
          break;
        }  
    case "spirit":
        if (parsedYear < 2004) {
          setSearchAlert('Invalid date: Too early for the Spirit rover');
          return;
        } else if (parsedYear === 2004 && parsedMonth < 1) {
          setSearchAlert('Invalid date: Too early for the Spirit rover');
          return;
        } else if (parsedYear === 2004 && parsedMonth === 1 && parsedDay < 5) {
          setSearchAlert('Invalid date: Too early for the Spirit rover');
          return;
        } else if (parsedYear > 2010) {
          setSearchAlert('Invalid date: Last available date is January 10th, 2010');
          return;
        } else if (parsedYear === 2010 && parsedMonth > 1) {
          setSearchAlert('Invalid date: Last available date is January 10th, 2010');
          return;
        } else if (parsedYear === 2010 && parsedMonth === 1 && parsedDay > 10) {
          setSearchAlert('Invalid date: Last available date is January 10th, 2010');
          return;
        } else {
          break;
        }
    case "opportunity":
        if (parsedYear < 2004) {
          setSearchAlert('Invalid date: Too early for the Opportunity rover');
          return;
        } else if (parsedYear === 2004 && parsedMonth < 1) {
          setSearchAlert('Invalid date: Too early for the Opportunity rover');
          return;
        } else if (parsedYear === 2004 && parsedMonth === 1 && parsedDay < 29) {
          setSearchAlert('Invalid date: Too early for the Opportunity rover');
          return;
        } else if (parsedYear > 2017) {
          setSearchAlert('Invalid date: Last available date is June 11th, 2017');
          return;
        } else if (parsedYear === 2017 && parsedMonth > 6) {
          setSearchAlert('Invalid date: Last available date is June 11th, 2017');
          return;
        } else if (parsedYear === 2017 && parsedMonth === 6 && parsedDay > 11) {
          setSearchAlert('Invalid date: Last available date is June 11th, 2017');
          return;
        } else {
          break;
        }
  }
  roverSearch(dateParam, active, camParam);
};

const roverSearch = (dateParam, active, camParam) => {
  switch(active) {
    case "curiosity":
      setResponseTitle('Curiosity');
      setRoverDescription(
        <>
          The <a href="https://mars.nasa.gov/msl/home/"><span>Curiosity</span></a> rover,
          also known as the Mars Science Laboratory (MSL), is a car-sized rover designed to explore Mars. Launched by NASA on November 26, 2011, and successfully
          landed on Mars on August 6, 2012, Curiosity's primary goal is to study the Martian climate and geology to assess whether the planet could have ever
          supported microbial life. It has made remarkable discoveries, including finding evidence of ancient riverbeds and confirming the presence of water in the
          planet's past. Curiosity continues to investigate Mars' surface, sending back valuable data and images that contribute to our understanding of the
          Red Planet's history and potential habitability.
        </>
      );
      setYoutubeIframeSrc("https://www.youtube.com/embed/xtDpWGF16po?si=A52tsFI-htn2MXig");
      break;
    case "spirit":
      setResponseTitle('Spirit');
      setRoverDescription(
        <>
          The <a href="https://solarsystem.nasa.gov/missions/spirit/in-depth/"><span>Spirit</span></a> 
            rover was a vital part of NASA's Mars Exploration Rover mission. It landed on Mars on January 4, 2004, with a mission focused on studying the planet's geology 
            and searching for signs of past water activity. Designed for a 90-day mission, Spirit far exceeded expectations and operated for over six years, providing valuable 
            insights into the Martian environment. The rover helped identify the presence of volcanic rocks, ancient river channels, and evidence of past water flows. Although 
            its mission ended in 2010 after getting stuck in sand, Spirit's legacy continues to contribute to our understanding of the Red Planet's history and geology.
        </>
      )
      setYoutubeIframeSrc("https://www.youtube.com/embed/UTocjTbLUXs?si=_puVGd1Tk-BuGoYR");
      break;
    case "opportunity":
      setResponseTitle('Opportunity');
      setRoverDescription(
        <>
          The <a href="https://solarsystem.nasa.gov/missions/opportunity/in-depth/"><span>Opportunity</span></a> 
            rover was a remarkable part of NASA's Mars Exploration Rover mission. Touching down on Mars on January 25, 2004, Opportunity exceeded all expectations by continuing 
            its mission for nearly 15 years. Its exploration of the Martian surface provided invaluable insights into the planet's history and geology. Opportunity's discoveries 
            included evidence of past water on Mars and geological features that suggested a watery environment in the planet's past. The rover's remarkable longevity and the scientific 
            data it gathered significantly expanded our understanding of Mars and its potential for past habitability.
        </>
      )
      setYoutubeIframeSrc("https://www.youtube.com/embed/1Ll-VHYxWXU?si=xdCc8js3Z_DyGtMI");
      break;
  }

  const nasaApiKey = '2QbpLQBozt59EwMHuzZseMAHas7Z9Q6X2gVu7UFm';
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${active}/photos?earth_date=${dateParam}&camera=${camParam}&api_key=${nasaApiKey}&per_page=6`;

    // fetch(apiUrl)
    // .then(response => response.json())
    // .then(data => {
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
              <button className={`btn btn-primary`} onClick={handleSpiritClick}>
                Spirit
              </button>
              <button className={`btn btn-primary`} onClick={handleOpportunityClick}>
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
            <div id="buttons" className="d-flex flex-wrap justify-content-center align-items-center">
              <button className="btn btn-primary" onClick={apiSearch}>
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

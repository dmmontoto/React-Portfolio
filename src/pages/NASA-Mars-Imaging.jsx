import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Imaging() {
  return (
    <main className="mars-background" id="nasa-api">

      <div id="nasaLogo">
        <img id="nasa-img" src="assets/NASA.png" />
      </div>

      <section className="nasa-container justify-content-center align-items-center">
        <div id="search" className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="buttons d-flex justify-content-center flex-lg-row flex-column">
              <button id="curiosity" className="btn btn-primary">
                Curiosity
              </button>
              <button id="spirit" className="btn btn-primary">
                Spirit
              </button>
              <button id="opportunity" className="btn btn-primary">
                Opportunity
              </button>
            </div>
            <h2 id="search-title" className="text-center">
              Search Images
            </h2>
            <p id="search-description" className="text-center">
              Please select a rover
            </p>
            <div
              id="selectors"
              className="d-flex flex-wrap justify-content-center align-items-center"
            >
              <input
                type="date"
                id="date-pattern"
                className="form-control me-2 mb-2"
              />
              <input
                id="rover-camera-input"
                list="cameras"
                className="form-control mb-2"
                type="text"
                placeholder="Rover Cameras"
              />
              <datalist id="cameras">
                <option value="Front Hazard Avoidance Camera"></option>
                <option value="Rear Hazard Avoidance Camera"></option>
                <option value="Mast Camera"></option>
                <option value="Chemistry and Camera Complex"></option>
                <option value="Mars Hand Lens Imager"></option>
                <option value="Mars Descent Imager"></option>
                <option value="Navigation Camera"></option>
                <option value="Panoramic Camera"></option>
                <option value="Miniature Thermal Emission Spectrometer"></option>
              </datalist>
            </div>
            <h3 id="search-alert"></h3>
            <div
              id="selectors"
              className="d-flex flex-wrap justify-content-center align-items-center"
            >
              <button id="search-btn" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="response">
        <h2 id="response-title"></h2>
        <div className="row">
          <div className="col-lg-6">
            <div id="rover-details">
              <p id="rover-description"></p>
              <iframe
                id="youtube-iframe"
                width="100%"
                height="315"
                src=""
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              id="slideshow"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div id="slideshow-inner" className="carousel-inner"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

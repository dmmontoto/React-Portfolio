import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Raspberry() {
    return (
      <main id="nasa-api">

        <div id="bhaLogo">
          <img id="bha-img" src="assets/images/BHA.png" />
        </div>

        <section className="container" id="raspberry">
          <div id="glass-card" className="row justify-content-center align-items-center">
            <div>
              <div className="buttons d-flex justify-content-center align-items-center flex-column">
                <h1>5g Raspberry Pi Live Stream</h1>
                <h2>Project for Beverly Hills Aerials and T-Mobile</h2>
              </div>
              <div id="raspberry-images">
                <img src="./assets/images/raspberry1.jpeg" alt="Raspberry Pi Image" />
                <img src="./assets/images/raspberry2.jpeg" alt="Raspberry Pi Livestream" />
              </div>
              <div id="raspberry-bullets">
                <ul>
                  <li>Programmed a Raspberry Pi 3 Model B+ with camera for live-streaming sporting events</li>
                  <li>Utilized libcamera to meet contractor's specifications</li>
                  <li>Configured GStreamer and remote access to allow live-streaming capabilities while raspberry pi is on custom build drone</li>
                  <li>Integrated 5g Quanta Chip for long range live streaming</li>
                </ul>
              </div>
            </div>
          </div>  
        </section>
      </main>
    );
  }
  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

export default function Raspberry() {
    return (
      <main>

        <div id="bhaLogo">
          <img id="bha-img" src="assets/BHA.png" />
        </div>

        <section id="raspberry-container">
          <div id="glass-card" className="row justify-content-center align-items-center">
            <div>
              <div className="buttons d-flex justify-content-center align-items-center flex-column">
                <h1>5g Raspberry Pi Live Stream</h1>
                <h2>
                Project for{' '}
                <Link id="bha-link" to="https://www.beverlyhillsaerials.com/" style={{
                    textDecoration: 'underline',
                    color: 'inherit',
                    transition: 'color 0.3s, text-shadow 0.3s',
                    // Adding a glow effect on hover
                    ':hover': {
                      color: '#fff', // Change this to your desired hover color
                      textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff', // Adjust the glow effect
                    },
                  }}>
                  Beverly Hills Aerials
                </Link>{' '}
                and T-Mobile
              </h2>
              </div>
              <div id="raspberry-images">
                <img src="./assets/raspberry1.jpeg" alt="Raspberry Pi Image" />
                <img src="./assets/raspberry2.jpeg" alt="Raspberry Pi Livestream" /> 
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
  
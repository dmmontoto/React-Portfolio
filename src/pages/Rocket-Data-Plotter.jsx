import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Plotter() {
    return (
      <main>
        <section id="plotter-container">
          <div id="glass-card" className="row justify-content-center align-items-center">
            <div>
              <div className="buttons d-flex justify-content-center align-items-center flex-column">
                <h1>Python Rocket Data Plotter</h1>
              </div>
              <div id="plotter-images">
                <img src="./assets/Hot-fire.png" alt="Hot Fire Rocket" />
                <img src="./assets/Cold-flow.png" alt="Cold Flow" /> 
              </div>
              <div id="plotter-bullets">
                <ul>
                <li>Created interactive data visualizations using Python libraries such as Matplotlib and Pandas, allowing users to explore rocket telemetry data dynamically and gain valuable insights</li>
                <li>Implemented rigorous data validation and cleaning processes to ensure the accuracy and reliability of the telemetry data, resulting in more dependable visualizations and analyses</li>
                <li>Designed and optimized the Python script to efficiently handle and process large CSV files, enabling swift data analysis and visualization for a wide range of rocket telemetry datasets</li>
                <li>Prepared clear and user-friendly documentation, including instructions for script usage, making it easy for team members and collaborators to understand and utilize the project effectively</li>
                </ul>
              </div>
            </div>
          </div>  
        </section>
      </main>
    );
  }
  
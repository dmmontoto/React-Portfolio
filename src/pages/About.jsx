import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function About() {
  useEffect(() => {
    function stars() {
      let count = 50;
      let scene = document.querySelector('.rocket-scene');
      let i = 0;
      while (i < count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star);
        i++;
      }
    }

    // Call the stars function when the component mounts
    stars();
  }, []);
  return (
    <div>
      <section className="about-me">
        <h1 data-text="About Me">About Me</h1>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="rocket-scene">
              <div className="rocket">
                <img className="rocket-img" src="src/images/rocket.png"/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass-container">
              <div className="glass-card">
                <div className="glass-content">
                  <h2>Where I am From</h2>
                  <p>Having grown up in the vibrant city of Pasadena, adjacent to the Jet Propulsion Laboratory, my curiosity for
                    science and mathematics was kindled at an early age. With my mother working at JPL, I was privileged to peek
                    into the heart of exploration, visiting the very grounds that sparked curiosity about the cosmos.
                    Fueled by an unwavering affinity for mathematics, I have embarked on a transformative journey that now finds me
                    weaving together my passion for technology and innovation. As I traverse the realm of software engineering, my
                    roots in mathematics remain a guiding light, driving me to master web projects, advanced data structures, and
                    backend development, creating solutions that resonate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="glass-container">
              <div className="glass-card">
                <div className="glass-content">
                  <h2>Passion for Software Engineering</h2>
                  <p>During my freshman year, I had the opportunity to take a Python coding course, which sparked my new-found love for coding.
                    At the start of my sophomore year, I made the pivotal decision to switch my focus from raw Applied Mathematics to Computer Science and Mathematics. 
                    The parallel between the logical constructs of mathematics and coding resonated with me deeply, and I embraced the challenge of conquering new frontiers
                     in this ever-evolving landscape. Today, I live and breathe coding, embracing the endless learning opportunities it presents.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  d-flex justify-content-center align-items-center">
            <div className="clock-background" id="clock-background">
              <div className="clock">

                <div className="circle" id="sc" style={{ '--clr': '#c11515' }}><i></i></div>
                <div className="circle circle2" id="mn" style={{ '--clr': '#175b93' }}><i></i></div>
                <div className="circle circle3" id="hr" style={{ '--clr': '#000000' }}><i></i></div>

                <span style={{ '--i': 1 }}><b>1</b></span>
                <span style={{ '--i': 2 }}><b>2</b></span>
                <span style={{ '--i': 3 }}><b>3</b></span>
                <span style={{ '--i': 4 }}><b>4</b></span>
                <span style={{ '--i': 5 }}><b>5</b></span>
                <span style={{ '--i': 6 }}><b>6</b></span>
                <span style={{ '--i': 7 }}><b>7</b></span>
                <span style={{ '--i': 8 }}><b>8</b></span>
                <span style={{ '--i': 9 }}><b>9</b></span>
                <span style={{ '--i': 10 }}><b>10</b></span>
                <span style={{ '--i': 11 }}><b>11</b></span>
                <span style={{ '--i': 12 }}><b>12</b></span>
              </div>

              <div id="time">
                <div id="hour" style={{ '--clr': '#000000' }}>00</div>
                <div id="minutes" style={{ '--clr': '#175b93' }}>00</div>
                <div id="seconds" style={{ '--clr': '#c11515' }}>00</div>
                <div id="ampm">AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

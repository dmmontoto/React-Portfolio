import { useEffect } from 'react';

import TiltCard from '../components/Tilt';  

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function About() {
  // Stars method
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

  // Clock method
  useEffect(() => {
    function clock() {
      let hr = document.querySelector('#hr');
      let mn = document.querySelector('#mn');
      let sc = document.querySelector('#sc');

      const updateClock = () => {
        let day = new Date();
        let hour = day.getHours() * 30;
        let minute = day.getMinutes() * 6;
        let second = day.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hour + (minute / 12)}deg)`;
        mn.style.transform = `rotateZ(${minute}deg)`;
        sc.style.transform = `rotateZ(${second}deg)`;

        let hours = document.getElementById('hour');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let ampm = document.getElementById('ampm');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        let am = h >= 12 ? 'PM' : 'AM';

        if (h > 12) {
          h = h - 12;
        }

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        if (hours && minutes && seconds && ampm) {
          hours.innerHTML = h;
          minutes.innerHTML = m;
          seconds.innerHTML = s;
          ampm.innerHTML = am;
        }
      };

      updateClock(); // Initial update

      const intervalId = setInterval(updateClock, 1000);

      return () => clearInterval(intervalId);
    }

    const intervalId = clock();

    return () => clearInterval(intervalId);
  }, []);


  // Cloud method
  useEffect(() => {
    function rain() {
      let cloud = document.querySelector('.cloud');
      let e = document.createElement('div');
      let left = Math.floor(Math.random() * 310);
      let width = Math.random() * 5;
      let height = Math.random() * 50;
      let duration = Math.random() * 0.5;
  
      e.classList.add('drop');
      cloud.appendChild(e);
      e.style.left = left + 'px';
      e.style.width = 0.5 + width + 'px';
      e.style.height = 0.5 + height + 'px';
      e.style.animationDuration = 1 + duration + 's';

      setTimeout(function(){
        cloud.removeChild(e)
      },2000)
    }

    const intervalId = setInterval(rain, 20);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="rocket-scene">
              <div className="rocket">
                <img className="rocket-img" src="./assets/rocket.png"/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass-container">
              <TiltCard options={{ "glare-prerender": false }}>
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
              </TiltCard>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="glass-container">
            <TiltCard options={{ "glare-prerender": false }}>
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
              </TiltCard>
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

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="cloud-space">
              <div className="cloud">
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass-container">
            <TiltCard options={{ "glare-prerender": false }}>
              <div className="glass-card">
                <div className="glass-content">
                  <h2>A Pathway to Impact</h2>
                  <p>Over the past year, I have relentlessly pursued knowledge and skill enhancement, diving deep into software engineering. I have explored data structures, version control, 
                    server architecture, and web development. My toolkit includes languages like Javascript, C++, Java, C, Python, ARM Assembly, R, and MATLAB, each providing a unique lens 
                    for tackling challenges. With frameworks like Node.js, Express.js, and React.js, I have built proficiency in the MERN stack. Tools like Sequelize, Git, and Visual Studio Code 
                    enable collaborative project development. I have mastered HTML, CSS, Bootstrap, JavaScript, DOM manipulation, APIs, JQuery, JSON, and AJAX, creating engaging user experiences. 
                    This journey is perpetual, presenting daily opportunities to learn and innovate. My commitment goes beyond mastery—it is about using these skills to create impactful change in 
                    the real world, a promise I am dedicated to fulfilling.
                  </p>
                </div>
              </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
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
                <img className="rocket-img" src="assets/images/rocket.png"/>
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

                <div className="circle" id="sc" style="--clr: #c11515;"><i></i></div>
                <div className="circle circle2" id="mn" style="--clr: #175b93;"><i></i></div>
                <div className="circle circle3" id="hr" style="--clr: #000000;"><i></i></div>

                <span style="--i:1;"><b>1</b></span>
                <span style="--i:2;"><b>2</b></span>
                <span style="--i:3;"><b>3</b></span>
                <span style="--i:4;"><b>4</b></span>
                <span style="--i:5;"><b>5</b></span>
                <span style="--i:6;"><b>6</b></span>
                <span style="--i:7;"><b>7</b></span>
                <span style="--i:8;"><b>8</b></span>
                <span style="--i:9;"><b>9</b></span>
                <span style="--i:10;"><b>10</b></span>
                <span style="--i:11;"><b>11</b></span>
                <span style="--i:12;"><b>12</b></span>
              </div>

              <div id="time">
                <div id="hour" style="--clr: #000000;">00</div>
                <div id="minutes" style="--clr: #175b93;">00</div>
                <div id="seconds" style="--clr: #c11515;">00</div>
                <div id="ampm">AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <div className="glass-container">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

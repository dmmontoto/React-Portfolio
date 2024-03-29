import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Projects() {
  const [isWebsiteHovered, setIsWebsiteHovered] = useState(false);
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);

  const handleWebsiteHover = () => {
    setIsWebsiteHovered(true);
  };

  const handleWebsiteLeave = () => {
    setIsWebsiteHovered(false);
  };

  const handleGitHubHover = () => {
    setIsGitHubHovered(true);
  };

  const handleGitHubLeave = () => {
    setIsGitHubHovered(false);
  };

  const contactSectionStyle = {
    animationName: 'slideInDown',
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in',
    animationDelay: '1.2s',
    animationIterationCount: '1',
    animationDirection: 'normal',
    animationFillMode: 'backwards',
    marginBottom: '50px',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '50px',
    height: '50px',
    marginRight: '20px',
    transition: 'transform 0.3s ease-in-out, filter 0.3s ease', 
    color: 'var(--main-blue)',
  };

  const imageHoverStyle = {
    filter: 'brightness(1.5)',
    transform: 'translateY(-10px)',
  };

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card'>
                <div className='imgBx'>
                  <img src='./assets/EazyExplorer.png'></img>
                </div>
                <div className='Project-Content'>
                  <h2>Eazy Explorer</h2>
                  <h3>Social Media</h3>
                  <h5>Javascript, Node.js, Express.js, SQL, OpenAI API, Heroku, Github</h5>
                  <ul id="bullets">
                    <li>Spearheaded a collaborative effort with a team of three to develop an account-based social media platform, leveraging Artificial Intelligence to provide users with personalized vacation activity suggestions</li>
                    <li>Implemented a SQL database and followed a Module-View-Controller architectural approach, enabling users to share their travel experiences and plans while fostering engagement through interactive comments</li>
                    <li>Utilized an account-based system that enables users to engage in discussions by posting and deleting their plans or providing feedback and comments on the vacation plans shared within the community</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://eazy-explorer-8c2ae355679a.herokuapp.com/" target="_blank" rel="noreferrer" onMouseEnter={handleWebsiteHover} onMouseLeave={handleWebsiteLeave}>
                      <img src="./assets/WebsiteImage.png" alt="Website" style={{
                      ...imageStyle,
                      ...(isWebsiteHovered && imageHoverStyle),
                      }}/>
                    </a>
                    <a href="https://github.com/dmmontoto/Eazy-Explorer" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="./assets/GitLogo.png" alt="GitHub" style={{
                    ...imageStyle,
                    ...(isGitHubHovered && imageHoverStyle),
                    }}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card'>
                <div className='imgBx'>
                  <img src='./assets/TrackedFitness.png'></img>
                </div>
                <div className='Project-Content'>
                  <h2>Tracked Fitness</h2>
                  <h3>Account-Based Fitness Tracker</h3>
                  <h5>Javascript, React.js, Node.js, Express.js, MongoDB, GraphQL, Quote API, Heroku, Github</h5>
                  <ul id="bullets">
                    <li>Collaborated with a team of three where I took lead in design and development of the backend infrastructure by leveraging MongoDB, Express.js, and Node.js to ensure seamless integration between frontend and backend</li>
                    <li>Showcased problem-solving by addressing real-world challenges in the fitness domain, implementing GraphQL to enhance data handling efficiently and stay at the forefront of evolving technologies</li>
                    <li>Contributed to an improved user experience by implementing responsive design principles, ensuring the seamless interaction of the MERN stack single-page application across various devices</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://tracked-fitness-49c50811533c.herokuapp.com/" target="_blank" rel="noreferrer" onMouseEnter={handleWebsiteHover} onMouseLeave={handleWebsiteLeave}>
                      <img src="./assets/WebsiteImage.png" alt="Website" style={{
                      ...imageStyle,
                      ...(isWebsiteHovered && imageHoverStyle),
                      }}/>
                    </a>
                    <a href="https://github.com/iqwixn/tracked-fitness" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="./assets/GitLogo.png" alt="GitHub" style={{
                    ...imageStyle,
                    ...(isGitHubHovered && imageHoverStyle),
                    }}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'>
                <img src='./assets/CPP.png'></img>
                </div>
                <div className='Project-Content'>
                <h2>Epidemiological Graph Analysis</h2>
                  <h3>C++ API Implementation</h3>
                  <h5>C++</h5>
                  <ul id="bullets">
                    <li>Developed a C++ implementation of an undirected graph for analysis, specifically tailored for HIV and COVID-19, utilizing graph theory to perform transmission clustering, where viral sequence data is analyzed</li>
                    <li>Designed and implemented a comprehensive API for a graph class, allowing representation and manipulation, including functions for basic graph properties, shortest path calculations, and connected components identification</li>
                    <li>Implemented advanced algorithms such as Breadth-First Search, Dijkstra’s Algorithm, and efficient threshold determination for virus transmission analysis</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://github.com/dmmontoto/Epidemiological-Graph-Analysis" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="./assets/GitLogo.png" alt="GitHub" style={{
                    ...imageStyle,
                    ...(isGitHubHovered && imageHoverStyle),
                    }}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className="imgBx">
                  <img src='./assets/BookFinder.png'></img>
                </div>
                <div className='Project-Content'>
                <h2>Book Search Engine</h2>
                  <h3>Account-Based Book Finder</h3>
                  <h5>Javascript, React.js, Node.js, Express.js, MongoDB, GraphQL, JSON, Google API, Heroku, Github</h5>
                  <ul id="bullets">
                    <li>Successfully modified authentication middleware to seamlessly integrate with the GraphQL API while implementing an Apollo Provider for effective communication with the Apollo Server</li>
                    <li>Utilized React for the frontend, delivering an intuitive and user-friendly interface that aligns with user expectations, implementing dynamic menu changes based on user authentication status</li>
                    <li>Demonstrated a commitment to continuous improvement by adhering to best practices, adopting GraphQL for enhanced data querying, and ensuring a user-centric approach throughout the development process</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://online-book-search-7ae70d0dd885.herokuapp.com/" target="_blank" rel="noreferrer" onMouseEnter={handleWebsiteHover} onMouseLeave={handleWebsiteLeave}>
                      <img src="./assets/WebsiteImage.png" alt="Website" style={{
                      ...imageStyle,
                      ...(isWebsiteHovered && imageHoverStyle),
                      }}/>
                    </a>
                    <a href="https://github.com/dmmontoto/Book-Search-Engine" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="./assets/GitLogo.png" alt="GitHub" style={{
                    ...imageStyle,
                    ...(isGitHubHovered && imageHoverStyle),
                    }}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className="imgBx">
                  <img src='./assets/CPP.png'></img>
                </div>
                <div className='Project-Content'>
                <h2>Huffman File Compressor</h2>
                  <h3>C++ File Compressor</h3>
                  <h5>C++</h5>
                  <ul id="bullets">
                    <li>Developed C++ programs, compress and uncompress, for efficient file compression and decompression using the Huffman algorithm</li>
                    <li>Employed priority queues in C++ for efficiently selecting symbols with lower frequencies while implementing a Huffman Coding Tree (HCTree) facilitate the compression and uncompression processes</li>
                    <li>Utilized a suggested control flow for both compression and uncompression, parsing command line arguments, performing file I/O operations, and ensuring the ability to compile and run the programs as specified</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://github.com/dmmontoto/File-Compressor" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="./assets/GitLogo.png" alt="GitHub" style={{
                    ...imageStyle,
                    ...(isGitHubHovered && imageHoverStyle),
                    }}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'>
                <img src='./assets/TechBlog.png'></img>
                </div>
                <div className='Project-Content'>
                <h2>Technology Blog</h2>
                  <h3>Account-Based Blog Site</h3>
                  <h5>Javascript, Node.js, Express.js, JSON, SQL, Heroku, Github</h5>
                  <ul id="bullets">
                    <li>Developed a dynamic tech blog platform with user accounts, blog post creation, and interactive commenting features</li>
                    <li>Designed a responsive web interface using HTML, CSS, and JavaScript, ensuring a seamless user experience</li>
                    <li>Established a secure SQL database for efficient account management and post storage, prioritizing data accessibility and user control</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://account-based-tech-blog-30c1584537a5.herokuapp.com" target="_blank" rel="noreferrer" onMouseEnter={handleWebsiteHover} onMouseLeave={handleWebsiteLeave}>
                      <img src="./assets/WebsiteImage.png" alt="Website" style={{
                      ...imageStyle,
                      ...(isWebsiteHovered && imageHoverStyle),
                      }}/>
                    </a>
                    <a href="https://github.com/dmmontoto/Account-Based-Tech-Blog" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="./assets/GitLogo.png" alt="GitHub" style={{
                    ...imageStyle,
                    ...(isGitHubHovered && imageHoverStyle),
                    }}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
          <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card Bottom-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'>
                <img src='./assets/GP1slidePreview.gif'></img>
                </div>
                <div className='Project-Content'>
                <h2>Movie Munchies</h2>
                  <h3>Web API Application</h3>
                  <h5>Javascript, Movie API, Recipe API, JSON, Github</h5>
                  <ul id="bullets">
                    <li>Collaborated with classmates Marissa and Huaquin to devise an innovative method for pairing movies and recipes to enhance the overall entertainment experience</li>
                    <li>Demonstrated proficiency in integrating two distinct APIs, one for movie searching and another for recipe retrieval, ensuring seamless data integration and retrieval</li>
                    <li>Assumed a leadership role in spearheading the development of the JavaScript framework, overseeing its architecture and implementation to ensure a robust and efficient solution</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://marissacraig.github.io/MovieMunchies/index.html" target="_blank" rel="noreferrer" onMouseEnter={handleWebsiteHover} onMouseLeave={handleWebsiteLeave}>
                      <img src="./assets/WebsiteImage.png" alt="Website" style={{
                      ...imageStyle,
                      ...(isWebsiteHovered && imageHoverStyle),
                      }}/>
                    </a>
                    <a href="https://github.com/marissacraig/MovieMunchies" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="./assets/GitLogo.png" alt="GitHub" style={{
                    ...imageStyle,
                    ...(isGitHubHovered && imageHoverStyle),
                    }}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card Bottom-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'>
                <img src='/src/images/GP1slidePreview.gif'></img>
                </div>
                <div className='Project-Content'>
                <h2>Movie Munchies</h2>
                  <h3>Web API Application</h3>
                  <h5>Javascript, Movie API, Recipe API, JSON, Github</h5>
                  <ul id="bullets">
                    <li>Collaborated with classmates Marissa and Huaquin to devise an innovative method for pairing movies and recipes to enhance the overall entertainment experience</li>
                    <li>Demonstrated proficiency in integrating two distinct APIs, one for movie searching and another for recipe retrieval, ensuring seamless data integration and retrieval</li>
                    <li>Assumed a leadership role in spearheading the development of the JavaScript framework, overseeing its architecture and implementation to ensure a robust and efficient solution</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://marissacraig.github.io/MovieMunchies/index.html" target="_blank" rel="noreferrer" onMouseEnter={handleWebsiteHover} onMouseLeave={handleWebsiteLeave}>
                      <img src="/src/images/WebsiteImage.png" alt="Website" style={{
                      ...imageStyle,
                      ...(isWebsiteHovered && imageHoverStyle),
                      }}/>
                    </a>
                    <a href="https://github.com/marissacraig/MovieMunchies" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="/src/images/GitLogo.png" alt="GitHub" style={{
                    ...imageStyle,
                    ...(isGitHubHovered && imageHoverStyle),
                    }}/>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
  
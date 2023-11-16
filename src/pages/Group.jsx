import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Group() {
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

                </div>
                <div className='Project-Content'>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card'>
                <div className='imgBx'>
                  <img src='/src/images/EazyExplorer.png'></img>
                </div>
                <div className='Project-Content'>
                  <h2>Eazy Explorer</h2>
                  <h3>Social Media</h3>
                  <h5>Javascript, Node.js, Express.js, SQL, OpenAI API, Heroku, Github</h5>
                  <ul id="bullets">
                    <li>Spearheaded a collaborative effort with a team of three to develop an account-based social media platform, leveraging Artificial Intelligence to provide users with personalized vacation activity suggestions</li>
                    <li>Implemented a SQL database and followed a Module-View-Controller architectural approach, enabling users to share their travel experiences and plans while fostering engagement through interactive comments</li>
                    <li>Utilized an account-based system that enables users to engage in discussions by posting and deleting their plans or providing feedback and comments on the vacation plans shared within the community.</li>
                  </ul>
                  <div style={contactSectionStyle}>
                    <a href="https://eazy-explorer-8c2ae355679a.herokuapp.com/" target="_blank" rel="noreferrer" onMouseEnter={handleWebsiteHover} onMouseLeave={handleWebsiteLeave}>
                      <img src="/src/images/WebsiteImage.png" alt="Website" style={{
                      ...imageStyle,
                      ...(isWebsiteHovered && imageHoverStyle),
                      }}/>
                    </a>
                    <a href="https://github.com/dmmontoto/Eazy-Explorer" target="_blank" rel="noreferrer" onMouseEnter={handleGitHubHover} onMouseLeave={handleGitHubLeave}>
                    <img src="/src/images/GitLogo.png" alt="GitHub" style={{
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
                <div className="imgBx"></div>
                <div className='Project-Content'></div>
              </div>
            </div>
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card Bottom-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'></div>
                <div className='Project-Content'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
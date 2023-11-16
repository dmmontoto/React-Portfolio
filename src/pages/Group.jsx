import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Group() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'></div>
                <div className='Project-Content'></div>
              </div>
            </div>
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card' style={{ '--clr': '#ff3e7f' }}>
                <div className='imgBx'>
                  <img src='/src/images/EazyExplorer.png'></img>
                </div>
                <div className='Project-Content'>
                  <h2>Eazy Explorer</h2>
                  <p>this is a test to see how the text looks inside of the project contect portion of project page</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className="imgBx"></div>
                <div className='Project-Content'></div>
              </div>
            </div>
            <div className="col-md-6" id='Project-Container'>
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'></div>
                <div className='Project-Content'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
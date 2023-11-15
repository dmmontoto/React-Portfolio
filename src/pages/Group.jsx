import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Group() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'></div>
                <div className='Project-Content'></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className='Project-Card' style={{ '--clr': '#ff3e7f' }}>
                <div className='imgBx'></div>
                <div className='Project-Content'></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className='Project-Card' style={{ '--clr': '#009688' }}>
                <div className='imgBx'></div>
                <div className='Project-Content'></div>
              </div>
            </div>
            <div className="col-md-6">
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
  
import React from 'react';
import './SuccessPage.scss';
import env from 'env';

class SuccessPage extends React.Component {
  render() {
    return (
      <div className="success-page">
        <div className="text-content">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-sm-8">
                <p>
                  <h2>Thank you for queueing up!</h2>
                  <h5>A confirmation text has been sent to your phone number and your table will be ready shortly</h5>

                </p>
              </div>

              <div className="col-sm-3">
                <img src={`${env.IMG_ENDPOINT}/plane.png`}/>
              </div>
            </div>
          </div>
        </div>
        <a href="/" className="btn btn-theme">Return Home</a>
      </div>
    )
  }
}

export default SuccessPage;
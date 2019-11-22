import React, { Component } from 'react';

class ForgotPassword extends Component {
  render() {
    return (
        <div className="ForgotPassword">

         <section className="min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center mb-md-6">
          <div className="col-auto">
            <a href="index.html">
              <img src="pages/assets/img/veterans-incorporated-bck-01.png" alt="Veterans Incorporated"/>
            </a>
          </div>
        </div>
        <div className="row justify-content-center pt-6">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="text-center mb-4">
              <h1 className="mb-1">Forgot Password</h1>
              <span>Enter your details to recieve a reset link</span>
            </div>
            <form>
              <div className="form-group">
                <input type="email" name="forgot-password-email" placeholder="Email Address" className="form-control"/>
              </div>
              <div className="form-group">
                <button className="btn-block btn btn-primary" type="submit">Send Reset Link</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>




        </div>
    );
  }
}

export default ForgotPassword;
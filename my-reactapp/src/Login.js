import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
       <div className="Login">
          <section className="min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center mb-md-6">
          <div className="col-auto">
            <a href="/">
              <img src="pages/assets/img/veterans-incorporated-bck-01.png" alt="Veterans Incorporated"/>
            </a>
          </div>
        </div>
        <div className="row justify-content-center pt-6">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="text-center mb-4">
              <h1 className="mb-1">Welcome back</h1>
              <span>Enter your account details below</span>
            </div>
            <form>
              <div className="form-group">
                <input type="email" name="login-email" placeholder="Email Address" className="form-control"/>
              </div>
              <div className="form-group">
                <input type="password" name="login-password" placeholder="Password" className="form-control"/>
                <small><a href="/ForgotPassword">Forgot your password?</a>
                </small>
              </div>
              <div className="form-group">
                <button className="btn-block btn btn-primary" type="submit">Sign in</button>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="login-remember"/>
                <label className="custom-control-label text-small text-muted" for="login-remember">Keep me signed in</label>
              </div>
              <hr/>
              <div className="text-center text-small text-muted">
                <span>Don't have an account yet? <a href="/Donate">Donate Now</a>
                </span>
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

export default Login;
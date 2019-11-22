import React, { Component } from 'react';

class ComingSoon extends Component {
  render() {
    return (
         <div className="ComingSoon">

          <section className="min-vh-100 bg-primary-3 py-5 o-hidden">
      <div className="container position-relative layer-2">
        <div className="row justify-content-center mb-md-6">
          <div className="col-auto">
            <a href="/">
              <img src="pages/assets/img/veterans-incorporated-wh-01.png" alt="Veterans Incorporated"/>
            </a>
          </div>
        </div>
        <div className="row justify-content-center py-6 text-light">
          <div className="col text-center">
            <h1 className="display-3">Launching Soon</h1>
            <div className="lead">Hold tight, we're still preparing for our page launch. Stay tuned.</div>
          </div>
        </div>



        <div className="row">
          <div className="col-12" data-countdown-date="2019/12/10" data-detailed>
            <div data-active className="row text-center">
              <div className="col-md">
                <div className="card card-body" data-aos="fade-up" data-aos-delay="100">
                  <span className="h1 text-primary mb-2" data-weeks data-format="%w"></span>
                  <span className="h6 mb-0" data-weeks-label></span>
                </div>
              </div>

              <div className="col-md">
                <div className="card card-body" data-aos="fade-up" data-aos-delay="200">
                  <span className="h1 text-primary mb-2" data-days data-format="%d"></span>
                  <span className="h6 mb-0" data-days-label></span>
                </div>
              </div>

              <div className="col-md">
                <div className="card card-body" data-aos="fade-up" data-aos-delay="300">
                  <span className="h1 text-primary mb-2" data-hours></span>
                  <span className="h6 mb-0" data-hours-label></span>
                </div>
              </div>

              <div className="col-md">
                <div className="card card-body" data-aos="fade-up" data-aos-delay="400">
                  <span className="h1 text-primary mb-2" data-minutes></span>
                  <span className="h6 mb-0" data-minutes-label></span>
                </div>
              </div>

              <div className="col-md">
                <div className="card card-body" data-aos="fade-up" data-aos-delay="500">
                  <span className="h1 text-primary mb-2" data-seconds></span>
                  <span className="h6 mb-0" data-seconds-label></span>
                </div>
              </div>
            </div>
            <div data-elapsed style={{display: 'none'}}>
              <h4>This is the fallback for when the countdown is elapsed</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration-wrapper d-none d-sm-block">
        <div className="decoration bottom middle-y scale-5">
          <img className="bg-primary" src="assets/img/decorations/deco-blob-9.svg" alt="deco-blob-9 decoration" data-inject-svg />
        </div>
        <div className="decoration bottom right scale-5">
          <img className="bg-primary-2" src="assets/img/decorations/deco-dots-4.svg" alt="deco-dots-4 decoration" data-inject-svg />
        </div>
      </div>
    </section>








         </div>
    );
  }
}

export default ComingSoon;
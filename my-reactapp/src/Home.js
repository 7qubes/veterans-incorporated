import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Donate from './Donate';
import Policy from './Policy';
import ComingSoon from './ComingSoon';
import VeteransPackage from './VeteransPackage';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import VeteranAds from './VeteranAds';


class Home extends React.Component {
  render (){
    return (

      <div className="Home">

          <div className="navbar-container bg-primary-3">
      <nav className="navbar navbar-expand-lg justify-content-between navbar-dark border-bottom-0 bg-primary-3" data-sticky="top">
        <div className="container">

          <div className="col flex-fill px-0 d-flex justify-content-between">
            <a className="navbar-brand mr-0 fade-page" href="index.html">
              <img src="pages/assets/img/veterans-incorporated-in-01.png" alt="Veterans Incorporated Initiative"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <img className="icon navbar-toggler-open" src="pages/assets/img/icons/interface/menu.svg" alt="menu interface icon" data-inject-svg />
              <img className="icon navbar-toggler-close" src="pages/assets/img/icons/interface/cross.svg" alt="cross interface icon" data-inject-svg />
            </button>
          </div>

          <div className="collapse navbar-collapse col px-0 px-lg-2 flex-fill">
            <div className="py-2 py-lg-0">
              <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">Login</a>
                  <div className="dropdown-menu row">
                    <div className="col-auto px-0" data-dropdown-content>
                      <div className="bg-white rounded border shadow-lg o-hidden">
                        <div className="p-3">
                          <h6 className="mb-0">Login</h6>
                        </div>
                        <div className="list-group list-group-flush">
                          
                          <a href="/Login" target="_blank" className="list-group-item list-group-item-action d-flex align-items-center p-3">
                            <img className="icon icon-md" src="pages/assets/img/icons/theme/communication/chat-4.svg" alt="chat-4 icon" data-inject-svg />
                            <div className="text-body ml-3">
                              <span>Login</span>
                              <div className="text-small text-muted">Returning Users</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                
             
           
     
              </ul>
            </div>
          </div>

          <div className="collapse navbar-collapse justify-content-end col flex-fill px-0">


          <a href="/Donate" className="btn btn-primary ml-lg-3">Donate Now</a>


          </div>

          </div>
    
      </nav>
    </div>

  {/* @@@@@@@@@@@@ help discharged veterans starts here*/}

      <section className="bg-primary-3 o-hidden">
      <div className="container layer-1">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5 col-md-6 text-light text-left">
            <div className="d-flex mb-4">
              <span className="badge badge-primary mr-2">News</span>
              <a href="https://www.cnn.com/2013/11/05/us/iyw-simple-ways-to-honor-veterans/index.html" className="text-small hover-arrow" target="_blank">9 Simple Ways You can Help Veterans</a>
            </div>
            <h1 className="display-4">Help Discharged Veterans find employment.</h1>
            <p className="lead">Veterans Incorporated is a vehicle to assist veterans and their family members enter into meaningful employment by helping them to either operate their own business or work for a fellow veteran.</p>
          </div>
          <div className="col-xl-5 col-md-6">
            <div className="text-center text-light">
              <div className="mb-4">
                <span className="h1">Live Donations</span>
              </div>
              <div>
                <span className="h3" data-countup data-start="1" data-end="5000" data-duration="3" data-grouping="true" data-prefix="$USD "></span>
                <div className="progress my-3">
                  <div className="progress-bar" role="progressbar" style={{width: '1%'}} aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <span className="text-small">Total campaigning amount USD $500,000</span>
              </div>
            </div>
            <div className="card card-body mt-4 shadow-lg">
              <div className="row">
                <div className="col-12 mb-4" data-countdown-date="2019/06/06" data-detailed>
                  <div data-active className="row text-center">
                    <div className="col">
                      <span className="h1 text-primary mb-2" data-days data-format="%D"></span>
                      <span className="h6 mb-0" data-days-label></span>
                    </div>

                    <div className="col">
                      <span className="h1 text-primary mb-2" data-hours></span>
                      <span className="h6 mb-0" data-hours-label></span>
                    </div>

                    <div className="col">
                      <span className="h1 text-primary mb-2" data-minutes></span>
                      <span className="h6 mb-0" data-minutes-label></span>
                    </div>

                    <div className="col">
                      <span className="h1 text-primary mb-2" data-seconds></span>
                      <span className="h6 mb-0" data-seconds-label></span>
                    </div>
                  </div>
                  <div data-elapsed style={{display: 'none'}}>
                    <h1>This is the fallback for when the countdown is elapsed</h1>
                  </div>
                </div>
              </div>
              <a href= "/Donate"  className="btn btn-lg btn-primary">Donate</a>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration-wrapper d-none d-md-block">
        <div className="decoration top right scale-4">
          <img className="bg-primary-2" src="pages/assets/img/decorations/deco-blob-2.svg" alt="deco-blob-2 decoration" data-inject-svg />
        </div>
      </div>
    </section>

{/* @@@@@@@@@@@@bring them home section starts here*/}

      <section className="bg-primary-3 pt-0 text-light">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="video-poster rounded layer-2" data-aos="fade-right">
              <a data-fancybox href="https://www.youtube.com/watch?v=gM8ryczLWGw" target="_blank"className="btn btn-lg btn-primary btn-round">
                <img className="icon" src="pages/assets/img/icons/theme/media/play.svg" alt="play icon" data-inject-svg />
              </a>
              <img src="pages/assets/img/troops-01.png" alt="Image"/>
            </div>
            <div className="decoration top left scale-2" data-aos="fade-up">
              <img className="bg-primary-2" src="pages/assets/img/decorations/deco-lines-3.svg" alt="deco-lines-3 decoration" data-inject-svg />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 text-left" data-aos="fade" >
            <h2 className="h1">Bring them Home.</h2>
            <p className="lead">
              Veterans Incorporated will assist in business planning, development, finance, office management, marketing and equipment purchase. Helping to refer other Veteran Incorporated Divisions to assist their residential accounts Divisions will assist each other in serving the community. By implementing here in civilian life the same team concept that worked in the military Veterans Incorporated Divisions work to assure overall success.
            </p>
            <p className="lead">We know that if we help them they will return the favor.</p>
          </div>
        </div>
      </div>
    </section>

  {/* @@@@@@@@@@@@ what makes US different? starts here*/}

    <section className="bg-primary-3 pt-0 has-divider">
      <div className="container">
        <div className="row mb-4 text-light text-left">
          <div className="col">
            <h2 className="h1">What makes US different?</h2>
          </div>
        </div>
        <div className="row text-left">
          <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="card card-body">
              <div className="flex-grow-1">
                <div className="h3">Building Bonds</div>
                <p>
                  Veterans Incorporated will assist the veteran in every way possible similar to how soldiers bond with their comrades while serving our country.
                </p>
              </div>
                   </div>
          </div>
          <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="card card-body">
              <div className="flex-grow-1">
                <div className="h3">Certified Veterans</div>
                <p>
                  Veterans incorporated divisions and members are certified veterans by their discharge papers showing their time of service and branch.
                </p>
              </div>

            </div>
          </div>
          <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="card card-body">
              <div className="flex-grow-1">
                <div className="h3">Empowering Communities</div>
                <p>
                 We will also assist the community at large with veteran service providers for lawn care, painting, remodeling, and other areas as our individual business divisions are developed and expanded.
                </p>
              </div>
        
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <img src="pages/assets/img/dividers/divider-3.svg" alt="graphical divider" data-inject-svg />
      </div>
    </section>

  {/* @@@@@@@@@@@@ meet our veterans starts here*/}

      <section>
      <div className="container">
        <div className="row mb-4">
          <div className="col text-left">
            <h2 className="h1">Meet Our Veterans</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5" data-aos="fade-up" data-aos-delay="100">
            <img src="pages/assets/img/avatars/soldier-01.png" alt="Benjamin Cameron" className="avatar avatar-xlg mr-3"/>
            <div>
              <h5 className="mb-0">Benjamin Cameron</h5>
              <span>Sergeant</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5" data-aos="fade-up" data-aos-delay="200">
            <img src="pages/assets/img/avatars/soldier-01.png" alt="Andrea Souzakis" className="avatar avatar-xlg mr-3"/>
            <div>
              <h5 className="mb-0">Andrea Souzakis</h5>
              <span>Lieutenant</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5" data-aos="fade-up" data-aos-delay="300">
            <img src="pages/assets/img/avatars/soldier-01.png" alt="Anil Bhaktar" className="avatar avatar-xlg mr-3"/>
            <div>
              <h5 className="mb-0">Anil Bhaktar</h5>
              <span>Corporal</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5" data-aos="fade-up" data-aos-delay="400">
            <img src="pages/assets/img/avatars/soldier-01.png" alt="Candice Tierman" className="avatar avatar-xlg mr-3"/>
            <div>
              <h5 className="mb-0">Candice Tierman</h5>
              <span>Private First ClassName</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5" data-aos="fade-up" data-aos-delay="500">
            <img src="pages/assets/img/avatars/soldier-01.png" alt="Andrew Finnigan" className="avatar avatar-xlg mr-3"/>
            <div>
              <h5 className="mb-0">Andrew Finnigan</h5>
              <span>Private First ClassName</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5" data-aos="fade-up" data-aos-delay="600">
            <img src="pages/assets/img/avatars/soldier-01.png" alt="Cedric Vance" className="avatar avatar-xlg mr-3"/>
            <div>
              <h5 className="mb-0">Cedric Vance</h5>
              <span>Private First ClassName</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  {/*@@@@@@@@@@@@@why veterans incorporated*/}

      <section className="p-0">
      <div className="container">
        <div className="row justify-content-around o-hidden o-lg-visible">
          <div className="col-xl-5 col-md-6 mb-4 mb-md-0 text-left" data-aos="fade">
            <h3 className="h1">Why Veterans Incorporated?</h3>
            <p className="lead">Veterans Incorporated is ran by veterans for veterans. All board members and individuals holding positions are veterans. Board members and individuals holding positions such as President and Treasurer are volunteer and receive no financial gain for their work with Veterans Incorporated.</p>
       
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 mb-lg-n7 layer-2 text-left" data-aos="fade-left">
            <a href="VeteransPackage" className="card card-icon-3 card-body justify-content-between hover-shadow-3d rotate-right">
              <div className="icon-round mb-3 mb-md-4 bg-primary">
                <img className="icon bg-primary" src="pages/assets/img/icons/theme/files/selected-file.svg" alt="icon" data-inject-svg />
              </div>
              <div>
                <h3>Veterans Package</h3>
                <p className="lead">
                  We are here to help, click to learn more. 
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="divider">
        <img className="bg-primary-3" src="pages/assets/img/dividers/divider-3.svg" alt="divider graphic" data-inject-svg />
      </div>
    </section>
    


{/*@@@@@@@@@@@@@FAQ starts here*/}
<section className="bg-primary-alt pt-0 text-left">
      <div className="container">   
        <div className="row">
          <div className="col-xl-8 col-lg-9">   
            <h3 className="h2">Frequently Asked Questions</h3>      
            <div className="my-4">
              <div className="card mb-2 card-sm card-body hover-shadow-sm" data-aos="fade-up" data-aos-delay="NaN">
                <div data-target="#panel-1" className="accordion-panel-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                  <span className="h6 mb-0">ARE YOU A 501(C)(3) NON-PROFIT ORGANIZATION</span>
                  <img className="icon" src="pages/assets/img/icons/interface/plus.svg" alt="plus interface icon" data-inject-svg />
                </div>
                <div className="collapse" id="panel-1">
                  <div className="pt-3">
                    <p className="mb-0">
                      Yes, we are a 501(c)(3) non-profit organization, and your contributions are tax-deductible to the extent permitted by IRS regulations. Our Federal ID #47-2426102
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-2 card-sm card-body hover-shadow-sm" data-aos="fade-up" data-aos-delay="NaN">
                <div data-target="#panel-2" className="accordion-panel-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-2">
                  <span className="h6 mb-0">WHO DO YOU PROVIDE ASSISTANCE TO?</span>
                  <img className="icon" src="pages/assets/img/icons/interface/plus.svg" alt="plus interface icon" data-inject-svg />
                </div>
                <div className="collapse" id="panel-2">
                  <div className="pt-3">
                    <p className="mb-0">
                      We provide assistance to the most discharged Service Members who need work training or equipments to start their own business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-2 card-sm card-body hover-shadow-sm" data-aos="fade-up" data-aos-delay="NaN">
                <div data-target="#panel-3" className="accordion-panel-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-3">
                  <span className="h6 mb-0">HOW MUCH OF MY DONATION GOES TO OVERHEAD? </span>
                  <img className="icon" src="pages/assets/img/icons/interface/plus.svg" alt="plus interface icon" data-inject-svg />
                </div>
                <div className="collapse" id="panel-3">
                  <div className="pt-3">
                    <p className="mb-0">
                      Since our founding in 2016, nearly 90 cents of every dollar spent has gone directly to our program services supporting Veterans.
                    </p>
                  </div>
                </div>
              </div>           
              <div className="card mb-2 card-sm card-body hover-shadow-sm" data-aos="fade-up" data-aos-delay="NaN">
                <div data-target="#panel-4" className="accordion-panel-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-4">
                  <span className="h6 mb-0">HOW DO I MAKE A DONATION?</span>
                  <img className="icon" src="pages/assets/img/icons/interface/plus.svg" alt="plus interface icon" data-inject-svg />
                </div>
                <div className="collapse" id="panel-4">
                  <div className="pt-3">
                    <p className="mb-0">
                      You can make a donation online using your credit card, paypal, bank account, google pay or apple pay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-2 card-sm card-body hover-shadow-sm" data-aos="fade-up" data-aos-delay="NaN">
                <div data-target="#panel-5" className="accordion-panel-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-5">
                  <span className="h6 mb-0">HOW CAN I CONTACT YOU?</span>
                  <img className="icon" src="pages/assets/img/icons/interface/plus.svg" alt="plus interface icon" data-inject-svg />
                </div>
                <div className="collapse" id="panel-5">
                  <div className="pt-3">
                    <p className="mb-0">
                      You can email us at veteran@veteransincorporated.us
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span>Still have questions? <a href="#footer" className="hover-arrow">Get in touch</a>
            </span>
          </div>
        </div>
      </div>   
    </section>

{/*@@@@@@@@@@@@@coming soon apppp*/}

 <section className="pt-0 bg-primary-3 text-light text-left">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5">
            <div className="row justify-content-center">
              <div className="col-8 col-md col-lg-8 mb-4 mb-md-0" data-aos="fade-right">
                <div className="mobile-screenshot rotate-left layer-1">
                  <img src="pages/assets/img/veterans_app-01.png" alt="Screenshot"/>
                  <img src="pages/assets/img/iphone-xr.svg" alt="iPhone XR"/>
                </div>
                <div className="decoration middle-y left scale-2">
                  <img className="bg-primary-2" src="pages/assets/img/decorations/deco-lines-5.svg" alt="deco-lines-5 decoration" data-inject-svg />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-7">
            <span className="badge badge-primary">New</span>
            <div className="mt-3 mb-4">
              <h3 className="h1">Coming Soon</h3>
              <p className="lead">
                Find your team of Veterans Home Solution experts at a touch of a button.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

  

       

    {/*@@@@@@@@@@@@@fooooter starts here*/}

        <footer className="pb-4 bg-primary-3 text-light text-left" id="footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <div className="card card-body border-0 o-hidden mb-0 bg-primary text-light">
              <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="h3 text-center mb-md-0">Expose your business and support our troops!</div>
                <a href="/VeteranAds" className="btn btn-lg btn-white">
     visit our partner site
    </a>
              </div>
              <div className="decoration layer-0">
                <img className="bg-primary-2" src="pages/assets/img/decorations/deco-blob-1.svg" alt="deco-blob-1 decoration" data-inject-svg />
              </div>
            </div>

          </div>
        </div>
     <div className="row mb-5">
          <div className="col-6 col-lg-3 col-xl-2">
            <h5>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link">Our Mission</a>
              </li>
              <li className="nav-item">
                <a href="ComingSoon" className="nav-link">Board of Directors</a>
              </li>
              <li className="nav-item">
                <a href="ComingSoon" className="nav-link">Senior Management</a>
              </li>

        
                
            </ul>
          </div>
          <div className="col-6 col-lg-3 col-xl-2">
            <h5>Policies</h5>
            <ul className="nav flex-column">
  
              <li className="nav-item">
                <a href="ComingSoon" className="nav-link">Charity Ratings</a>
              </li>
             
              <li className="nav-item">
                <a href="ComingSoon" className="nav-link">Company Financial/Annual Report</a>
              </li>
               
                <li className="nav-item">
                <a href="Policy" className="nav-link">Donor Policies and Procedures</a>
              </li>
              <li className="nav-item">
                <a href="Policy" className="nav-link">Web Privacy Policy</a>
              </li>
          
              <li className="nav-item">
                 <a  className="nav-link">EIN:  47-2426102 </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <div>
                  <span>615 East Elmwood Ave.,

                    <br />P.O. Box 122
                    <br/>West Chicago, IL 60186</span>
                </div>
              </li>
              <li className="mb-3 d-flex">
              
                <div>
                  <span>630.373.6055</span>
                  <span className="d-block text-muted text-small">Mon - Fri 9am - 5pm</span>
                </div>
              </li>
              <li className="mb-3 d-flex">
            
                <div>
                  <a href="#">veteran@veteransincorporated.us</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 col-xl-4 mt-3 mt-lg-0">
            <h5>Subscribe</h5>
            <p>The latest Veterans Incorporated news, articles, and resources, sent straight to your inbox every month.</p>
            <form action="/forms/mailchimp.php" data-form-email novalidate>
              <div className="form-row">
                <div className="col-12">
                  <input type="email" className="form-control mb-2" placeholder="Email Address" name="email" required/>
                </div>
                <div className="col-12">
                  <div className="d-none alert alert-success" role="alert" data-success-message>
                    Thanks, a member of our team will be in touch shortly.
                  </div>
                  <div className="d-none alert alert-danger" role="alert" data-error-message>
                    Please fill all fields correctly.
                  </div>
                  <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE" data-size="invisible" data-badge="bottomleft">
                  </div>
                  <button type="submit" className="btn btn-primary btn-loading btn-block" data-loading-text="Sending">
                    <img className="icon" src="pages/assets/img/icons/theme/code/loading.svg" alt="loading icon" data-inject-svg />
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
            <small className="text-muted form-text">We’ll never share your details. See our <a href="Policy">Privacy Policy</a>
            </small>

          </div>
        </div>
        <div className="row justify-content-center mb-2">
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img className="icon icon bg-primary-3" src="pages/assets/img/icons/social/instagram.svg" alt="instagram social icon" data-inject-svg />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img className="icon icon bg-primary-3" src="pages/assets/img/icons/social/twitter.svg" alt="twitter social icon" data-inject-svg />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img className="icon icon bg-primary-3" src="pages/assets/img/icons/social/youtube.svg" alt="youtube social icon" data-inject-svg />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img className="icon icon bg-primary-3" src="pages/assets/img/icons/social/medium.svg" alt="medium social icon" data-inject-svg />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img className="icon icon bg-primary-3" src="pages/assets/img/icons/social/facebook.svg" alt="facebook social icon" data-inject-svg />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-auto text-center">
            <small className="text-muted">&copy;2019 Powered by <a href="https://www.7QUBES.com">7QUBES</a> our  <a href="Policy">Terms of Service</a> & <a href="Policy">Private Policies</a>
            </small>
          </div>
        </div>
      </div>
    </footer>

      <a href="#" className="btn back-to-top btn-primary btn-round" data-smooth-scroll data-aos="fade-up" data-aos-offset="2000" data-aos-mirror="true" data-aos-once="false">
      <img className="icon" src="assets/img/icons/theme/navigation/arrow-up.svg" alt="arrow-up icon" data-inject-svg />
    </a>













      </div>
      );
    }
  }
 
  

export default Home;

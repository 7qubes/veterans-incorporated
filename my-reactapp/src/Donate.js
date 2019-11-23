import React, { Component } from 'react';

class Donate extends Component {
  render() {
    return (
        <div className="Donate">
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
          <div className="col-lg-5 col-md-6">
            <div className="text-center mb-4">
              <h1 className="mb-2">Create Account</h1>
              <span>First Steps Toward Donation.</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form className="wizard">
              <ul className="d-flex step-circles justify-content-center mb-5">
                <li><a className="nav-link btn" href="#step-1">1</a>
                </li>
                <li><a className="nav-link btn" href="#step-2">2</a>
                </li>
              </ul>
              <div>
              
                <div id="step-1" className="">
                  <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-6">


                      <div className="form-group ">
                        <input type="text" className="form-control" placeholder="First Name"/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name"/>
                        <small className="text-muted">We will never share your name with others.</small>
                      </div>
                      <div>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                          <label className="custom-control-label" for="customSwitch1">make this a montly donation</label>
                        </div>
                      </div>
                       <input type="text" data-ion-rangeslider data-values="20,40,80,160,320,500" data-from="2" data-step="1" data-grid="true" data-grid-snap="true" data-on-change="mrUpdatePrice" data-unit-selector=".js-users-word" data-unit-single="User" data-unit-plural="Users"
                       data-from-selector=".js-users-per-month" data-hide-from-to="true" />
          
                      <hr/>


                       <div className="form-group">
                        <input type="text" className="form-control" placeholder="Credit Card Number"/>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-4">
                        <input type="text" className="form-control" placeholder="CVV"/>
                      </div>
                       <select className="custom-select col-md-4">
                            <option selected>Month</option>
                              <option value='01'>January</option>
                              <option value='02'>February</option>
                              <option value='03'>March</option>
                              <option value='04'>April</option>
                              <option value='05'>May</option>
                              <option value='06'>June</option>
                              <option value='07'>July</option>
                              <option value='08'>August</option>
                              <option value='09'>September</option>
                              <option value='10'>October</option>
                              <option value='11'>November</option>
                              <option value='12'>December</option>
                           
                         </select>

                            <select className="custom-select col-md-4">
                            <option selected>Year</option>
                              <option value='20'>2020</option>
                              <option value='21'>2021</option>
                              <option value='22'>2022</option>
                              <option value='23'>2023</option>
                              <option value='24'>2024</option>
                              <option value='25'>2025</option>
                              <option value='26'>2026</option>
                              <option value='27'>2027</option>
                              <option value='28'>2028</option>
                              <option value='29'>2029</option>
                              <option value='30'>2030</option>
                           
                         </select>





                    
                      </div>

                      <div className="form-group">
                        <textarea className="form-control" placeholder="In Honor Of" rows="5"></textarea>
                      </div>
                      <hr/>


                       <div className="form-group">
                        <input type="text" className="form-control" placeholder="Address"/>
                      </div>
                       <div className="form-group">
                        <input type="text" className="form-control" placeholder="Address 2"/>
                      </div> 
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="City"/>
                      </div>
                        <div className="row">
                          <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Zipcode"/>
                      </div>

                            <select className="custom-select col-md-6">
                            <option selected>Select State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </select>
                        </div>
                        <div className="form-group row">
                            <label for="example-tel-input" className="col-4 col-form-label">Telephone</label>
                            <div className="col-8">
                              <input className="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input"/>
                            </div>
                          </div>

                      <hr/>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address"/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password"/>
                        <small className="text-muted">Must be at least 8 characters</small>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                      </div>


          
                     
                      <button className="btn btn-primary sw-btn-next btn-block">donate</button>
                    </div>
                  </div>
                </div>
                <div id="step-2" className="">
                  <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                      <h2> Thank you</h2>

              <table className="table table-striped">
        
              <tbody>
                <tr>
                  <th scope="row">Organization</th>
                  <td>Mark</td>
             
                </tr>
                <tr>
                  <th scope="row">Transaction Date</th>
                  <td>Jacob</td>
              
                </tr>
                <tr>
                  <th scope="row">Transaction ID</th>
                  <td>Larry</td>
                 
                </tr>
                  <tr>
                  <th scope="row">Gift Amount</th>
                  <td>Larry</td>
                
                </tr>
                 <tr>
                  <th scope="row">Gift Frequency</th>
                  <td>Larry</td>
             
                </tr>
                 <tr>
                  <th scope="row">Payment Method</th>
                  <td>Larry</td>
          
                </tr>
                  <tr>
                  <th scope="row">Name</th>
                  <td>Larry</td>
              
                </tr>

                 <tr>
                  <th scope="row">Address</th>
                  <td>Larry</td>
                </tr>

              </tbody>
            </table>


                      <hr/>
                      <div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input type="checkbox" className="custom-control-input" id="custom-checkbox-example-1"/>
                          <label className="custom-control-label" for="custom-checkbox-example-1">email me updates</label>
                        </div>
                      </div>
                      <hr/>
                            <div className="row">
                              <div className="form-group col-md-6">
                               <button className="btn btn-primary btn-block">Back</button>
                             </div>

                             
                       
                             <div className="col-md-6">
                             		 <form action="/">
									         <button  className="btn btn-primary btn-block" type="submit">Home</button>
									      </form>


                     
                             </div>
                            </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>








         <footer>
                <div className="row justify-content-center">
                    <div className="col col-md-auto text-center">
                      <small className="text-muted">&copy;2019 Powered by <a href="https://www.7QUBES.com">7QUBES</a> our  <a href="Policy">Terms of Service</a> & <a href="Policy">Private Policies</a>
                      </small>
                    </div>
                  </div>
          </footer>



        </div>
    );
  }
}

export default Donate;

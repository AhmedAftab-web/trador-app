import React from 'react';
import './contact.css';
import {Row,Col} from 'react-bootstrap';
function ContactPage(){
    return(
        <div>
            <div class="container">
             <div class="container-fluid">
                <h1><span class="contact-heading text-uppercase">Contact Us</span></h1>
                <div class="row pt-4">
                    <div class="col-lg-7">
                        
                         <form action="/action_page.php">
                             <div class="row">
                                 <div class="col-lg-6">
                                   <div class="icon-input-holder pt-5 mr-1">
                                        <i class="fa fa-user"></i>
                                        <input class="contact-form-input" type="text" id="fname" name="fname"></input>
                                   </div>
         
                                </div>
                                <div class="col-lg-6">
                                    <div class="icon-input-holder pt-5">
                                        <i class="fa fa-user"></i>
                                         <input class="contact-form-input" type="text" id="fname" name="fname" ></input>
                                    </div>
          
                                 </div>
                                 <div class="col-lg-12">
                                    <div class="icon-input-holder pt-5">
                                        <i class="fa fa-user"></i>
                                         <input class="contact-form-input-lg" type="text" id="fname" name="fname" ></input>
                                    </div>
          
                                 </div>
                                 <div class="col-lg-6">
                               
                                        <textarea class="textarea-contact my-4" name="" id="" rows="5" placeholder="Type Message"></textarea>
                                        <input class="contact-submit-btn" type="submit" value="Submit"></input>
    
          
                                 </div>
                             </div>
                           
                        
                        
                         </form> 
     
     
                    </div>
                    <div class="col-lg-5">
                    <div class="location-container">
                        <table>
                           <tr>
                               <td >Location: </td>
                               <td colspan="2" class="table-col-text-clr"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus corporis asperiores ipsum velit,</td>
                           </tr>
                           
                        <tr>
                            <td>Email:</td>
                            <td colspan="2" class="table-col-text-clr">someone@email.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td colspan="2" class="table-col-text-clr">0123456789</td>
                        </tr>
                        </table>
                        <div class="py-5 d-flex justify-content-center">
                            Map API
                        </div>

                    </div>
                        
                 </div>
                </div>
             </div>
      
  
       </div>

        </div>
    )
}
export default ContactPage;
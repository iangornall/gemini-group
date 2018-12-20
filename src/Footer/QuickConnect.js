import React from 'react';
import Button from '../shared/Button';
// let submitHandler = (event) =>{
//   event.preventDefault();
//   const data = new FormData(event.target);
//   console.log("submit fired");
//   var http = new XMLHttpRequest();
//   var url = 'https://script.google.com/macros/s/AKfycbwTIRMnb6BXCjPepHShgEHB7j0mJ_GHiML1-Iz6KR_pCJQ1Nid4/exec';
//   http.open('GET', url, true);

//   //Send the proper header information along with the request
//   http.setRequestHeader('Content-type', 'application/json; charset=utf-8"');

//   http.onreadystatechange = function() {//Call a function when the state changes.
//       if(http.readyState == 4 && http.status == 200) {
//           alert(http.responseText);
//       }
//   }
//   http.send(data);
// }
let QuickConnect = () => (
  <div className="quick-connect">
    <h2 className="footer-title">Quick Connect</h2>
    <form className="footer-form" action="https://formspree.io/matney@geminigroupatl.com" method="POST">
      <label className="footer-label">First Name: 
        <input className="footer-input" type="text" name="first-name" placeholder="First Name" />
      </label>
      <label className="footer-label">Last Name: 
        <input className="footer-input" type="text" name="last-name" placeholder="Last Name" />
      </label>
      <label className="footer-label">Email: 
        <input className="footer-input" type="email" name="email" placeholder="Email" />
      </label>
      <label className="footer-label">Message: 
        <input className="footer-input" type="text" name="message" placeholder="Message" />
      </label>
      <div className="footer-submit"><button type="submit">Submit</button></div>
    </form>
  </div>
)

export default QuickConnect;
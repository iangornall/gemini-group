import React from 'react';
import Button from '../shared/Button';
let submitHandler = (event) =>{
  event.preventDefault();
  console.log(event.currentTarget);
  const data = new FormData(event.currentTarget);
  console.log(data);
  fetch('https://script.google.com/macros/s/AKfycbwTIRMnb6BXCjPepHShgEHB7j0mJ_GHiML1-Iz6KR_pCJQ1Nid4/exec', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // headers: {
    //     "Content-Type": "application/json; charset=utf-8"
    // },
    body: data
})
.then(response => response.json())
.then(data => console.log(data));
}
//action="https://formspree.io/matney@geminigroupatl.com" method="POST"
let QuickConnect = () => (
  <div className="quick-connect">
    <h2 className="footer-title">Quick Connect</h2>
    <form onSubmit={submitHandler} className="footer-form" >
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
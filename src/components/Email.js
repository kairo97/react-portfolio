import React from "react";
import "./Email.css"
class Email extends React.Component {
  handleform = (e) => {
    const email = e.target.elements.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    alert(`Email submitted: ${email}`);
  }

  render() {
    return (
      <form id="emailForm" onSubmit={this.handleform}>
        <p id="note">Leave your email for me</p>
        <input id="email-input"type="text" placeholder="email" name="email"></input>
        <button type="submit" id="submit">Submit</button>
        <p id="click"> or click the links below</p>
      </form>
    );
  }
}

export default Email;

import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import '../../App.css'

const url = "https://peopleswealthllc.us6.list-manage.com/subscribe/post?u=ed949fe8c1469cdc1be79cac1&amp;id=c069ec755a";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe style={{width: '400px'}} url={url}/>

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className="form_container" style={{width: '100%', padding: '0px', margin: '50px'}}>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {/* {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>} */}
      </div>
    )}
  />
)

export default CustomForm
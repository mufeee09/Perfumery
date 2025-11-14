// import React, { useState } from "react";
// import emailjs from "@emailjs/browser"; // Import EmailJS
// import "../styles/ContactForm.css"; // Import CSS

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     from_name: "",
//     from_email: "",
//     message: "",
//   });

//   const [isSent, setIsSent] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "default_service", // Replace with your EmailJS Service ID
//         "template_saaki0g", // Replace with your EmailJS Template ID
//         formData,
//         "rbbHFRq8byeHd-HzQ" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Message Sent Successfully!");
//           setIsSent(true);
//           setFormData({ from_name: "", from_email: "", message: "" });
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           alert("Failed to send message. Try again!");
//         }
//       );
//   };

//   return (
//     <div className="form-container">
//       <form id="form" onSubmit={handleSubmit}>
//         <div className="field">
//           <label htmlFor="from_name">Name</label>
//           <input
//             type="text"
//             name="from_name"
//             id="from_name"
//             placeholder="Enter Your Name"
//             value={formData.from_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="field">
//           <label htmlFor="from_email">Email</label>
//           <input
//             type="email"
//             name="from_email"
//             id="from_email"
//             placeholder="Enter Your Email"
//             value={formData.from_email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="field">
//           <label htmlFor="message">Query/Comments</label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Enter Your Comments Here..."
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <input type="submit" id="button" value={isSent ? "Sent" : "Send"} />
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


// import React, { useState } from "react";
// import emailjs from "@emailjs/browser"; // Import EmailJS
// import "../styles/ContactForm.css"; // Import CSS

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     from_name: "",
//     from_email: "",
//     message: "",
//   });

//   const [isSent, setIsSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // New loading state

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true); // Show loading animation

//     emailjs
//       .send(
//         "default_service", // Replace with your EmailJS Service ID
//         "template_saaki0g", // Replace with your EmailJS Template ID
//         formData,
//         "rbbHFRq8byeHd-HzQ" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Message Sent Successfully!");
//           setIsSent(true);
//           setIsLoading(false); // Hide loading animation
//           setFormData({ from_name: "", from_email: "", message: "" });
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           alert("Failed to send message. Try again!");
//           setIsLoading(false); // Hide loading animation
//         }
//       );
//   };

//   return (
//     <div className="form-container">
//       <form id="form" onSubmit={handleSubmit}>
//         <div className="field">
//           <label htmlFor="from_name">Name</label>
//           <input
//             type="text"
//             name="from_name"
//             id="from_name"
//             placeholder="Enter Your Name"
//             value={formData.from_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="field">
//           <label htmlFor="from_email">Email</label>
//           <input
//             type="email"
//             name="from_email"
//             id="from_email"
//             placeholder="Enter Your Email"
//             value={formData.from_email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="field">
//           <label htmlFor="message">Query/Comments</label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Enter Your Comments Here..."
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <button type="submit" id="button" disabled={isLoading}>
//           {isLoading ? (
//             <span className="loader"></span> // Loading animation
//           ) : isSent ? (
//             "Sent"
//           ) : (
//             "Send"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


// import React, { useState } from "react";
// import emailjs from "@emailjs/browser"; // Import EmailJS
// import "../styles/ContactForm.css"; // Import CSS

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     from_name: "",
//     from_email: "",
//     to_email: "rolscheventon.official@gmail.com",
//     message: "",
//   });

//   const [isSent, setIsSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const email = formData.from_email;
//     const today = new Date().toDateString(); // Get today's date as a string

//     // Check localStorage for existing email and date
//     const storedData = JSON.parse(localStorage.getItem("email_sent_data")) || {};

//     if (storedData[email] === today) {
//       alert("You have already sent a message today. Try again tomorrow.");
      
//       // Reset the form fields after alert
//       setFormData({ from_name: "", from_email: "", message: "" });
//       return;
//     }

//     setIsLoading(true); // Show loading animation

//     emailjs
//       .send(
//         "service_uuax7cw", // Replace with your EmailJS Service ID
//         "template_htc2pkf", // Replace with your EmailJS Template ID
//         {
//           from_name: formData.from_name,
//           from_email: formData.from_email,
//           to_email: formData.to_email,
//           message: formData.message,
//         },
//         "4YJ6pzR07Jxjvkc7H" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Message Sent Successfully!");
//           setIsSent(true);
//           setIsLoading(false);

//           // Store email in localStorage with today's date
//           localStorage.setItem(
//             "email_sent_data",
//             JSON.stringify({ ...storedData, [email]: today })
//           );

//           setFormData({ from_name: "", from_email: "", message: "" });
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           alert("Failed to send message. Try again!");
//           setIsLoading(false);
//         }
//       );
//   };

//   return (
//     <div className="form-container">
//       <form id="form" onSubmit={handleSubmit}>
//         <div className="field">
//           <label htmlFor="from_name">Name</label>
//           <input
//             type="text"
//             name="from_name"
//             id="from_name"
//             placeholder="Enter Your Name"
//             value={formData.from_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="field">
//           <label htmlFor="from_email">Email</label>
//           <input
//             type="email"
//             name="from_email"
//             id="from_email"
//             placeholder="Enter Your Email"
//             value={formData.from_email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="field">
//           <label htmlFor="message">Query/Comments</label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Enter Your Comments Here..."
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <button type="submit" id="button" disabled={isLoading}>
//           {isLoading ? <span className="loader"></span> : isSent ? "Sent" : "Send"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "../styles/ContactForm.css"; // Import CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_phone: "",
    from_email: "",
    to_email: "atrabaromatics00@gmail.com",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.from_email;
    const today = new Date().toDateString(); // Get today's date as a string

    // Check localStorage for existing email and date
    const storedData = JSON.parse(localStorage.getItem("email_sent_data")) || {};

    if (storedData[email] === today) {
      alert("You have already sent a message today. Try again tomorrow.");
      
      // Reset the form fields after alert
      setFormData({ from_name: "", from_phone: "", from_email: "", message: "" });
      return;
    }

    setIsLoading(true); // Show loading animation

    emailjs
      .send(
        "service_uuax7cw", // Replace with your EmailJS Service ID
        "template_htc2pkf", // Replace with your EmailJS Template ID
        {
          from_name: formData.from_name,
          from_phone: formData.from_phone,
          from_email: formData.from_email,
          to_email: formData.to_email,
          message: formData.message,
        },
        "4YJ6pzR07Jxjvkc7H" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message Sent Successfully!");
          setIsSent(true);
          setIsLoading(false);

          // Store email in localStorage with today's date
          localStorage.setItem(
            "email_sent_data",
            JSON.stringify({ ...storedData, [email]: today })
          );

          setFormData({ from_name: "", from_phone: "", from_email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Try again!");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="form-container">
      <form id="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Enter Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="from_phone">Phone</label>
          <input
            type="tel"
            name="from_phone"
            id="from_phone"
            placeholder="Enter Your Phone Number"
            value={formData.from_phone}
            onChange={handleChange}
            pattern="[0-9]{10,15}"
            title="Please enter a valid phone number (10-15 digits)"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="from_email">Email</label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            placeholder="Enter Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message">Query/Comments</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Comments Here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" id="button" disabled={isLoading}>
          {isLoading ? <span className="loader"></span> : isSent ? "Sent" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

//MAILTO METHOD
// import React, { useState } from "react";
// // Removed: import emailjs from "@emailjs/browser"; 
// import "../styles/ContactForm.css"; // Import your existing CSS

// const ContactForm = () => {
//   // Add 'phone' to the state
//   const [formData, setFormData] = useState({
//     from_name: "",
//     from_email: "",
//     from_phone: "", // New field for phone number
//     comments: "",  // Renamed 'message' to 'comments' for clarity
//   });

//   // State to hold the recipient email address
//   const recipientEmail = "rolscheventon.official@gmail.com"; 

//   const handleChange = (e) => {
//     // Uses the input's 'name' attribute (e.g., 'from_name', 'comments') to update the state
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { from_name, from_email, from_phone, comments } = formData;
    
//     // 1. Construct the email body
//     // The email body will include the sender's details and their comments
//     const body = encodeURIComponent(
//         `Name: ${from_name}\n` +
//         `Email: ${from_email}\n` +
//         `Phone: ${from_phone}\n\n` +
//         `Comments:\n${comments}`
//     );

//     // 2. Construct the email subject
//     const subject = encodeURIComponent(`New Inquiry from ${from_name}`);

//     // 3. Construct the full mailto: URL
//     // Format: mailto:recipient?subject=...&body=...
//     const mailtoLink = 
//         `mailto:${recipientEmail}?` +
//         `subject=${subject}&` +
//         `body=${body}`;

//     // 4. Open the user's default email client
//     window.location.href = mailtoLink;

//     // Optional: Reset form fields after initiating the mailto link
//     // Note: The user still needs to click 'Send' in their email client.
//     setFormData({ from_name: "", from_email: "", from_phone: "", comments: "" });
//   };

//   return (
//     <div className="form-container">
//       {/* The form will still use onSubmit to trigger our mailto logic */}
//       <form id="form" onSubmit={handleSubmit}>
        
//         {/* --- Name Field --- */}
//         <div className="field">
//           <label htmlFor="from_name">Name</label>
//           <input
//             type="text"
//             name="from_name"
//             id="from_name"
//             placeholder="Enter Your Name"
//             value={formData.from_name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* --- Email Field --- */}
//         <div className="field">
//           <label htmlFor="from_email">Email</label>
//           <input
//             type="email"
//             name="from_email"
//             id="from_email"
//             placeholder="Enter Your Email"
//             value={formData.from_email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* --- Phone Field (New) --- */}
//         <div className="field">
//           <label htmlFor="from_phone">Phone</label>
//           <input
//             type="tel" // Use 'tel' type for phone numbers
//             name="from_phone"
//             id="from_phone"
//             placeholder="Enter Your Phone Number (Optional)"
//             value={formData.from_phone}
//             onChange={handleChange}
//             // phone number is optional
//           />
//         </div>
        
//         {/* --- Comments/Query Field --- */}
//         <div className="field">
//           <label htmlFor="comments">Query/Comments</label>
//           <textarea
//             name="comments" // Use 'comments' to match state
//             id="comments"
//             placeholder="Enter Your Comments Here..."
//             value={formData.comments}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         {/* The button is a standard submit button */}
//         <button type="submit" id="button">
//           Open Email Client
//         </button>
//         <p className="note">Note: This will open your default email program to send the message.</p>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
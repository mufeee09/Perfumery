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


import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "../styles/ContactForm.css"; // Import CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    to_email: "rolscheventon.official@gmail.com",
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
      setFormData({ from_name: "", from_email: "", message: "" });
      return;
    }

    setIsLoading(true); // Show loading animation

    emailjs
      .send(
        "service_uuax7cw", // Replace with your EmailJS Service ID
        "template_htc2pkf", // Replace with your EmailJS Template ID
        {
          from_name: formData.from_name,
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

          setFormData({ from_name: "", from_email: "", message: "" });
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

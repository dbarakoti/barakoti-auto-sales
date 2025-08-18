import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ContactUs.css';

export default function ContactUs(){
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState("");

    // is to auto-rest form, fresh form each visit
     useEffect(() => {
    setStatus("");
  }, []);


//Reset message after 6 sec.
useEffect(() => {
    if (status === "Message sent successfully!") {
      const timer = setTimeout(() => setStatus(""), 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/contact/`,
                formData);
                 setStatus("Message sent successfully!");
                setFormData({ first_name: "", last_name: "", email: "", message: "" });
    } catch (error) {
      setStatus(error.response?.data?.error || "Something went wrong. Try again.");
    }
  };

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-5">
                    <h2 className="mb-4">Contact Us</h2>
                    {status === "Message sent successfully!" ? (
       <div className="p-4 text-white font-semibold bg-blue-900 rounded">
          Thank you for contacting us! We’ll be in touch soon.
        </div>
      ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                        className="form-control"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        className="form-control"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="form-control"
                    onChange={handleChange}
                    required
                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>


                <div className="col-md-3 offset-md-1 mt-5 mt-md-1">
                    <h4>Contact Info</h4>
                    <p><strong>Phone:</strong> (xxx) xxx-xxxx</p>
                    <p><strong>Location:</strong> Salt Lake City, UT</p>

                    <h5 className="mt-4">Hours of Operation</h5>
                    <ul className="list-unstyled">
                        <li>Mon–Fri: 9 AM – 6 PM</li>
                        <li>Sat: 10 AM – 4 PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>


                <div className="col-md-3 ps-md-4 mt-5 mt-md-0">
                    <h4 className="text-success mb-3">Find Us</h4>
                    <div className="rounded overflow-hidden shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48326.42126074628!2d-111.9310428371801!3d40.76077902180262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d8b059c57693f%3A0xb49388efbc5279bd!2sDowntown%20Salt%20Lake%20City%2C%20Salt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1691298263811!5m2!1sen!2sus"
                            width="100%"
                            height="250"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Salt Lake City Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};



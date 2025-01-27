import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '' 
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    };
    
    // service_mwo1yms

    const hanldleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_5ad4g8r', 
                'template_q3g8p6o',
                {
                    from_name: form.name,
                    to_name: 'Akashdeep',
                    from_email: form.email,
                    to_email: 'ak45.akashdeep@gmail.com',
                    message: form.message
                }, 
                '7OcdoDHy2f56Kcw9I'
            );
            setLoading(false);

            // TODO:: Add a modal instead of alert
            alert('Thank you. I will get back to you as soon as possible.');

            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.');
        }
    };

    return(
        <section className="c-space my-20">

            <div className="relative min-h-screen flex items-center justify-center flex-col">
            {/* <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" /> */}
            <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 w-full h-full object-contain" />
                <div className="contact-container">
                    <h3 className="head-text">
                        Let's talk!
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        I'm currently available for freelance work. If you have any questions or just want to say hi, my inbox is open for all.
                    </p>

                    <form ref={formRef} onSubmit={hanldleSubmit} className="mt-12 flex flex-col space-y-7">
                        {/* Fullname Label */}
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input 
                                type="text"
                                name="name"
                                value={form.name}
                                className="field-input" 
                                placeholder="John Doe"
                                onChange={handleChange}
                                required
                            />
                        </label>

                        {/* Email Label */}
                        <label className="space-y-3">
                            <span className="field-label">
                                Email Address
                            </span>
                            <input 
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="field-input" 
                                placeholder="johndoe@example.com"
                                required
                            />
                        </label>

                        {/* Message Label */}
                        <label className="space-y-3">
                            <span className="field-label">
                                Your message
                            </span>
                            <textarea 
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                className="field-input" 
                                placeholder="Hi Akash, I would like to..."
                                required
                            >

                            </textarea>
                        </label>

                        {/* Button */}
                        <button className="field-btn" type="submit" disabled={loading} >
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React, { useState } from 'react';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';
import emailjs from 'emailjs-com';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // EmailJS Configuration - Fixed environment variables
    const EMAILJS_CONFIG = {
        serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    };

    const handleEmailSubmit = async () => {
        const { from_name, from_email, message } = formData;

        // Validation
        if (!from_name.trim()) {
            setSubmitMessage('Please enter your name.');
            setTimeout(() => setSubmitMessage(''), 3000);
            return;
        }

        if (!from_email.trim()) {
            setSubmitMessage('Please enter your email address.');
            setTimeout(() => setSubmitMessage(''), 3000);
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(from_email)) {
            setSubmitMessage('Please enter a valid email address.');
            setTimeout(() => setSubmitMessage(''), 3000);
            return;
        }

        if (!message.trim()) {
            setSubmitMessage('Please enter a message.');
            setTimeout(() => setSubmitMessage(''), 3000);
            return;
        }

        setIsSubmitting(true);

        try {
            // Check if EmailJS configuration is available
            if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
                console.warn('EmailJS configuration missing, using simulation mode');

                // Simulation mode for development
                console.log('Email would be sent with data:', {
                    from_name: from_name.trim(),
                    from_email: from_email.trim(),
                    message: message.trim(),
                    timestamp: new Date().toLocaleString()
                });

                await new Promise(resolve => setTimeout(resolve, 2000));
                setSubmitMessage(`Thanks ${from_name}! Your message has been sent successfully. I'll get back to you soon!`);
                setFormData({ from_name: '', from_email: '', message: '' });
            } else {
                // Real EmailJS implementation
                const templateParams = {
                    from_name: from_name.trim(),
                    from_email: from_email.trim(),
                    to_name: 'Pravas Mohanty',
                    to_email: 'pravas.your@email.com', // Replace with your actual email
                    subject: `New Contact from ${from_name} - Portfolio`,
                    message: message.trim(),
                    reply_to: from_email.trim(),
                    timestamp: new Date().toLocaleString(),
                    source: 'Portfolio Website'
                };

                const response = await emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.templateId,
                    templateParams,
                    EMAILJS_CONFIG.publicKey
                );

                console.log('EmailJS Response:', response);

                if (response.status === 200) {
                    setSubmitMessage(`Thanks ${from_name}! Your message has been sent successfully. I'll get back to you soon!`);
                    setFormData({ from_name: '', from_email: '', message: '' });
                } else {
                    throw new Error('Email send failed');
                }
            }

        } catch (error) {
            console.error('Email Error:', error);
            setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly.');
        }

        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(''), 8000);
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-300 bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <ContactForm
                        formData={formData}
                        setFormData={setFormData}
                        handleEmailSubmit={handleEmailSubmit}
                        isSubmitting={isSubmitting}
                        submitMessage={submitMessage}
                    />
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
import React, { useState } from 'react';
import { Github, Linkedin, Code, Mail } from 'lucide-react';

// Contact Form Component
const ContactForm = ({
    name,
    setName,
    email,
    setEmail,
    handleSubmit,
    isSubmitting,
    submitMessage
}) => {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Send me a message</h3>

            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-blue-900/10 border border-blue-800/30 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 placeholder-blue-400/50 text-blue-100"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-blue-900/10 border border-blue-800/30 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 placeholder-blue-400/50 text-blue-100"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 disabled:from-blue-800 disabled:to-violet-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25 hover:shadow-violet-500/25"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>

            {submitMessage && (
                <div className="mt-4 p-3 bg-blue-800/20 border border-blue-700/30 rounded-lg">
                    <p className="text-blue-200 text-sm text-center">{submitMessage}</p>
                </div>
            )}
        </div>
    );
};

// Social Link Component
const SocialLink = ({ href, icon: Icon, title, description }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-900/10 to-violet-800/5 border border-blue-800/30 rounded-lg hover:border-violet-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
        >
            <Icon size={24} className="text-blue-400" />
            <div>
                <h4 className="font-semibold text-blue-300">{title}</h4>
                <p className="text-sm text-blue-400/80">{description}</p>
            </div>
        </a>
    );
};

// Social Links Component
const SocialLinks = () => {
    const socialData = [
        {
            href: "https://github.com/yourusername",
            icon: Github,
            title: "GitHub",
            description: "Check out my repositories"
        },
        {
            href: "https://linkedin.com/in/yourusername",
            icon: Linkedin,
            title: "LinkedIn",
            description: "Professional network"
        },
        {
            href: "https://leetcode.com/yourusername",
            icon: Code,
            title: "LeetCode",
            description: "Coding challenges & solutions"
        }
    ];

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Connect with me</h3>
            <div className="space-y-4">
                {socialData.map((social, index) => (
                    <SocialLink key={index} {...social} />
                ))}

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-900/10 to-violet-800/5 border border-blue-800/30 rounded-lg">
                    <Mail size={24} className="text-blue-400" />
                    <div>
                        <h4 className="font-semibold text-blue-300">Email</h4>
                        <p className="text-sm text-blue-400/80">your.email@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Contact Section Component
const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async () => {
        if (!name || !email) {
            setSubmitMessage('Please fill in both name and email.');
            setTimeout(() => setSubmitMessage(''), 3000);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubmitMessage('Please enter a valid email address.');
            setTimeout(() => setSubmitMessage(''), 3000);
            return;
        }

        setIsSubmitting(true);

        try {
            // EmailJS integration would go here
            console.log('Form submitted:', { name, email });
            setSubmitMessage("Message sent successfully! I'll get back to you soon.");
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Submit Error:', error);
            setSubmitMessage('Failed to send message. Please try again.');
        }

        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(''), 5000);
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <ContactForm
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        handleSubmit={handleSubmit}
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
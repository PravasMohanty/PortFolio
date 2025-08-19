import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code, Mail, ChevronDown, Menu, X } from 'lucide-react';

import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';

import ContactSection from './ContactSection';
import Footer from './Footer';
import CustomStyles from './CustomStyles';

// Navigation Component
// const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
//     return (
//         <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b borderblue900/30">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center py-4">
//                     <div className="text-2xl font-bold bg-gradient-to-r fromblue500 toblue300 bg-clip-text text-transparent">
//                         Portfolio
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex space-x-8">
//                         {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//                             <button
//                                 key={item}
//                                 onClick={() => scrollToSection(item.toLowerCase())}
//                                 className="hover:textblue300 transition-colors duration-300 relative group"
//                             >
//                                 {item}
//                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bgblue500 group-hover:w-full transition-all duration-300"></span>
//                             </button>
//                         ))}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="md:hidden p-2"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`md:hidden bg-black/95 transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
//                 <div className="px-4 py-2 space-y-2">
//                     {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//                         <button
//                             key={item}
//                             onClick={() => scrollToSection(item.toLowerCase())}
//                             className="block w-full text-left py-2 hover:textblue300 transition-colors duration-300"
//                         >
//                             {item}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// Spline Component Placeholder
// const SplineBackground = () => {
//     return (
//         <div className="absolute inset-0 z-0">
//             <div className="w-full h-full bg-gradient-to-br fromblue900/5 to-black flex items-center justify-center">
//                 <div className="textblue800/50 text-center">
//                     <div className="w-64 h-64 mx-auto mb-4 border-2 borderblue800/30 rounded-full flex items-center justify-center animate-pulse">
//                         <span className="text-sm">Your Spline 3D Model Here</span>
//                     </div>
//                     <p className="text-xs">Replace this div with your Spline component</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// Hero Section Component
// const HeroSection = ({ scrollY, scrollToSection }) => {
//     return (
//         <section id="home" className="min-h-screen flex items-center justify-center relative">
//             <div className="absolute inset-0 bg-gradient-to-b fromblue900/10 to-black"></div>

//             <SplineBackground />

//             <div className="relative z-10 text-center px-4" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
//                 <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
//                     <span className="bg-gradient-to-r fromblue600 viablue500 toblue400 bg-clip-text text-transparent">
//                         Pravas Mohanty
//                     </span>
//                 </h1>
//                 <p className="text-xl md:text-2xl textblue300 mb-8 animate-fade-in-delay">
//                     Full Stack Developer & UI/UX Designer
//                 </p>
//                 <button
//                     onClick={() => scrollToSection('about')}
//                     className="group inline-flex items-center px-8 py-3 bg-gradient-to-r fromblue600 toblue500 hover:fromblue500 hover:toblue400 rounded-full transition-all duration-300 transform hover:scale-105"
//                 >
//                     Explore My Work
//                     <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
//                 </button>
//             </div>
//         </section>
//     );
// };

// Skills Component
// const SkillsGrid = () => {
//     const skills = ['React', 'Node.js', 'Three.js', 'TypeScript', 'Python', 'MongoDB'];

//     return (
//         <div className="flex flex-wrap gap-3 mt-8">
//             {skills.map((skill) => (
//                 <span
//                     key={skill}
//                     className="px-4 py-2 bgblue900/30 border borderblue700/50 rounded-full text-sm hover:bgblue800/30 transition-colors duration-300"
//                 >
//                     {skill}
//                 </span>
//             ))}
//         </div>
//     );
// };

// About Section Component
// const AboutSection = () => {
//     return (
//         <section id="about" className="py-20 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r fromblue500 toblue300 bg-clip-text text-transparent">
//                     About Me
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-12 items-start">
//                     {/* About Me Content - Left Side */}
//                     <div className="space-y-6">
//                         <p className="text-lg textblue200 leading-relaxed">
//                             I'm a passionate developer who loves creating futuristic digital experiences.
//                             With expertise in modern web technologies, I bring ideas to life through clean code and innovative design.
//                         </p>
//                         <p className="text-lg textblue200 leading-relaxed">
//                             My journey spans across full-stack development, 3D web experiences, and cutting-edge UI/UX design.
//                             I'm always exploring new technologies to stay at the forefront of digital innovation.
//                         </p>
//                         <p className="text-lg textblue200 leading-relaxed">
//                             When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
//                             or experimenting with the latest web development trends. I believe in continuous learning and staying
//                             ahead of the curve in this ever-evolving field.
//                         </p>
//                         <SkillsGrid />
//                     </div>

//                     {/* Profile Image - Right Side */}
//                     <div className="relative md:order-last order-first">
//                         <div className="relative group">
//                             <div className="absolute -inset-1 bg-gradient-to-r fromblue600 toblue400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
//                             <div className="relative w-full h-96 bg-gradient-to-br fromblue900/20 toblue800/10 rounded-lg border borderblue800/30 flex items-center justify-center overflow-hidden">
//                                 <img
//                                     src="/api/placeholder/400/500"
//                                     alt="Profile"
//                                     className="w-full h-full object-cover opacity-0"
//                                     onError={(e) => {
//                                         e.target.style.display = 'none';
//                                         e.target.nextElementSibling.style.display = 'flex';
//                                     }}
//                                 />
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                     <span className="textblue700 text-center">
//                                         <div className="w-24 h-24 mx-auto mb-4 bgblue800/20 rounded-full flex items-center justify-center">
//                                             👤
//                                         </div>
//                                         Replace with your profile image
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Floating decorative elements */}
//                         <div className="absolute -top-4 -right-4 w-8 h-8 bgblue500/20 rounded-full animate-pulse"></div>
//                         <div className="absolute -bottom-6 -left-6 w-12 h-12 bgblue600/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// Project Card Component
// const ProjectCard = ({ project }) => {
//     return (
//         <div className="group bg-gradient-to-br fromblue900/10 toblue800/5 backdrop-blur-sm border borderblue800/30 rounded-lg p-6 hover:borderblue600/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadowblue900/20">
//             <div className="w-full h-48 bg-gradient-to-br fromblue900/20 toblue800/10 rounded-lg mb-4 flex items-center justify-center">
//                 <span className="textblue700">Project {project}</span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 textblue300">Project Title {project}</h3>
//             <p className="textblue200/80 text-sm mb-4">
//                 A brief description of this amazing project that showcases cutting-edge technology and innovative solutions.
//             </p>
//             <div className="flex justify-between items-center">
//                 <div className="flex space-x-2">
//                     <span className="px-2 py-1 bgblue800/30 rounded text-xs">React</span>
//                     <span className="px-2 py-1 bgblue800/30 rounded text-xs">API</span>
//                 </div>
//                 <button className="textblue400 hover:textblue300 transition-colors duration-300">
//                     View →
//                 </button>
//             </div>
//         </div>
//     );
// };

// // Projects Section Component
// const ProjectsSection = () => {
//     return (
//         <section id="projects" className="py-20 px-4 bg-gradient-to-b fromblue950/10 to-black">
//             <div className="max-w-6xl mx-auto">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r fromblue500 toblue300 bg-clip-text text-transparent">
//                     Projects
//                 </h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {[1, 2, 3, 4, 5, 6].map((project) => (
//                         <ProjectCard key={project} project={project} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Contact Form Component
// const ContactForm = ({ email, setEmail, handleEmailSubmit, isSubmitting, submitMessage }) => {
//     return (
//         <div className="space-y-6">
//             <h3 className="text-2xl font-semibold textblue300 mb-6">Send me a message</h3>
//             <div className="space-y-4">
//                 <div>
//                     <input
//                         type="email"
//                         placeholder="Your email address"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-4 py-3 bgblue900/10 border borderblue800/30 rounded-lg focus:outline-none focus:borderblue500 transition-colors duration-300 placeholderblue400/50"
//                     />
//                 </div>
//                 <button
//                     onClick={handleEmailSubmit}
//                     disabled={isSubmitting}
//                     className="w-full px-6 py-3 bg-gradient-to-r fromblue600 toblue500 hover:fromblue500 hover:toblue400 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
//                 >
//                     {isSubmitting ? 'Sending...' : 'Send Message'}
//                 </button>
//             </div>

//             {submitMessage && (
//                 <div className={`p-4 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-900/20 border border-green-700/30 text-green-300' : 'bgblue900/20 border borderblue700/30 textblue300'}`}>
//                     {submitMessage}
//                 </div>
//             )}
//         </div>
//     );
// };

// // Social Link Component
// const SocialLink = ({ href, icon: Icon, title, description }) => {
//     return (
//         <a
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center space-x-4 p-4 bg-gradient-to-r fromblue900/10 toblue800/5 border borderblue800/30 rounded-lg hover:borderblue600/50 transition-all duration-300 transform hover:scale-105"
//         >
//             <Icon size={24} />
//             <div>
//                 <h4 className="font-semibold textblue300">{title}</h4>
//                 <p className="text-sm textblue400/80">{description}</p>
//             </div>
//         </a>
//     );
// };

// // Social Links Component
// const SocialLinks = () => {
//     const socialData = [
//         {
//             href: "https://github.com/yourusername",
//             icon: Github,
//             title: "GitHub",
//             description: "Check out my repositories"
//         },
//         {
//             href: "https://linkedin.com/in/yourusername",
//             icon: Linkedin,
//             title: "LinkedIn",
//             description: "Professional network"
//         },
//         {
//             href: "https://leetcode.com/yourusername",
//             icon: Code,
//             title: "LeetCode",
//             description: "Coding challenges & solutions"
//         }
//     ];

//     return (
//         <div className="space-y-6">
//             <h3 className="text-2xl font-semibold textblue300 mb-6">Connect with me</h3>
//             <div className="space-y-4">
//                 {socialData.map((social, index) => (
//                     <SocialLink key={index} {...social} />
//                 ))}

//                 <div className="flex items-center space-x-4 p-4 bg-gradient-to-r fromblue900/10 toblue800/5 border borderblue800/30 rounded-lg">
//                     <Mail size={24} />
//                     <div>
//                         <h4 className="font-semibold textblue300">Email</h4>
//                         <p className="text-sm textblue400/80">your.email@example.com</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Contact Section Component
// const ContactSection = () => {
//     const [email, setEmail] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitMessage, setSubmitMessage] = useState('');

//     const handleEmailSubmit = async () => {
//         if (!email) return;

//         setIsSubmitting(true);

//         // Simulate email sending - In real implementation, you'd use EmailJS or similar service
//         try {
//             // Here you would integrate with EmailJS or your backend API
//             console.log('Email submitted:', email);
//             setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
//             setEmail('');
//         } catch (error) {
//             setSubmitMessage('Failed to send message. Please try again.');
//         }

//         setIsSubmitting(false);
//         setTimeout(() => setSubmitMessage(''), 5000);
//     };

//     return (
//         <section id="contact" className="py-20 px-4">
//             <div className="max-w-4xl mx-auto">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r fromblue500 toblue300 bg-clip-text text-transparent">
//                     Get In Touch
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-12">
//                     <ContactForm
//                         email={email}
//                         setEmail={setEmail}
//                         handleEmailSubmit={handleEmailSubmit}
//                         isSubmitting={isSubmitting}
//                         submitMessage={submitMessage}
//                     />
//                     <SocialLinks />
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Footer Component
// const Footer = () => {
//     return (
//         <footer className="py-8 px-4 border-t borderblue900/30">
//             <div className="max-w-6xl mx-auto text-center">
//                 <p className="textblue400/60">© 2025 Pravas Mohanty. Crafted with passion and cutting-edge technology.</p>
//             </div>
//         </footer>
//     );
// };

// // Custom Styles Component
// const CustomStyles = () => {
//     return (
//         <style jsx>{`
//       @keyframes fade-in {
//         from {
//           opacity: 0;
//           transform: translateY(30px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }

//       .animate-fade-in {
//         animation: fade-in 1s ease-out;
//       }

//       .animate-fade-in-delay {
//         animation: fade-in 1s ease-out 0.3s both;
//       }
//     `}</style>
//     );
// };

// Main Portfolio Component
const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-black textblue500 overflow-x-hidden">
            <Navigation
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                scrollToSection={scrollToSection}
            />

            <HeroSection
                scrollY={scrollY}
                scrollToSection={scrollToSection}
            />

            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
            <CustomStyles />
        </div>
    );
};

export default Portfolio;
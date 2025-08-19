import React from 'react'
import SocialLink from './SocialLink';
import { Github, Linkedin, Code, Mail } from 'lucide-react';

const SocialLinks = () => {
    const socialData = [
        {
            href: import.meta.env.VITE_GITHUB,
            icon: Github,
            title: "GitHub",
            description: "Check out my repositories"
        },
        {
            href: import.meta.env.VITE_LINKEDIN,
            icon: Linkedin,
            title: "LinkedIn",
            description: "Professional network"
        },
        {
            href: import.meta.env.VITE_LEETCODE,
            icon: Code,
            title: "LeetCode",
            description: "Coding challenges & solutions"
        }
    ];

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold textblue300 mb-6">Connect with me</h3>
            <div className="space-y-4">
                {socialData.map((social, index) => (
                    <SocialLink key={index} {...social} />
                ))}

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r fromblue900/10 toblue800/5 border borderblue800/30 rounded-lg">
                    <Mail size={24} />
                    <div>
                        <h4 className="font-semibold textblue300">Email</h4>
                        <p className="text-sm textblue400/80">{import.meta.env.VITE_EMAIL}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SocialLinks

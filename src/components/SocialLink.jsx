import React from 'react'

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

export default SocialLink

import React from 'react'

const SocialLink = ({ href, icon: Icon, title, description }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-gradient-to-r fromblue900/10 toblue800/5 border borderblue800/30 rounded-lg hover:borderblue600/50 transition-all duration-300 transform hover:scale-105"
        >
            <Icon size={24} />
            <div>
                <h4 className="font-semibold textblue300">{title}</h4>
                <p className="text-sm textblue400/80">{description}</p>
            </div>
        </a>
    );
};

export default SocialLink

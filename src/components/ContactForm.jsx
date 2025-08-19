import React from 'react'

const ContactForm = ({
    formData,
    setFormData,
    handleEmailSubmit,
    isSubmitting,
    submitMessage
}) => {
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

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
                        value={formData.from_name}
                        onChange={(e) => handleInputChange('from_name', e.target.value)}
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
                        value={formData.from_email}
                        onChange={(e) => handleInputChange('from_email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-blue-900/10 border border-blue-800/30 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 placeholder-blue-400/50 text-blue-100"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Your message..."
                        rows="4"
                        className="w-full px-4 py-3 bg-blue-900/10 border border-blue-800/30 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 placeholder-blue-400/50 text-blue-100 resize-vertical"
                    />
                </div>

                <button
                    type="button"
                    onClick={handleEmailSubmit}
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

export default ContactForm
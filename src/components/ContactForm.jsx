import React from 'react'

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
        <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-900/20 to-violet-800/10 rounded-xl border border-blue-800/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-blue-100 mb-6 text-center">
                Send me a message
            </h2>

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

export default ContactForm
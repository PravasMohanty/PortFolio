import React from 'react'

// Skills Grid Component
const SkillsGrid = () => {
    const skills = ['React', 'Node.js', 'Three.js', 'TypeScript', 'Python', 'MongoDB', 'Next.js', 'GraphQL'];

    return (
        <div className="flex flex-wrap gap-3 mt-8">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-sm hover:bg-violet-800/30 hover:border-violet-600/50 transition-all duration-300 text-blue-200 hover:text-violet-200 shadow-sm hover:shadow-blue-500/20"
                >
                    {skill}
                </span>
            ))}
        </div>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* About Me Content - Left Side */}
                    <div className="space-y-6">
                        <p className="text-lg text-blue-200 leading-relaxed">
                            I'm a passionate developer who loves creating futuristic digital experiences.
                            With expertise in modern web technologies, I bring ideas to life through clean code and innovative design.
                        </p>
                        <p className="text-lg text-blue-200 leading-relaxed">
                            My journey spans across full-stack development, 3D web experiences, and cutting-edge UI/UX design.
                            I'm always exploring new technologies to stay at the forefront of digital innovation.
                        </p>
                        <p className="text-lg text-blue-200 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                            or experimenting with the latest web development trends. I believe in continuous learning and staying
                            ahead of the curve in this ever-evolving field.
                        </p>
                        <SkillsGrid />
                    </div>

                    {/* Profile Image - Right Side */}
                    <div className="relative md:order-last order-first">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative w-full h-96 bg-gradient-to-br from-blue-900/20 to-violet-800/10 rounded-lg border border-blue-800/30 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/api/placeholder/400/500"
                                    alt="Profile"
                                    className="w-full h-full object-cover opacity-0"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-blue-600 text-center">
                                        <div className="w-24 h-24 mx-auto mb-4 bg-blue-800/20 rounded-full flex items-center justify-center">
                                            👤
                                        </div>
                                        <img src="images/pvas.jpg" alt="PVAS" class="w-full h-full object-cover" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-violet-600/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 -left-8 w-6 h-6 bg-violet-400/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection
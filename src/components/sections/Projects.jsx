import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { projects } from '../../data/portfolio';

const ProjectModal = ({ project, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="glass-strong rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl font-bold text-gradient-primary">{project.title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                        <HiX className="w-6 h-6" />
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="aspect-video rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                        <div className="w-full h-full flex items-center justify-center text-neutral-500">
                            {/* Placeholder for project image */}
                            <span className="text-6xl">🖼️</span>
                        </div>
                    </div>

                    <p className="text-lg text-neutral-700 dark:text-neutral-300">
                        {project.longDescription}
                    </p>

                    <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                            Key Highlights:
                        </h4>
                        <ul className="space-y-2">
                            {project.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                                    <span className="text-primary-500 mt-1">✓</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                            Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="gradient" size="md">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {project.links.live && (
                            <Button variant="primary" href={project.links.live} icon={<HiExternalLink />}>
                                View Live
                            </Button>
                        )}
                        {project.links.github && (
                            <Button variant="secondary" href={project.links.github} icon={<FaGithub />}>
                                View Code
                            </Button>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            className="group relative rounded-2xl overflow-hidden cursor-pointer glass-strong"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={onClick}
        >
            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-emerald-500/20 flex items-center justify-center overflow-hidden">
                <motion.div
                    className="text-6xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                >
                    💻
                </motion.div>

                {/* Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                    </h3>
                    {project.featured && (
                        <Badge variant="accent" size="sm">
                            Featured
                        </Badge>
                    )}
                </div>

                <p className="text-neutral-700 dark:text-neutral-300 mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="primary" size="sm">
                            {tech}
                        </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                        <Badge variant="neutral" size="sm">
                            +{project.technologies.length - 3}
                        </Badge>
                    )}
                </div>

                {/* Links - Hidden, shown on hover */}
                <motion.div
                    className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                >
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <HiExternalLink className="w-5 h-5" />
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section bg-neutral-100 dark:bg-neutral-900">
            <div className="container-custom">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="A showcase of my recent work and personal projects"
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === category
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50'
                                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;

import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { getProjects } from "../../config/projects";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalClosing, setIsModalClosing] = useState(false);
    const [loading, setLoading] = useState(true);
    
    // État pour gérer l'image actuellement zoomée
    const [zoomedImage, setZoomedImage] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true);
                const projectsData = await getProjects();
                setProjects(projectsData);
            } catch (error) {
                console.error('Erreur lors du chargement des projets:', error);
            } finally {
                setLoading(false);
            }
        };
        loadProjects();
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        setIsModalClosing(false);
    };

    const closeModal = () => {
        setIsModalClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setSelectedProject(null);
            setIsModalClosing(false);
            setZoomedImage(null); // Ferme le zoom si on ferme la modale
        }, 300);
    };

    // Fonction pour gérer le clic sur les images du contenu
    const handleContentClick = (e) => {
        // Si l'élément cliqué est une image
        if (e.target.tagName === 'IMG') {
            // On vérifie que ce n'est pas une petite icône
            if (!e.target.src.includes('#icon')) {
                e.preventDefault();
                setZoomedImage(e.target.src);
            }
        }
    };

    if (loading) {
        return (
            <div className={styles.container} data-section="projects">
                <h2 className={styles.title}>Mes projets</h2>
                <div className={styles.loading}>
                    <p>Chargement des projets...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container} data-section="projects">
            <h2 className={styles.title}>Mes projets</h2>

            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={styles.projectCard}
                        onClick={() => openModal(project)}
                    >
                        <div className={styles.projectImage}>
                            <img src={project.cover} alt={project.title} />
                        </div>
                        <div className={styles.projectInfo}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDate}>{project.date}</p>
                            <div className={styles.projectTags}>
                                {project.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedProject && (
                <div className={`${styles.modalOverlay} ${isModalClosing ? styles.modalOverlayClosing : ''}`} onClick={closeModal}>
                    <div className={`${styles.modal} ${isModalOpen && !isModalClosing ? styles.modalOpen : ''} ${isModalClosing ? styles.modalClosing : ''}`} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            ×
                        </button>
                        <div className={styles.modalContent}>
                            <div className={styles.modalHeader}>
                                <h2>{selectedProject.title}</h2>
                                <p className={styles.modalDate}>{selectedProject.date}</p>
                                <div className={styles.modalTags}>
                                    {selectedProject.tags.map((tag, index) => (
                                        <span key={index} className={styles.modalTag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.modalBody}>
                                <div
                                    className={styles.markdownContent}
                                    dangerouslySetInnerHTML={{ __html: selectedProject.content }}
                                    onClick={handleContentClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox avec bouton de téléchargement */}
            {zoomedImage && (
                <div className={styles.lightbox} onClick={() => setZoomedImage(null)}>
                    <div className={styles.lightboxContent}>
                        <img src={zoomedImage} alt="Zoom" onClick={(e) => e.stopPropagation()} />
                        
                        <button 
                            className={styles.closeLightbox} 
                            onClick={() => setZoomedImage(null)}
                            title="Fermer"
                        >
                            ×
                        </button>

                        {/* NOUVEAU : Bouton de téléchargement */}
                        <a 
                            href={zoomedImage} 
                            download
                            className={styles.downloadButton}
                            onClick={(e) => e.stopPropagation()}
                            title="Télécharger l'image"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
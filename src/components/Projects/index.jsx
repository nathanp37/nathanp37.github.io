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

    // --- NOUVEAUX ÉTATS POUR LE MOT DE PASSE ---
    const [isProjectUnlocked, setIsProjectUnlocked] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordError, setPasswordError] = useState("");

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
        
        // --- NOUVEAU : Réinitialiser les états du mot de passe ---
        setPasswordInput("");
        setPasswordError("");
        // Si le projet n'a pas de mot de passe, il est déverrouillé par défaut
        setIsProjectUnlocked(!project.password);
    };

    const closeModal = () => {
        setIsModalClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setSelectedProject(null);
            setIsModalClosing(false);
            setZoomedImage(null);
        }, 300);
    };

    const handleContentClick = (e) => {
        if (e.target.tagName === 'IMG') {
            if (!e.target.src.includes('#icon')) {
                e.preventDefault();
                setZoomedImage(e.target.src);
            }
        }
    };

    // --- NOUVEAU : Fonction pour vérifier le mot de passe ---
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordInput === selectedProject.password) {
            setIsProjectUnlocked(true);
            setPasswordError("");
        } else {
            setPasswordError("Mot de passe incorrect 🔒");
            setPasswordInput(""); // On vide le champ
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
                            {/* NOUVEAU (Optionnel) : Afficher une icône de cadenas sur la carte si protégé */}
                            {project.password && (
                                <div className={styles.lockedIcon}>🔒 Protégé</div>
                            )}
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
                                <h2>{selectedProject.title} {selectedProject.password && !isProjectUnlocked ? "🔒" : ""}</h2>
                                <p className={styles.modalDate}>{selectedProject.date}</p>
                                <div className={styles.modalTags}>
                                    {selectedProject.tags.map((tag, index) => (
                                        <span key={index} className={styles.modalTag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className={styles.modalBody}>
                                {/* NOUVEAU : Condition pour afficher le formulaire ou le contenu */}
                                {!isProjectUnlocked ? (
                                    <div className={styles.passwordContainer}>
                                        <h3>Ce projet est privé</h3>
                                        <p>Veuillez entrer le mot de passe pour y accéder.</p>
                                        <form onSubmit={handlePasswordSubmit}>
                                            <input 
                                                type="password" 
                                                value={passwordInput} 
                                                onChange={(e) => setPasswordInput(e.target.value)} 
                                                placeholder="Mot de passe..."
                                                autoFocus
                                            />
                                            <button type="submit">Déverrouiller</button>
                                        </form>
                                        {passwordError && <p className={styles.errorText}>{passwordError}</p>}
                                    </div>
                                ) : (
                                    <div
                                        className={styles.markdownContent}
                                        dangerouslySetInnerHTML={{ __html: selectedProject.content }}
                                        onClick={handleContentClick}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox avec bouton de téléchargement (inchangé) */}
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
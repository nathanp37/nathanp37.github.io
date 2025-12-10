import styles from "./index.module.scss";
import Button from "../Button/index.jsx";
import Logo from "../../assets/Logo";

import React, { useEffect, useState } from "react";
import cvFile from "../../assets/mon-cv.pdf";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuRef = React.useRef(null);
    const borderRef = React.useRef(null);

    const handleMouseOver = (e) => {
        const itemRect = e.target.getBoundingClientRect();
        const menuRect = menuRef.current.getBoundingClientRect();
        const leftPos = itemRect.left - menuRect.left;
        const width = itemRect.width;
        borderRef.current.style.transform = `translateX(${leftPos}px)`;
        borderRef.current.style.width = `${width}px`;
    };

    const handleMouseOut = () => {
        borderRef.current.style.width = '0px';
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleProjectsClick = (e) => {
        e.preventDefault();
        const projectsSection = document.querySelector('[data-section="projects"]');
        if (projectsSection) {
            /* --- CORRECTION SCROLL --- */
            // On récupère la position de la section par rapport à la fenêtre
            const elementPosition = projectsSection.getBoundingClientRect().top;
            // On ajoute le scroll actuel pour avoir la position absolue
            // Et on SOUSTRAIT une marge (offset) pour compenser le header fixe
            const headerOffset = 120; // 120px correspond à peu près à la hauteur du header + un peu d'espace
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            /* ------------------------- */
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.content}>
                <nav>
                    <ul className={styles.menu} ref={menuRef}>
                        <li><a 
    href={cvFile}
    target="_blank" 
    rel="noopener noreferrer"
    onMouseOver={handleMouseOver} 
    onMouseOut={handleMouseOut}
>
    Mon CV
</a></li>
                        <li><a href="#" onClick={handleProjectsClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Projets</a></li>
                        <div className={styles.border} ref={borderRef}></div>
                    </ul>
                </nav>
                <div 
                    className={`${styles.logo} ${isLogoHovered ? styles.logoHovered : ""}`}
                    onMouseEnter={() => setIsLogoHovered(true)}
                    onMouseLeave={() => setIsLogoHovered(false)}
                    onClick={handleLogoClick}
                >
                    <Logo />
                </div>
                <div className={styles.getInTouch}>
                    <Button mailto={true}>Contact</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;
import styles from "./index.module.scss";

const HeroBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <p className={styles.title}> Nathan <br></br><span>PRUNOTTO</span></p>
                <p className={styles.descriptionOfDescription}>
                    Jeune diplômé de l’ENSIM, spécialisé en acoustique et vibrations, passionné par l’innovation et la recherche.
                    Candidat à une thèse ou à un poste d’ingénieur en traitement du signal, imagerie, vibrations ou intelligence artificielle.
                </p>
            </div>
            <div className={styles.containerSkills}>
                <div className={styles.skills}>
                    {/* Compétences existantes */}
                    <div className={`${styles.skill} ${styles.python}`}>Matlab</div>
                    <div className={`${styles.skill} ${styles.c}`}>Solidworks</div>
                    <div className={`${styles.skill} ${styles.python}`}>Python</div>
                    <div className={`${styles.skill} ${styles.bash}`}>Comsol</div>
                    
                    {/* Nouvelles compétences ajoutées depuis le CV */}
                    <div className={`${styles.skill} ${styles.cpp}`}>Kicad</div>
                    <div className={`${styles.skill} ${styles.c}`}>Arduino</div>
                    <div className={`${styles.skill} ${styles.python}`}>AEwin</div>
                    <div className={`${styles.skill} ${styles.bash}`}>Latex</div>
                </div>
            </div>
            <div className={styles.banner}>
                <img src={"/hero_banner.png"} alt="HeroBanner"/>
            </div>
        </div>
    )
}

export default HeroBanner;
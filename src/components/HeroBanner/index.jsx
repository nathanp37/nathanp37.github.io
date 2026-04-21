import styles from "./index.module.scss";

const HeroBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <p className={styles.title}> Nathan <br></br><span>PRUNOTTO</span></p>
                <p className={styles.descriptionOfDescription}>
                    Jeune diplômé de l’ENSIM, spécialisé en acoustique et vibrations, passionné par l’innovation et la recherche.
                    Ingénieur Calcul & Essais chez Vibrateam, actuellement en mission chez Safran Aircraft Engines (site de Villaroche), je réalise des essais vibratoires sur des pièces de moteurs aéronautiques.
                </p>
            </div>
            <div className={styles.containerSkills}>
                <div className={styles.skills}>
                    {/* Compétences existantes */}
                    <div className={`${styles.skill} ${styles.python}`}>Matlab</div>
                    <div className={`${styles.skill} ${styles.c}`}>Solidworks</div>
                    <div className={`${styles.skill} ${styles.python}`}>Python</div>
                    <div className={`${styles.skill} ${styles.c}`}>Comsol</div>
                    
                    {/* Nouvelles compétences ajoutées depuis le CV */}
                    <div className={`${styles.skill} ${styles.cpp}`}>Kicad</div>
                    <div className={`${styles.skill} ${styles.bash}`}>Arduino</div>
                    <div className={`${styles.skill} ${styles.cpp}`}>AEwin</div>
                    <div className={`${styles.skill} ${styles.bash}`}>Latex</div>
                    <div className={`${styles.skill} ${styles.c}`}>Anglais B2</div>
                </div>
            </div>
            <div className={styles.banner}>
                <img src={"/hero_banner.png"} alt="HeroBanner"/>
            </div>
        </div>
    )
}

export default HeroBanner;
import { useEffect } from "react"; // Ne pas oublier d'importer useEffect
import styles from "./styles/main.module.scss";
import Header from "./components/Header/index.jsx";
import HeroBanner from "./components/HeroBanner/index.jsx";
import Projects from "./components/Projects/index.jsx";

const App = () => {
    useEffect(() => {
    const DISCORD_WEBHOOK_URL = 'VOTRE_URL_WEBHOOK';

    const sendNotification = async () => {
        // Récupère la date et l'heure actuelle
        const now = new Date();
        const dateString = now.toLocaleDateString('fr-FR'); // ex: 18/12/2024
        const timeString = now.toLocaleTimeString('fr-FR'); // ex: 16:30:05

        try {
            await fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `🚀 Nouvelle visite sur ton portfolio !\n📅 **Date** : ${dateString}\n⏰ **Heure** : ${timeString}`,
                    username: "Portfolio Watcher"
                }),
            });
        } catch (error) {
            console.error("Erreur notification Discord:", error);
        }
    };

    sendNotification();
}, []);

    return (
        <div className={styles.container}>
            <Header />
            <HeroBanner />
            <div className={styles.projects}>
                <Projects />
            </div>
        </div>
    );
};

export default App;



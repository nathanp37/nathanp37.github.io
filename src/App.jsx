import { useEffect } from "react"; // Ne pas oublier d'importer useEffect
import styles from "./styles/main.module.scss";
import Header from "./components/Header/index.jsx";
import HeroBanner from "./components/HeroBanner/index.jsx";
import Projects from "./components/Projects/index.jsx";

const App = () => {
    useEffect(() => {
        // Collez votre URL ici
        const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1451230225760522405/kja_Rq2V0HYM6C7mqptqkpiNmcT09BX4rLZrTN6g0_jWK7O3lJkdRPz7AEDNtlF7a0LM';

        // Cette fonction envoie la notification
        const sendNotification = async () => {
            try {
                await fetch(DISCORD_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        content: "🚀 Quelqu'un vient d'ouvrir ton portfolio !",
                        username: "Portfolio Watcher"
                    }),
                });
            } catch (error) {
                console.error("Erreur lors de l'envoi de la notification", error);
            }
        };

        sendNotification();
    }, []); // Le tableau vide [] assure que ça ne s'exécute qu'une fois par visite

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



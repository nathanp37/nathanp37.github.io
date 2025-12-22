import { useEffect } from "react";
import styles from "./styles/main.module.scss";
import Header from "./components/Header/index.jsx";
import HeroBanner from "./components/HeroBanner/index.jsx";
import Projects from "./components/Projects/index.jsx";

const App = () => {
    useEffect(() => {
    const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1451230225760522405/kja_Rq2V0HYM6C7mqptqkpiNmcT09BX4rLZrTN6g0_jWK7O3lJkdRPz7AEDNtlF7a0LM';

    const sendNotification = async () => {
     
        const now = new Date();
        const dateString = now.toLocaleDateString('fr-FR');
        const timeString = now.toLocaleTimeString('fr-FR');

        try {
            await fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `🚀 Nouvelle visite sur ton portfolio !\n📅 Date : ${dateString}\n⏰ Heure : ${timeString}`,
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



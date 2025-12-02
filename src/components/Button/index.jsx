import styles from "./index.module.scss";

const Button = ({children, mailto}) => {
    const handleClick = () => {
        if (mailto) {
            window.location.href = "mailto:nathanprunotto@gmail.com";
        }
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            <span>{children}</span>
        </button>
    )
}

export default Button;
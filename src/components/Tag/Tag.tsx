import styles from "./Tag.module.css";

type Props = {
    text: string;
    onClick: () => void;
};

function Tag({ text, onClick }: Props) {
    return (
        <span className={styles.tag} onClick={onClick}>
            {text}
        </span>
    );
}

export default Tag;

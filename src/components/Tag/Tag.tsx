import styles from "./Tag.module.css";

type Props = {
    text: string;
    onClick: () => void;
};

function Tag({ text, onClick }: Props) {
    return (
        <span
            className={styles.tag}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            {text}
        </span>
    );
}

export default Tag;

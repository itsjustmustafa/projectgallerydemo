import Tag from "../Tag/Tag";
import styles from "./TagList.module.css";

type Props = {
    tags: string[];
    prefix?: string;
    suffix?: string;
    onClick: (tagText: string) => void;
};

function TagList({ tags, prefix = "", suffix = "", onClick }: Props) {
    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <Tag
                    text={prefix + tag + suffix}
                    onClick={() => onClick(tag)}
                    key={index}
                />
            ))}
        </div>
    );
}

export default TagList;

import styles from "./ProjectCard.module.css";
import { ProjectMetadata } from "../../types";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag/Tag";
import TagList from "../TagList/TagList";

type Props = {
    project: ProjectMetadata;
};

function openInNewTab(url: string) {
    window.open(url, "_blank");
}

function ProjectCard({ project }: Props) {
    const navigate = useNavigate();
    function openInView(id: string) {
        navigate("/view/" + id);
    }
    function addTagToPage(tag: string) {
        navigate("/tagged/" + tag);
    }
    return (
        <div className={styles.card}>
            <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.image}
            />
            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <TagList
                    tags={project.tags}
                    prefix="#"
                    onClick={addTagToPage}
                />
                {/* <div className={styles.tags}>
                    {project.tags.map((tag, index) => (
                        // <span key={tag} className={styles.tag}>
                        //     {tag}
                        // </span>
                        <Tag text={tag} key={index} />
                    ))}
                </div> */}
                <div className={styles.footer}>
                    <button
                        onClick={() => openInView(project.id as string)}
                        className={styles.button}
                    >
                        View Project
                    </button>
                    {project.repository && (
                        <a
                            onClick={() =>
                                openInNewTab(project.repository as string)
                            }
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

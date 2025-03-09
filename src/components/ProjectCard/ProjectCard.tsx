import styles from "./ProjectCard.module.css";
import { ProjectMetadata } from "../../types";
import { useNavigate } from "react-router-dom";
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
        <div
            className={styles.card}
            onClick={() => {
                openInView(project.id as string);
            }}
        >
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
                <div className={styles.footer}>
                    {project.repository && (
                        <a
                            onClick={(e) => {
                                e.stopPropagation();
                                openInNewTab(project.repository as string);
                            }}
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

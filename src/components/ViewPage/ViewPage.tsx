import { useNavigate, useParams } from "react-router-dom";
import { ProjectMetadata } from "../../types";
import styles from "./ViewPage.module.css";

type Props = {
    projects: ProjectMetadata[];
};

function ViewPage({ projects }: Props) {
    const navigate = useNavigate();
    const { page_id } = useParams<{ page_id: string }>();
    const viewedProject = projects.find((project) => project.id === page_id);

    if (viewedProject === undefined || page_id === null) {
        return <p>Page not found...</p>;
    }

    function goBack() {
        navigate("/");
    }

    function goToLink() {
        window.open(viewedProject?.liveDemoUrl, "_blank");
    }

    // return <p>Yo are you looking for {page_id} ? nice man</p>;
    return (
        <>
            <div className={styles.buttonContainer}>
                <button className={styles.backButton} onClick={goBack}>
                    ⬅️ Back
                </button>
                <button className={styles.linkButton} onClick={goToLink}>
                    🔗 Go To Page
                </button>
            </div>
            <iframe
                src={viewedProject.liveDemoUrl}
                className={styles.responsive_iframe}
            ></iframe>
        </>
    );
}

export default ViewPage;

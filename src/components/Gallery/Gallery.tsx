import { ProjectMetadata } from "../../types";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Gallery.module.css";

type Props = {
    metadata: ProjectMetadata[];
    searchText: string;
    searchTags: string[];
};

function jaccardWordsSimilarity(words1: string[], words2: string[]): number {
    const set1 = new Set(words1.map((word) => word.toLowerCase()));
    const set2 = new Set(words2.map((word) => word.toLowerCase()));
    const intersection = new Set([...set1].filter((word) => set2.has(word)))
        .size;
    const union = new Set([...set1, ...set2]).size;

    return intersection / union; // Jaccard similarity score
}

function jaccardSimilarity(text1: string, text2: string): number {
    const words1 = text1.split(/\s+/);
    const words2 = text2.split(/\s+/);

    return jaccardWordsSimilarity(words1, words2);
}

function rankMetadata(
    query: string,
    tags: string[],
    metadatas: ProjectMetadata[]
): ProjectMetadata[] {
    console.log(`ranking for ${query} with tags: ${tags}`);
    return metadatas
        .map((metadata) => ({
            metadata,
            score:
                jaccardSimilarity(
                    query,
                    metadata.title + " " + metadata.description
                ) +
                jaccardWordsSimilarity(tags, metadata.tags) +
                ((
                    metadata.title +
                    " " +
                    metadata.description +
                    " " +
                    metadata.tags.join(" ")
                )
                    .toLowerCase()
                    .includes(query) && query !== ""
                    ? 0.1
                    : 0),
        }))
        .sort((a, b) => b.score - a.score)
        .filter((metadataAndScore) => {
            console.log(
                `${metadataAndScore.metadata.id} => ${metadataAndScore.score}`
            );
            return metadataAndScore.score > 0;
        })
        .map((metadataAndScore) => metadataAndScore.metadata);
}

function Gallery({ metadata, searchText, searchTags }: Props) {
    let queriedMetadata = metadata;

    if (searchText !== "" || searchTags.length > 0) {
        queriedMetadata = rankMetadata(searchText, searchTags, metadata);
    }

    return (
        <div className={styles.gallery}>
            {queriedMetadata.map((projectData) => (
                <ProjectCard project={projectData} />
            ))}
        </div>
    );
}

export default Gallery;

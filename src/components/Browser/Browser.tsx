import { useState } from "react";
import Gallery from "../Gallery/Gallery";
import SearchBar from "../SearchBar/SearchBar";
import { ProjectMetadata } from "../../types";
import TagList from "../TagList/TagList";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Browser.module.css";

type Props = {
    siteData: ProjectMetadata[];
};

function Browser({ siteData }: Props) {
    const { queryTag } = useParams<{ queryTag: string }>();
    const navigate = useNavigate();
    function handleSearch(input: string) {
        setQuery(input);
    }

    const queryTags = queryTag === undefined ? [] : [queryTag];

    const [query, setQuery] = useState<string>("");

    function removeQueryTag(_: string) {
        navigate("/");
    }
    return (
        <div className={styles.gallery}>
            <SearchBar query={query} onQueryChange={handleSearch} />
            <TagList tags={queryTags} suffix={" ×"} onClick={removeQueryTag} />
            <Gallery
                metadata={siteData}
                searchText={query}
                searchTags={queryTags}
            />
        </div>
    );
}

export default Browser;

import styles from "./SearchBar.module.css";

type Props = {
    query: string;
    onQueryChange: (query: string) => void;
};

function SearchBar({ query, onQueryChange }: Props) {
    return (
        <>
            <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search for projects..."
                className={styles.searchBar}
            />
        </>
    );
}

export default SearchBar;

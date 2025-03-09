import { useEffect, useState } from "react";
import "./App.css";
import type { ProjectMetadata } from "./types";
import { Route, Routes } from "react-router-dom";
import ViewPage from "./components/ViewPage/ViewPage";
import Browser from "./components/Browser/Browser";
import Header from "./components/Header/Header";

function App() {
    const [siteData, setSiteData] = useState<ProjectMetadata[]>([]);

    useEffect(() => {
        fetch("/site_manifest.json")
            .then((response) => response.json())
            .then((data: ProjectMetadata[]) => setSiteData(data));
    }, []);

    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route
                        path="/view/:page_id"
                        element={<ViewPage projects={siteData} />}
                    />
                    <Route path="/" element={<Browser siteData={siteData} />} />
                    <Route
                        path="/tagged/:queryTag"
                        element={<Browser siteData={siteData} />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;

import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/preloader";
import { CategoryList } from "../components/categoryList";
import { Search } from "../components/search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
                )
        );
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    }, []);

    return (
        <>
            
            {!catalog.length ? (
                <Preloader />
            ) : (
                <div>
                    <Search cb={handleSearch} />
                    <CategoryList catalog={filteredCatalog} />
                </div>
            )}
        </>
    );
}

export { Home };

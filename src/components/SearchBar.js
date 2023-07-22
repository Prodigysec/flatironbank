import React, { useState } from "react";

function SearchBar({ onSearch, onSearchTermChange  }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearchTermChange(newSearchTerm);
    };

    const handleSearch = () => {
        searchTerm.trim === '' ? onSearch(null) : onSearch(searchTerm)
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Search by description..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );

}

export default SearchBar;
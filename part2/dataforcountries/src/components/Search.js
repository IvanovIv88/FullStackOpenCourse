import React from 'react';

const Search = ({ newSearch, handleSearchChange }) => {
    return (
        <div>
            find countrires <input value={newSearch} onChange={handleSearchChange} />
        </div>
    )

}

export default Search
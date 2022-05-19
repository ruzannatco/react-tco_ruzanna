import "./styles.css"

export const Search = ({handleSearchChange}) => {
    return (
        <div className="search-form">
            <input type="search" placeholder="Search" name="search" onChange={handleSearchChange} />
        </div>
    );
}
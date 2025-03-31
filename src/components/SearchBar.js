import '../css/SearchBar.css';
import searchIcon from "../assets/images/search.png";

function SearchBar() {
    return (
        <div id="searchBar">
            <img src={searchIcon} alt={"Search Icon"} className="searchImage" height={20} width={20} />
            <input type="text" id="search" placeholder="Search"/>
        </div>
    );
}
  
export default SearchBar;
import '../css/Navigation.css';
import NavigationHeading from "./NavigationHeading";
import SearchBar from "./SearchBar";

function Navigation({appName}) {
    return (
        <div id="nav" className="navigation navigationHovering">
            <NavigationHeading appName={appName}/>
            <SearchBar/>
            <hr className="horizontalBreak"/>
        </div>
    );
}
  
export default Navigation;
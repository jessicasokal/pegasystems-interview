import '../css/Navigation.css';
import NavigationHeading from "./NavigationHeading";
import SearchBar from "./SearchBar";
import NavigationTabs from "./NavigationTabs";
import NavigationFixedTabs from "./NavigationFixedTabs";

function Navigation({appName}) {
    return (
        <div id="nav" className="navigation navigationHovering">
            <NavigationHeading appName={appName}/>
            <SearchBar/>
            <hr className="horizontalBreak"/>
            <NavigationTabs/>
            <NavigationFixedTabs/>
        </div>
    );
}
  
export default Navigation;
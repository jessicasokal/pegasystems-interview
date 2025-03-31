import '../css/Navigation.css';
import NavigationHeading from "./NavigationHeading";
import SearchBar from "./SearchBar";
import NavigationTabs from "./NavigationTabs";
import NavigationFixedTabs from "./NavigationFixedTabs";

function Navigation({appName, user, tabs, fixedTabs, logo}) {
    return (
        <div id="nav" className="navigation navigationHovering">
            <NavigationHeading logo={logo} appName={appName}/>
            <SearchBar/>
            <hr className="horizontalBreak"/>
            <NavigationTabs tabs={tabs}/>
            <NavigationFixedTabs tabs={fixedTabs} user={user}/>
        </div>
    );
}
  
export default Navigation;
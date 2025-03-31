import navigationTabs from "../data/navigationTabs";
import NavigationTab from "./NavigationTab";

function NavigationTabs() {
    return (
        <div id="navigationTabs">
            {navigationTabs.map((tab) => {
                return <NavigationTab label={tab.label} icon={tab.icon} link={tab.link}/>
            })}
        </div>
    );
}
  
export default NavigationTabs;
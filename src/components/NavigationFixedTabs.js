import navigationFixedTabs from "../data/navigationFixedTabs";
import NavigationTab from "./NavigationTab";

function NavigationFixedTabs() {
    return (
        <div id="navigationFixedTabs">
            <hr className="horizontalBreak"/>
            {navigationFixedTabs.map((tab) => {
                return <NavigationTab label={tab.label} icon={tab.icon} link={tab.link}/>
            })}
        </div>
    );
}
  
export default NavigationFixedTabs;
import NavigationTab from "./NavigationTab";
import '../css/Navigation.css';

function NavigationTabs({tabs}) {
    return (
        <div id="navigationTabs" className="mainNav">
            {tabs.map((tab) => {
                return (
                    <NavigationTab label={tab.label} icon={tab.icon} link={tab.link} hasSubNav={tab.hasSubNav} subNavTabs={tab.subNavTabs}/> 
                );
            })}
        </div>
    );
}
  
export default NavigationTabs;
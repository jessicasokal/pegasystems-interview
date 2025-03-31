import NavigationTab from "./NavigationTab";

function NavigationTabs({tabs}) {
    return (
        <div id="navigationTabs">
            {tabs.map((tab) => {
                return (
                    <NavigationTab label={tab.label} icon={tab.icon} link={tab.link} hasSubNav={tab.hasSubNav} subNavTabs={tab.subNavTabs}/> 
                );
            })}
        </div>
    );
}
  
export default NavigationTabs;
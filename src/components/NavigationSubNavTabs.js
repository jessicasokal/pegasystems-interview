import NavigationSubTab from "./NavigationSubTab";

function NavigationSubNavTabs({subNavTabs}) {
    return (
        <div id="navigationTabs">
            {
                subNavTabs.map((subtab) => {
                    return <NavigationSubTab label={subtab.label} link={subtab.link}/> 
                })
            }
        </div>
    );
}
  
export default NavigationSubNavTabs;
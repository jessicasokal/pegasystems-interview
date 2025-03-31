import NavigationSubTab from "./NavigationSubTab";
import '../css/Navigation.css';

function NavigationSubNavTabs({subNavTabs}) {
    return (
        <div id="navigationSubNavTabs" className="subNav">
            {
                subNavTabs.map((subtab) => {
                    return <NavigationSubTab label={subtab.label} link={subtab.link}/> 
                })
            }
        </div>
    );
}
  
export default NavigationSubNavTabs;
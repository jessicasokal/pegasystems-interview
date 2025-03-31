import { Link } from "react-router-dom";
import NavigationIcon from "./NavigationIcon";
import '../css/NavigationTab.css';
import { useState } from "react";
import NavigationSubNavTabs from "./NavigationSubNavTabs";

function NavigationTab({label, icon, link, hasSubNav, subNavTabs}) {
    const [showSubNav, setShowSubnav] = useState(false);
    const toggleSubNav = () => setShowSubnav(!showSubNav);

    if (hasSubNav) {
        return (
                <>
                    <div id="navigationTab" className="navigation-row" onClick={toggleSubNav}>
                        <NavigationIcon iconImage={icon.iconImage} iconImageAlt={icon.iconImageAlt}/>
                        <div className="navigationItemLabel">
                            {label}
                        </div>
                    </div>
                    { showSubNav ? <NavigationSubNavTabs subNavTabs={subNavTabs}/> : null }
                </>
        );
    }
    else {
        return (
            <Link to={link}>
                <div id="navigationTab" className="navigation-row">
                    <NavigationIcon iconImage={icon.iconImage} iconImageAlt={icon.iconImageAlt}/>
                    <div className="navigationItemLabel">
                        {label}
                    </div>
                </div>
            </Link>
        );
    }
}
  
export default NavigationTab;
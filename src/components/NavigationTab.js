import { Link } from "react-router-dom";
import NavigationIcon from "./NavigationIcon";
import '../css/NavigationTab.css';

function NavigationTab({label, icon, link}) {
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
  
export default NavigationTab;
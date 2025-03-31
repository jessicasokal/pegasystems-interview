import { Link } from "react-router-dom";
import NavigationIcon from "./NavigationIcon";
import '../css/NavigationTab.css';

function NavigationUserProfileTab({profilePhoto, firstname, lastname, link}) {
        return (
            <Link to={link}>
                <div id="navigationTab" className="navigation-row">
                    <NavigationIcon iconImage={profilePhoto} iconImageAlt={"Profile Photo"}/>
                    <div className="navigationItemLabel">
                        {firstname} {lastname}
                    </div>
                </div>
            </Link>
        );
}
  
export default NavigationUserProfileTab;
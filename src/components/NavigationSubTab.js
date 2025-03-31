import { Link } from "react-router-dom";
import '../css/NavigationTab.css';

function NavigationSubTab({label, link}) {
        return (
            <Link to={link}>
                <div id="navigationTab" className={"navigation-row subTab"}>
                    <div className="navigationItemLabel subNavLabel">
                        {label}
                    </div>
                </div>
            </Link>
        );
}
  
export default NavigationSubTab;
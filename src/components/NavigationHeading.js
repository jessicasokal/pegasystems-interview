import '../css/Navigation.css';
import NavigationLogo from "./NavigationLogo";
import NavigationAppName from "./NavigationAppName";

function NavigationHeading({appName, logo}) {
    return (
            <div id="heading">
                <NavigationLogo logo={logo}/>
                <NavigationAppName appName={appName}/>
            </div>      
    );
}
  
export default NavigationHeading;
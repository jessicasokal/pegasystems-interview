import '../css/Navigation.css';
import NavigationLogo from "./NavigationLogo";
import NavigationAppName from "./NavigationAppName";

function NavigationHeading({appName}) {
    return (
            <div id="heading">
                <NavigationLogo/>
                <NavigationAppName appName={appName}/>
            </div>      
    );
}
  
export default NavigationHeading;
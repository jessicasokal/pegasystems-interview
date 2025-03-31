import NavigationTab from "./NavigationTab";
import NavigationUserProfileTab from "./NavigationUserProfileTab";

function NavigationFixedTabs({tabs, user}) {
    return (
        <div id="navigationFixedTabs">
            <hr className="horizontalBreak"/>
            {tabs.map((tab) => {
                return <NavigationTab label={tab.label} icon={tab.icon} link={tab.link}/>
            })}
            <NavigationUserProfileTab profilePhoto={user.profilePhoto} firstname={user.firstname} lastname={user.lastname} link={"/profile"}/>
        </div>
    );
}
  
export default NavigationFixedTabs;
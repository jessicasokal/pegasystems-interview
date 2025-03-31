
function NavigationIcon({iconImage, iconImageAlt}) {
    return (
        <div className="navigationItemIcon">
            <img src={iconImage} alt={iconImageAlt} width="23px" height="23px" className="navigationIcon"></img>
        </div>
    );
}
  
export default NavigationIcon;
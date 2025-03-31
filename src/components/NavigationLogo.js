import pegaLogo from '../assets/images/pegalogo.png';

function NavigationLogo() {
    return (
        <div id="logo">
            <img src={pegaLogo} width={46} height={12} alt={"PEGA Logo"} className="pegaLogo"></img>
        </div>     
    );
}
  
export default NavigationLogo;
import logo from "../asset/icons/ninja.png";
import facebook from "../asset/icons/facebook.png";
import discord from "../asset/icons/discord.png";
import whatsapp from "../asset/icons/whatsapp.png";
const Navbar = () =>{
    return(
        <div className= "flex justify-between items-center px-2 py-2">
            <a href="http://localhost:3000/">
                <img src= {logo} alt="logo" width={50} className="cursor-pointer"/>
            </a>

            <ul className="hidden md:flex">
                <li className="px-2 py-4">
                    <a href="https://www.facebook.com/" target="blank">
                        <img src={facebook} alt="facebook" width={30}/>{" "}       
                    </a>             
                </li>
                <li className="px-2 py-4">
                    <a href="https://www.whatsapp.com/?lang=th_TH" target="blank">
                        <img src={whatsapp} alt="whatsapp" width={30}/>{" "}
                    </a>
                </li>
                <li className="px-2 py-4">
                    <a href="https://www.discord.com/" target="blank">
                        <img src={discord} alt="discord" width={30}/>{" "}
                    </a>
                </li> 
            </ul>
            
        </div>
    );
}

export default Navbar;
import profile from "../asset/icons/user.png";
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate();
    const handleToDetail = () => { navigate("/details") };
    return (
        <div className="font-mono text-center">
            <p className="text-5xl font-bold uppercase">About me</p>{"\n"}
            <div className="flex justify-center">
                <img src={profile} alt="profile" width={50} className="w-[10%]" />
            </div>
            <p className="text-2xl font-bold uppercase text-blue-900">creative portfolio</p>{"\n"}
            <p className="text-md mt-2 font-bold text-white mx-36">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>{"\n"}
            {" "}
            <button className="text-pink-300 uppercase underline" onClick={() => handleToDetail()}>next</button>
        </div>
    );
}

export default LandingPage;
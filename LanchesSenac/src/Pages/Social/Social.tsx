import { Link } from "react-router-dom";
import "./Social.css";
import HomeIcon from '@mui/icons-material/Home'; 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import Person2Icon from '@mui/icons-material/Person2';
import SearchIcon from '@mui/icons-material/Search';


const Social = () => {
    return (
        <>
        <div>
        <div className="social">
            <Link to={"/homepage"} style={{textDecoration:"none"}}>
            <div> Social Media Lanches Senac</div>
            </Link>
            <DarkModeIcon/>
            <AppsIcon/>
            <Person2Icon/>
            <div className="search">
                <SearchIcon/>
        <input type="text" placeholder="Search..." />

            </div>
        </div>
        <div className="container d-flex ">


        </div>
        </div>
        </>
    );
};
export default Social;
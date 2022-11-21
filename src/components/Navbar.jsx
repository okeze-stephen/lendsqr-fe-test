import "../assets/styles/main.scss";
import SearchOutlineIcon from "@mui/icons-material/SearchOffOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Navbar = () => {
  return (
    <div>
        <div class="navbar">
          <div className="logoContainer">
            <img style={{height: "50px"}} src="./img/lendsqr_logo.png"/>            
          </div>
          <div className="wrapper">
            <div className="search">
              <input type="text" placeholder="Search for something..." />
              <SearchOutlineIcon />
            </div>
            <div className="items">
              <div className="item">
                <LanguageOutlinedIcon className="icon" />
                English
              </div>
              <div className="item">
                <NotificationsNoneOutlinedIcon className="icon" />
                <div className="counter">1</div>
              </div>
              <div className="item">
                <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg" 
                alt="Profile_image" 
                className="avatar"/>
              </div>
              <div className="item">
                <ChatBubbleOutlineOutlinedIcon className="icon" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;
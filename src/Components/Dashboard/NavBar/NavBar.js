import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
function NavBar() {
  return (
    <div className="navBar">
      <h2 className="navBar_head">Dashboard</h2>
      <div className="navBar_body">
        <div className="navBar_search">
          <input
            type="text"
            className="navBar_search_input"
            placeholder="Search.."
            style={{
              border: "0px",
              fontSize: "large",
              backgroundColor: "transparent",
            }}
          />
          <AiOutlineSearch className="navBar_search_icon" size={"30px"} />
        </div>
        <IoMdNotificationsOutline
          className="navBar_notify"
          size={"30px"}
          style={{ marginRight: "20px" }}
        />
        <img
          src="https://e7.pngegg.com/pngimages/409/621/png-clipart-computer-icons-avatar-male-user-profile-others-logo-monochrome.png"
          alt=""
          className="navBar_profile"
          style={{ width: "30px", marginRight: "20px"}}
        />
      </div>
    </div>
  );
}

export default NavBar;

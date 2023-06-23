import "./Sidebar.css";
import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { BiUserCircle } from "react-icons/bi";
function SideBar() {
  return (
    <div className="sideBar">
      <h1 className="sideBar_head">Board.</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: '100%'
        }}
      >
        <div className="sideBar_body">
          <div className="sideBar_btn">
            <AiOutlinePieChart className="sideBar_btn_icon" />
            <h3 className="sideBar_btn_text">Dashboard</h3>
          </div>
          <div className="sideBar_btn">
            <BsTags className="sideBar_btn_icon" />
            <h3 className="sideBar_btn_text">Transaction</h3>
          </div>
          <div className="sideBar_btn">
            <LuCalendarClock className="sideBar_btn_icon" />
            <h3 className="sideBar_btn_text">Schedules</h3>
          </div>
          <div className="sideBar_btn">
            <BiUserCircle className="sideBar_btn_icon" />
            <h3 className="sideBar_btn_text">Users</h3>
          </div>
          <div className="sideBar_btn">
            <AiOutlineSetting className="sideBar_btn_icon" />
            <h3 className="sideBar_btn_text">Settings</h3>
          </div>
        </div>
        <div className="sideBar_footer">
          <p className="sideBar_text">Help</p>
          <p className="sideBar_text">Contact us</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

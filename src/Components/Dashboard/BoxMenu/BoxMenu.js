import "./Boxmenu.css";
import { BsFillWebcamFill, BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { PiUsersLight } from "react-icons/pi";
function BoxMenu() {
  return (
    <div className="boxMenu">
      <div className="box_container" style={{ backgroundColor: "#CDFFCA" }}>
        <div className="box_icon">
          <BsFillWebcamFill className="box_container_icon" />
        </div>
        <div>
          <p>Total Revenues</p>
          <h4 style={{ fontSize: "large" }}>$2,129,430</h4>
        </div>
      </div>
      <div className="box_container" style={{ backgroundColor: "#FFF6CA" }}>
        <div className="box_icon">
          <BsTags className="box_container_icon" />
        </div>
        <div>
          <p>Total Transaction</p>
          <h4 style={{ fontSize: "large" }}>1250</h4>
        </div>
      </div>
      <div className="box_container" style={{ backgroundColor: "#FFC0F4" }}>
        <div className="box_icon">
          <AiOutlineLike className="box_container_icon" />
        </div>
        <div>
          <p>Total Revenues</p>
          <h4 style={{ fontSize: "large" }}>$2,129,430</h4>
        </div>
      </div>
      <div className="box_container" style={{ backgroundColor: "#DFC0FF" }}>
        <div className="box_icon">
          <PiUsersLight className="box_container_icon" />
        </div>
        <div>
          <p>Total Revenues</p>
          <h4 style={{ fontSize: "large" }}>$2,129,430</h4>
        </div>
      </div>
    </div>
  );
}

export default BoxMenu;

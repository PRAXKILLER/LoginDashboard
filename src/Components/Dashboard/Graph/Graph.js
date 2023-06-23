import "./Graph.css";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import { CChart } from "@coreui/react-chartjs";
function Graph() {
  return (
    <div className="graph">
      <div style={{ display: "flex" }}>
        <h4 className="graph_head">Activities</h4>
      </div>
      <div className="graph_sub">
        <p className="graph_sub_date">May-June 2021</p>
        <IoIosArrowDown className="graph_sub_icon" />
        <BsFillCircleFill className="graph_sub_circle1" />
        <p>Guest</p>
        <BsFillCircleFill className="graph_sub_circle2" />
        <p>User</p>
      </div>
      <div className="graph_main">
        <CChart
          type="line"
          data={{
            labels: ["Week1", "Week2", "Week3", "Week4"],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "rgba(220, 220, 220, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                data: [40, 20, 12, 39],
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(151, 187, 205, 0.2)",
                borderColor: "rgba(151, 187, 205, 1)",
                pointBackgroundColor: "rgba(151, 187, 205, 1)",
                pointBorderColor: "#fff",
                data: [50, 12, 28, 29],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Graph;

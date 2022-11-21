import "../assets/styles/main.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const FeaturedChart = () => {
  return (
    <div className="featuredchartContainer">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
            <div className="featuredProgressBar">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> 
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">N45,090</p>
            <p className="desc">
                Previous transactions processing. Last payment may not be included.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Today</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultAmount">N45,645</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">N45,645</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">N45,645</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedChart;
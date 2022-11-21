import "../assets/styles/main.scss";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const Sidebar = () => {
  return (
    <div>
        <div class="sidebar">
          <div className="top">
            <span className="logo">Dashboard</span>
          </div>
          <hr />
          <div className="center">
            <ul>
              <li>
              <HouseOutlinedIcon className="icon" />
                <span>Dashboard</span>
              </li>
              <p className="title">CUSTOMER</p>
              <li>
                <PeopleAltOutlinedIcon className="icon" />
                <span>Users</span>
              </li>
              <li>
                <GroupAddOutlinedIcon className="icon" />
                <span>Guarantors</span>
              </li>
              <li>
                <PointOfSaleOutlinedIcon className="icon" />
                <span>Loans</span>
              </li>
              <li>
                <HandshakeOutlinedIcon className="icon" />
                <span>Decision Models</span>
              </li>
              <li>
                <PointOfSaleOutlinedIcon className="icon" />
                <span>Loans</span>
              </li>
              <li>
                <SavingsOutlinedIcon className="icon" />
                <span>Savings</span>
              </li>
              <li>
                <RequestQuoteOutlinedIcon className="icon" />
                <span>Loans Requests</span>
              </li>
              <li>
                <VerifiedUserOutlinedIcon className="icon" />
                <span>Whitelist </span>
              </li>
              <li>
                <PersonAddAltOutlinedIcon className="icon" />
                <span>Karma </span>
              </li>
            </ul>
          </div>
          <div className="bottom">BUSINESSES</div>
        </div>
    </div>
  )
}

export default Sidebar;
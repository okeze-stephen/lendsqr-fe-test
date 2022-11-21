import "../assets/styles/main.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
let data;

// temporary
const amount = 100;
const diff = 20; 

    switch(type){
         case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PeopleAltOutlinedIcon className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgb(255, 0, 0, 0.2)",
                }} />,
            };
              break;

              case "order":
                data={
                    title: "ORDERS",
                    isMoney: false,
                    link: "View all Orders",
                    icon: <ShoppingCartOutlinedIcon className="icon" style={{
                        color: "goldenrod",
                        backgroundColor: "rgb(218, 165, 32, 0.2)",
                    }}  />,
                };
                  break;

                  case "earning":
                    data={
                        title: "EARNINGS",
                        isMoney: true,
                        link: "View net Earning",
                        icon: <MonetizationOnOutlinedIcon className="icon" style={{
                            color: "green",
                            backgroundColor: "rgb(0, 128, 0, 0.2)",
                        }}  />,
                    };
                      break;

                      case "balance":
                        data={
                            title: "BALANCE",
                            isMoney: true,
                            link: "See details",
                            icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{
                                color: "purple",
                                backgroundColor: "rgb(128, 0, 128, 0.2)",
                            }}  />,
                        };
                          break;

            default:
              break;

    }


  return (
    <div className="widgetContainer">
        <div className="left">
            <span className="title">{data.title }</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
             <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff}%
             </div>
             {data.icon}
        </div>
    </div>
  )
}

export default Widget;
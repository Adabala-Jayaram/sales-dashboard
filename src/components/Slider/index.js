import { Component } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BsChevronCompactDown } from "react-icons/bs";
import SlideBarItem from "../SlideBarItem";
import "./index.css";

const slideItems = [
  {
    id: 1,
    itemName: "Dashboard",
    iconUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697450727/dashboards_rjow7q.png",
  },
  {
    id: 2,
    itemName: "Product",
    iconUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697450727/cube_ekdqqp.png",
  },
  {
    id: 3,
    itemName: "Customers",
    iconUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697450727/users_3914283_e6osft.png",
  },
  {
    id: 4,
    itemName: "Income",
    iconUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697450726/wallet_7653271_rkvmdq.png",
  },
  {
    id: 5,
    itemName: "Promote",
    iconUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697450726/badge-percent_7661380_jyseoe.png",
  },
  {
    id: 6,
    itemName: "Help",
    iconUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697450695/call-center-agent_jah3e4.png",
  },
];

class Slider extends Component {
  state = {
    isClicked: true,
  };

  onClickMenu = () => {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked }));
  };

  render() {
    const { isClicked } = this.state;
    const toggleItems = isClicked ? "slide-bar-items" : "hidden-sec";
    const toggleProfile = isClicked ? "profile-container" : "hidden-sec";
    return (
      <div className="slider-bar-container">
        <div className="slider-bar-icon-title-sec">
          <CgMenuGridR
            className="slide-bar-menu-icon"
            onClick={this.onClickMenu}
          />
          <h2 className="slider-bar-title">Dashboard</h2>
        </div>
        <ul className={toggleItems}>
          {slideItems.map((eachSlideItem) => (
            <SlideBarItem key={eachSlideItem.id} slideDetails={eachSlideItem} />
          ))}
        </ul>
        <div className={toggleProfile}>
          <img
            src="https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022626.jpg?w=1060&t=st=1697451509~exp=1697452109~hmac=0b9064af6cca450ef511cf8c1da2f0759846cb68abb5eae73a92ab8054a7f5c8"
            alt="profile"
            className="profile-img"
          />
          <div className="profile-text">
            <h5 className="profile-name">Evano</h5>
            <p className="profile-role">Project Manager</p>
          </div>
          <BsChevronCompactDown className="down-arrow" />
        </div>
      </div>
    );
  }
}
export default Slider;

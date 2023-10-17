import "./index.css";

const SlideBarItem = (props) => {
  const { slideDetails } = props;
  const { itemName, iconUrl } = slideDetails;

  return (
    <li className="slide-bar-item">
      <div className="slide-bar-item-name-sec">
        <img src={iconUrl} alt="slide-icons" className="slide-bar-item-icon" />
        <h3 className="slide-bar-item-name">{itemName}</h3>
      </div>
      <span className="slide-bar-navigation">></span>
    </li>
  );
};
export default SlideBarItem;

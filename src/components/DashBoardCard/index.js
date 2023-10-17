import "./index.css";
const DashBoardCard = (props) => {
  const { cardDetails } = props;
  const {
    imgUrl,
    cardTitle,
    cardDescription,
    profitLose,
    profitLoseValue,
    detailsUpto,
  } = cardDetails;
  return (
    <li className="dashboard-card-item">
      <div className="dashboard-card-img-bg">
        <img src={imgUrl} alt="dashboard-img" className="dashboard-card-img" />
      </div>
      <div className="dashboard-card-text">
        <h5 className="dashboard-card-title">{cardTitle}</h5>
        <p className="dashboard-card-description">${cardDescription}K</p>
        {profitLose === "increment" ? (
          <p className="increment-percent">
            <span className="upArrow">&#8593;</span>
            {profitLoseValue}%
            <span className="month-week-text"> this {detailsUpto}</span>
          </p>
        ) : (
          <p className="decrement-percent">
            <span className="upArrow">&darr;</span>
            {profitLoseValue}%
            <span className="month-week-text"> this {detailsUpto}</span>
          </p>
        )}
      </div>
    </li>
  );
};
export default DashBoardCard;

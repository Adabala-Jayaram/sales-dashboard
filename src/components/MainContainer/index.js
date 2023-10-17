import { BiSearch } from "react-icons/bi";
import "./index.css";
import DashBoardCard from "../DashBoardCard";

const dashBoardCards = [
  {
    id: "earning",
    imgUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697467144/profit_7107544_frcncr.png",
    cardTitle: "Earning",
    cardDescription: "198",
    profitLose: "increment",
    profitLoseValue: "37.8",
    detailsUpto: "month",
  },
  {
    id: "orders",
    imgUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697467144/list_819809_uiw9yq.png",
    cardTitle: "Orders",
    cardDescription: "2.4",
    profitLose: "decrement",
    profitLoseValue: "2",
    detailsUpto: "month",
  },
  {
    id: "balance",
    imgUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697467144/purse_3710214_flmsvy.png",
    cardTitle: "Balance",
    cardDescription: "2.4",
    profitLose: "decrement",
    profitLoseValue: "2",
    detailsUpto: "month",
  },
  {
    id: "sales",
    imgUrl:
      "https://res.cloudinary.com/dxiu6c2we/image/upload/v1697468879/red-purchase-bag_ykcwif.jpg",
    cardTitle: "Total Sales",
    cardDescription: "89",
    profitLose: "increment",
    profitLoseValue: "11",
    detailsUpto: "week",
  },
];

const MainContainer = () => {
  const searchContainerSec = () => (
    <div className="search-container">
      <BiSearch className="search-icon" />
      <input
        type="search"
        placeholder="Search"
        className="search-input-value"
      />
    </div>
  );

  return (
    <div className="main-container">
      <div className="main-container-header-sec">
        <div className="welcome-name-container">
          <h2 className="welcome-name">Hello Shahrukh</h2>
          <img
            className="hand-icon"
            alt="hand"
            src="https://img.freepik.com/premium-vector/waving-hand-vector-icon-waving-hand-gesture-symbol-isolated-white-background-vector-eps-10_532800-303.jpg?w=740"
          />
          <span className="comma">,</span>
        </div>
        {searchContainerSec()}
      </div>
      <ul className="sales-detailes-sec">
        {dashBoardCards.map((eachCard) => (
          <DashBoardCard key={eachCard.id} cardDetails={eachCard} />
        ))}
      </ul>
      <div className="graph-overview-bg">
        <div className="graph-container">
          <div className="bar-graph-header">
            <h1 className="graph-container-overview">Overview</h1>
            <select className="select-date">
              <option value="Quaterly">Quaterly</option>
            </select>
          </div>
          <h4 className="monthly-earning-title">Monthly Earning</h4>
          <img
            src="https://res.cloudinary.com/dxiu6c2we/image/upload/b_rgb:FFFFFF/c_crop,w_880,h_460/v1697525118/graph_bqzj4h.jpg"
            alt="sales"
            className="bar-graph"
          />
        </div>
        <div className="customers-container">
          <h1 className="customer-sec-title">customers</h1>
          <h2 className="customer-sec-description">
            Customer that buy products
          </h2>
          <img
            src="https://res.cloudinary.com/dxiu6c2we/image/upload/v1697527060/grp-2_khi7yy.avif"
            alt="customer buy"
            className="customer-radial-graph"
          />
        </div>
      </div>
      <div className="product-card-bg">
        <div className="product-card-header-sec">
          <h1 className="product-card-header-title">Product Sell</h1>
          <span className="product-card-search-sec">
            {searchContainerSec()}
          </span>

          <select className="sale-date-selection">
            <option>Last 30 days</option>
          </select>
        </div>

        <div className="product-table-header-names">
          <h1 className="table-titles">Product Name</h1>
          <div className="product-table-header">
            <h3 className="table-titles">Stock</h3>
            <h3 className="table-titles"> Price</h3>
            <h3 className="table-titles">Total Sales</h3>
          </div>
        </div>
        <ul className="product-items-container">
          <li className="product-item">
            <div className="product-name-img">
              <img
                src="https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148515661.jpg?w=740&t=st=1697534840~exp=1697535440~hmac=4e9f2b964a7daac4d99c1b6318645f93499b9658db7a843132a05ffd36a253e4"
                alt="sale product"
                className="sale-item-img"
              />
              <div>
                <h3 className="product-name">Fastrack Watch</h3>
                <h3 className="product-description">
                  Branded watch best quality
                </h3>
              </div>
            </div>
            <div className="stock-detailes-sec">
              <p className="product-related">32 in stock</p>
              <p className="product-related">$45.5</p>
              <p className="product-related">20</p>
            </div>
          </li>
          <li className="product-item">
            <div className="product-name-img">
              <img
                src="https://img.freepik.com/free-vector/purple-themed-mobile-phone-surrounded-by-colorful-apps_52683-23827.jpg?w=740&t=st=1697536026~exp=1697536626~hmac=989ad195b03f45ce3aba697fbb416f4b76f490acb9f8f382f09c0444886afa54"
                alt="sale product"
                className="sale-item-img"
              />
              <div>
                <h3 className="product-name">Mi Mobiles</h3>
                <h3 className="product-description">Low cost more features</h3>
              </div>
            </div>
            <div className="stock-detailes-sec">
              <p className="product-related">32 in stock</p>
              <p className="product-related">$45.5</p>
              <p className="product-related">20</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MainContainer;

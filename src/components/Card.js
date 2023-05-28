
const Card = ({ name, age, occupation }) => {
  return (
    <div className="card_wrapper">
      <div className="card_img_warpper">
        <img
          height="70px"
          src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQAAAA?pid=ImgDet&rs=1"
          alt="logo"
        />
      </div>
      <div className="card_details">
        <h2>{name}</h2>
        <p>{occupation}</p>
        <p>{age} Years</p>
      </div>
    </div>
  );
};
export default Card;

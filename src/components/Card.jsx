const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <h4>{props.tag}</h4>
    </div>
  );
};

export default Card;

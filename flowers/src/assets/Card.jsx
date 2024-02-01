import { Link } from "react-router-dom";

export default function Card(props){
  return (
    <div className="card">
      <img src={props.img} alt="Rose" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">{props.heading}</h2>
        <p className="card-description">{props.description}</p>
        <Link to={props.link} className="card-link">Learn More</Link>
      </div>
    </div>
  );
}


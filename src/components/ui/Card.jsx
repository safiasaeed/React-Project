import "./Card.css";

function Card({ title, description, image, children }) {
  return (
    <div className="card">

      {image && (
        <img src={image} alt={title} />
      )}

      <div className="card-content">

        <h3>{title}</h3>

        <p>{description}</p>

        {children}

      </div>

    </div>
  );
}

export default Card;
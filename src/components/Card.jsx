function Card({ children, title, variant = "primary" }) {
  return (
    <div className={`card card-${variant}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
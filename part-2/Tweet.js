const Tweet = props => (
  <div>
    <h2>{props.username}</h2>
    <h3>{props.name}</h3>
    <span>{props.date}</span>
    <p>{props.message}</p>
  </div>
);

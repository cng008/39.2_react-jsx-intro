const Person = props => {
  let alert;
  if (props.age > 18) {
    alert = 'please go vote!';
  } else {
    alert = 'you must be 18';
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>
        Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}
      </h3>
      <h4>Age: {props.age}</h4>
      <ul>
        {props.hobbies.map(h => (
          <li>{h}</li>
        ))}
      </ul>
      <p>{alert}</p>
    </div>
  );
};

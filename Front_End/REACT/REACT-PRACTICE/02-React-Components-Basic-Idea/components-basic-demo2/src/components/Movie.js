const Movie = (props) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <h5>year: {props.year}</h5>
      <ul>
        <li>{props.cast[0]}</li>
        <li>{props.cast[1]}</li>
      </ul>
    </article>
  );
};

export default Movie;

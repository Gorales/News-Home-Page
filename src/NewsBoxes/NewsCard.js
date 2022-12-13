export default function (props) {
  return (
    <div className="newsCard">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <hr className={`hr-${props.id}`} />
    </div>
  );
}

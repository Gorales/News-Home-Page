export default function (props) {
  return (
    <div className="footerBox">
      <img src={props.img} width="100px" height="130px" alt="photo"></img>
      <div className="footerBox-explanation">
        <h1>{props.sequence}</h1>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

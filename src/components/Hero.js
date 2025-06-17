import "./HeroStyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <div
          style={{
            backgroundImage: `url(${props.heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
            width: "100%",
            position: "relative",
          }}
        />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>

          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;

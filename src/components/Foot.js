import "./FootStyles.css";
const Foot = () => {
  return (
    <div className="foot">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite Destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Lisence</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Twitter</a>
          <a href="/">Projects</a>
          <a href="/">Issues</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Trouble</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">Lisence</a>
        </div>
      </div>
    </div>
  );
};
export default Foot;

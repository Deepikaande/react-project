function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About</h2>
          <p>
            MedDocs Publishers is a very well-dedicated in publishing various informative medical journals which acts as a powerhouse to bring the physicians and the entire medical fraternity the best research with latest discovered key information in a completely understandable and clinically useful format. This is certainly a career companion for all physicians and medical researchers. The practicing physicians can be well informed about the various new developments in the field which is very necessary to treat patients in the best possible way.
          </p>
          <button className="btn btn-primary mt-3">
            Learn More
          </button>
        </div>
        <div className="about-image">
          <img
            src="https://thumbs.dreamstime.com/b/science-chemical-medical-research-lab-microscope-science-chemical-medical-research-lab-tools-117615504.jpg"
            alt="About"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
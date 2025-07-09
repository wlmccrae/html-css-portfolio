import '../styles/Samples.css';

function Samples() {
  return (
    <div className="freelance-page">
      <div className="freelance-title-container">
        <div className="freelance-page-title">Sample Sites</div>
      </div>
      <div className="sample-sites">
        <div className="sample">
          <a
            className="sample-project-link"
            href="https://wandamccrae.com/projects/tea-shoppe/" target="_blank" rel="noopener noreferrer">
            - Lotus Blossom Tea Shoppe
          </a>
          <p>BASIC WEBSITE for a local tea shoppe.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="https://wandamccrae.com/projects/ronni-davis/" target="_blank" rel="noopener noreferrer">- Ronni Davis</a>
          <p>BASIC WEBSITE with more than one EXTRA PAGE (no scripting).</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="https://wandamccrae.com/freelance/" target="_blank" rel="noopener noreferrer">- Wanda McCrae &mdash; Freelance Web Developer</a>
          <p>This very site you are on is an example of a GROWTH WEBSITE with an EXTRA PAGE (no scripting) and a CONTACT PAGE.</p>
        </div>
      </div>
    </div>
  );
};

export default Samples;

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
          <p>Two-page HTML/CSS site for a local tea shoppe.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="https://wandamccrae.com/projects/ronni-davis/" target="_blank" rel="noopener noreferrer">- Ronni Davis</a>
          <p>Mobile-first, responsive, author website in HTML/CSS.</p>
        </div>
      </div>
    </div>
  );
};

export default Samples;

import '../styles/MainPage.css';
import '../styles/Services.css';

function Services () {
  return (
    <div className="freelance-main-page">
      <div className="main-title-container">
        <div className="main-page-title">
          Prices and Services
        </div>
      </div>
      <div className="prices-table">
        <div className="prices-row">
          <div className="service-name">BASIC WEBSITE</div>
          <div className="description">Mobile-first, responsive design in static HTML/CSS. Up to 2 pages (e.g. About and Gallery).</div>
          <div className="price">$298USD</div>
        </div>
        <div className="prices-row">
          <div className="service-name">GROWTH WEBSITE</div>
          <div className="description">Mobile-first, responsive design using a modern web framework (React.js) to allow for future interactivity/growth. Up to 2 pages (e.g. About and Gallery).</div>
          <div className="price">$398USD</div>
        </div>
        <div className="prices-row">
          <div className="service-name">CONTACT FORM ADD-ON</div>
          <div className="description">Allows people to contact you via a form. Includes setting up a form email service for you.</div>
          <div className="price">$198USD</div>
        </div>
      </div>
      <div className="main-title-container">
        <div className="main-page-title">
          Special
        </div>
      </div>
      <div className="prices-table">
        <div className="prices-row">
          <div className="service-name">GROWTH PACKAGE</div>
          <div className="description">GROWTH WEBSITE that includes a CONTACT FORM. <span className="price">An almost $50 savings.</span></div>
          <div className="price">$547USD</div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import './Experience.css';

const Experience = () => {
  return (
    <div className="section-experience">
      <h2 className="section-title u-margin-top-md">Experience</h2>
      <div className="timeline">
        <div className="container left-container">
          <div className="text-box">
            <div className="timeline-point"></div>
            <small className="duration-label">2021 - Present</small>
            <h2 className="subtitle-copy u-margin-bottom-sm">
              Product Owner at Shopify Agency
            </h2>
            <p className="body-copy">
              Responsibilities include the creation and delivery of product
              roadmaps for complex software projects, writing comprehensive
              Technical Specification documentation and user stores, sprint
              planning, backlog management, planning and managing the regular
              deployment of high value product increments, handling direct
              client communications and generally managing large-scale, complex
              projects.
            </p>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="container right-container">
          <div className="text-box">
            <div className="timeline-point"></div>
            <small className="duration-label">2019 - 2021</small>
            <h2 className="subtitle-copy u-margin-bottom-sm">
              Project Manager at eCommerce Agency
            </h2>
            <p className="body-copy">
              Responsibilities included managing multiple large scale eCommerce
              projects simultaneously, being involved in the full Project
              Lifecycle, being solely responsible for managing one of the
              internal ‘squads’ (5 developers and a QA Analyst), leading daily
              stand-ups, weekly sprint planning meetings, client-facing project
              updates and retrospectives, being the main point of contact for
              all clients on the projects I lead and ensuring resource was
              effectively managed between all Project Managers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

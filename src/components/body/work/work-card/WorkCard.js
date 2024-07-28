import './WorkCard.css';

const WorkCard = ({
  company,
  role,
  dateStart,
  dateEnd,
  totalTime,
  companyLogo,
  companyUrl,
  keyPoints,
  workUrl,
}) => (
  <div className="work-card">
    <a
      className="work-logo-wrapper"
      href={companyUrl}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="work-logo"
        src={require(`assets/icons/${companyLogo}.webp`)}
        alt={company}
      />
    </a>

    <div className="work-info">
      <h3 className="work-role">{role}</h3>
      <h4 className="company-name">{company}</h4>
      <p className="work-dates">
        {dateStart} - {dateEnd}
        {totalTime ? ` · ${totalTime}` : ''}
      </p>
      {workUrl && (
        <a
          className="button-link"
          href={workUrl}
          target="_blank"
          rel="noreferrer"
        >
          <img src={require('assets/icons/globe.webp')} alt="globe" />
          Take a Look!
        </a>
      )}
      <ul>
        {keyPoints.map((point) => (
          <li className="work-description" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default WorkCard;

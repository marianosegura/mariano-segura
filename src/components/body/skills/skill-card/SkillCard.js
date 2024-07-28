import './Skillcard.css';

const SkillCard = ({ name, icon, url }) => (
  <div className="skill-card-container">
    <a className="skill-card" href={url} target="_blank" rel="noreferrer">
      <div className="skill-icon">
        {icon === '' ? (
          <img
            className="skill-image"
            src={require(`assets/icons/${name}.webp`)}
            alt={name}
          />
        ) : (
          <i className={icon}></i>
        )}
      </div>
      <label className="skill-name">{name}</label>
    </a>
  </div>
);

export default SkillCard;

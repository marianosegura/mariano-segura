import WorkCard from './work-card/WorkCard';
import { works } from 'data/work';

const Work = () => (
  <div className="work">
    <label className="section-title">
      <i className="fi fi fi-rr-briefcase option-icon"></i>
      Work
    </label>

    <div className="work-list">
      {works.map((work, i) => (
        <WorkCard key={work.company + i} {...work} />
      ))}
    </div>
  </div>
);

export default Work;

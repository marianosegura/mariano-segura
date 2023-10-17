import React, { Fragment } from 'react';
import './Skills.css';
import SkillCard from './skill-card/SkillCard';
import { skillsGroups } from 'data/skills';

const Skills = () => (
  <div className="skills">
    <label className="section-title">
      <i className="fi fi-rr-pencil option-icon"></i>
      Skills
    </label>

    <div className="skills-container">
      {skillsGroups.map((skillGroup, i) => (
        <Fragment key={skillGroup.title}>
          <div className="skills-section">
            <label className="skills-section-title">{skillGroup.title}</label>

            <div className="skills-list">
              {skillGroup.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          {i < skillsGroups.length - 1 && <div className="light-separator" />}
        </Fragment>
      ))}
    </div>
  </div>
);

export default Skills;

import React from "react";

const Skills = () => {
    return <div className="skills-section">
        <h2 className="skills section-title medium-font">Skills</h2>
        <div clasName="skills-container">
            <div>
                <h4 class="skill-title bold-font">Frontend</h4>
                <ul class="skill-list grey-text">
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Restful API</li>
                </ul>
            </div>
            <div>
                <h4 class="skill-title bold-font">Backend</h4>
                <ul class="skill-list grey-text">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>EJS</li>
                    <li>Github / Version Control</li>
                    <li>Authentication</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Skills;
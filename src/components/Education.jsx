import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import {educationList} from "../utility/data"


export default function Education() {
  return (
    <section className="educationSection" id="education">
      <h2>Education</h2>

      <div className="timelineContainer">
        {educationList.map((edu, i) => (
          <div className="timelineItem  " key={i}>
            <div className="timelineMarker ">
              <div className="timelineDot "><FaGraduationCap /></div>
              {i !== educationList.length - 1 && <div className="timelineLine "></div>}
            </div>
            <div className="timelineContent">
              <span className="timelineYear">{edu.year}</span>
              <h3>{edu.degree}</h3>
              <p className="eduInstitute">{edu.institute}</p>
              <p className="eduScore">{edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
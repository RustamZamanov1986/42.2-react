import Button from "../Button/Button";
import "./styles.css";
import { lessonData } from "./data";
function LessonCard() {
  return (
    <div className="lesson-card">
      <h3>Lesson Title {lessonData.lesson_number}</h3>
      <p>Teacher: {lessonData.teacher}</p>
      <Button />
    </div>
  );
}

export default LessonCard;

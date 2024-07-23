import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentItem = (props) => {
  const { details } = props;
  const { id, title, description, totalQuestions, duration, difficulty } = details;

  return (
    <Link to={`/assessments/${id}`}>
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Total Questions: {totalQuestions}</p>
        <p>Duration: {duration}</p>
        <p>Difficulty: {difficulty}</p>
      </li>
    </Link>
  );
};

export default AssessmentItem;
import React from 'react';
import { Navigate } from 'react-router-dom';
import AssessmentItem from "./AssessmentItem";

const codingAssessments = [
  {
    id: 1,
    title: "JavaScript Basics Quiz",
    description: "Test your knowledge of basic JavaScript concepts and syntax.",
    totalQuestions: 10,
    duration: "15 minutes",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "React Fundamentals Assessment",
    description: "Evaluate your understanding of React basics, including components, state, and props.",
    totalQuestions: 15,
    duration: "30 minutes",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Data Structures and Algorithms Quiz",
    description: "Assess your proficiency in common data structures and algorithms.",
    totalQuestions: 20,
    duration: "45 minutes",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Node.js and Express Assessment",
    description: "Test your skills in building backend applications with Node.js and Express.",
    totalQuestions: 12,
    duration: "25 minutes",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Full Stack Development Quiz",
    description: "Evaluate your knowledge of both frontend and backend development concepts.",
    totalQuestions: 25,
    duration: "60 minutes",
    difficulty: "Advanced",
  }
];

const AssessmentLists = () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  

  return (
    <div>
      <h1>Coding Assessments</h1>
      <ul>
        {codingAssessments.map((assessment) => (
          <AssessmentItem key={assessment.id} details={assessment} />
        ))}
      </ul>
    </div>
  );
};

export default AssessmentLists;

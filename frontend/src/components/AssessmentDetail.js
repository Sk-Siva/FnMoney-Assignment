import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Dummy data for demonstration purposes
const assessments = [
  { id: 1, title: 'Assessment 1', description: 'Description for Assessment 1', totalQuestions: 10, duration: '30 minutes', difficulty: 'Easy' },
  { id: 2, title: 'Assessment 2', description: 'Description for Assessment 2', totalQuestions: 20, duration: '1 hour', difficulty: 'Medium' },
  // Add more assessments as needed
];

const AssessmentDetail = () => {
  const { id } = useParams();
  const [assessment, setAssessment] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const selectedAssessment = assessments.find(a => a.id === parseInt(id));
    setAssessment(selectedAssessment);
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userId = localStorage.getItem('userId');

      const response = await fetch('http://localhost:5000/api/users/register-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          assessmentId: assessment.id,
        }),
      });

      if (response.ok) {
        setSuccess('Successfully registered for the assessment!');
      } else {
        setError('Failed to register for the assessment.');
      }
    } catch (err) {
      setError('An error occurred.');
    }
  };

  if (!assessment) return <p>Loading assessment details...</p>;

  return (
    <div>
      <h1>Register for {assessment.title}</h1>
      <p>{assessment.description}</p>
      <p>Total Questions: {assessment.totalQuestions}</p>
      <p>Duration: {assessment.duration}</p>
      <p>Difficulty: {assessment.difficulty}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AssessmentDetail;
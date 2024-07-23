import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import AssessmentLists from './components/AssessmentLists';
import AssessmentDetail from './components/AssessmentDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/assessments" element={<AssessmentLists />} />
        <Route path="/assessments/:id" element={<AssessmentDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
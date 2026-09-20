import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SectionPage from './pages/SectionPage';
import FavoritesPage from './components/FavoritesPage';
import InterviewSetupPage from './pages/InterviewSetupPage';
import InterviewSessionPage from './pages/InterviewSessionPage';
import InterviewReviewPage from './pages/InterviewReviewPage';
import ProgressPage from './pages/ProgressPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/section/:sectionId" element={<SectionPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/interview" element={<InterviewSetupPage />} />
      <Route path="/interview/session" element={<InterviewSessionPage />} />
      <Route path="/interview/review/:id" element={<InterviewReviewPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      {/* An unknown path rendered nothing at all, leaving a header and footer
          around a blank page. Send it home instead. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default Router;

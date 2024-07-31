import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Poems from './pages/Poem';
import Cart from './pages/Cart';

const FlashMessage = () => {
  const { flashMessage } = useApp();
  if (!flashMessage) return null;
  return (
    <div className={`alert alert-${flashMessage.type}`} role="alert">
      {flashMessage.message}
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { user } = useApp();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

const PublicOnlyRoute = ({ children }) => {
  const { user } = useApp();
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

function AppContent() {
  console.log('App component rendered');
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <FlashMessage />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
            <Route path="/register" element={<PublicOnlyRoute><Register /></PublicOnlyRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
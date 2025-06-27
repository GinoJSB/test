import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ActiveNotes from "./pages/ActiveNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NoteApp
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/active">
                  Active Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/archived">
                  Archived Notes
                </Link>
              </li>
            </ul>
            <Link className="btn btn-outline-danger" to="/login">
              Logout
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/active"
          element={
            <PrivateRoute>
              <ActiveNotes />
            </PrivateRoute>
          }
        />
        <Route
          path="/archived"
          element={
            <PrivateRoute>
              <ArchivedNotes />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from "./routes";
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import 'materialize-css'

function App() {
  const { login, logout, token, userId, userEmail } = useAuth()
  const isAuthenticated = !!token  //!! - boolean
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated, userEmail }}>
      <Router>
        {isAuthenticated && <Navbar />}
        <div>
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

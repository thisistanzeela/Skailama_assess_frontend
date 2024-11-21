import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(''); // To handle error messages

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password!');
      return;
    }

    setLoading(true);
    setError(''); // Reset error message before making the API call

    try {
      // Create the payload for the login API
      const payload = { email, password };

      // Make the API call to login
      const response = await fetch('http://localhost:5000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      // Parse the response data
      const data = await response.json();

      // Store the data (e.g., token, user information) in localStorage
      localStorage.setItem('authToken', data.token); // Assuming the API returns a token
    //   localStorage.setItem('user', JSON.stringify(data.user)); // Assuming the API returns user data

      alert('Logged in successfully!');
      // Redirect to the dashboard or another page
      window.location.href = '/home'; // Modify this according to your routing logic

    } catch (error) {
      setError(error.message);
      alert(error.message);
    } finally {
      setLoading(false); // Stop loading spinner or button animation
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="login-button"
            onClick={handleLogin}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

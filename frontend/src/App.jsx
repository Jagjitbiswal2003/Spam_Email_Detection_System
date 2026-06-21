import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleCheck = async () => {

    setLoading(true);
    setResult("");

    try {
      const res = await axios.post("https://spam-email-backend-49b8.onrender.com/predict", {
        email: email,
      });
      setResult(res.data.prediction);
    } catch (error) {
      console.error(error);
      setResult("Server Error");
    }

    setLoading(false);
  };

  const isSpam = result === "Spam";
  const riskPercent = isSpam ? 88 : 22;

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="orb-bg"></div>
      <div className="orb-bg orb-second"></div>

      <div className="container">
        <div className="glass-card">

          {/* Header */}
          <div className="brand-header">
            <div className="logo-area">
              <div className="icon-shield">🛡️</div>
              <div>
                <h1>Spam Email Detector<span className="dot">.</span></h1>
              </div>
            </div>

            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Input */}
          <div className="input-section">
            <div className="textarea-container">
              <textarea
                placeholder="Enter your email content here.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="char-counter">
                {email.length} characters
              </div>
            </div>

            <button
              className="analyze-btn"
              onClick={handleCheck}
              disabled={loading || !email.trim()}
            >
              {loading ? "Analyzing..." : "Analyze Email"}
            </button>
          </div>

          {/* Loader */}
          {loading && (
            <div className="custom-loader">
              <div className="dot-floating"></div>
              <div className="dot-floating"></div>
              <div className="dot-floating"></div>
            </div>
          )}

          {/* Result */}
          {result && !loading && (
            <div className={`result-card ${isSpam ? "spam-result" : "safe-result"}`}>

              <div className="result-header">
                <div className="result-icon">
                  {isSpam ? "⚠️" : "✅"}
                </div>
                <div className="result-title">
                  <h3>{isSpam ? "Spam Detected" : "Clean Email"}</h3>
                  <p>
                    {isSpam
                      ? "Suspicious content detected — be careful."
                      : "No spam indicators found."}
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="risk-meter">
                <div className="risk-header">
                  <span>Risk Score</span>
                  <span>{riskPercent}%</span>
                </div>

                <div className="progress-bar-bg">
                  <div
                    className={`progress-fill ${isSpam ? "spam-fill-grad" : "safe-fill-grad"}`}
                    style={{ width: `${riskPercent}%` }}
                  ></div>
                </div>

                <div className="risk-footer">
                  <span>{isSpam ? "High Risk" : "Low Risk"}</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
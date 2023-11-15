import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  const getFeedback = () => {
    if (bmi >= 18.5 && bmi <= 24.9) {
      return `${name}, your BMI is in the healthy range. Keep up the good work! 😊`;
    } else if (bmi >= 25) {
      return `${name}, your BMI is above the healthy range. Consider consulting with a healthcare professional. 🙁`;
    } else {
      return `${name}, your BMI is below the healthy range. Consider consulting with a healthcare professional. 😅`;
    }
  };

  const getImprovementTips = () => {
    if (bmi >= 18.5 && bmi <= 24.9) {
      return null; // No improvement tips for healthy range
    } else if (bmi >= 25) {
      return (
        <div className="tips-container">
          <h3>Improving Tips for BMI:</h3>
          <ul>
            <li>🥗 Incorporate regular exercise into your routine.</li>
            <li>🍎 Adopt a balanced and nutritious diet.</li>
            <li>💧 Stay hydrated by drinking plenty of water.</li>
            <li>🚫 Avoid excessive intake of sugary and processed foods.</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="tips-container">
          <h3>Improving Tips for BMI:</h3>
          <ul>
            <li>🥦 Focus on a balanced diet with a variety of nutrients.</li>
            <li>🏃‍♂️ Engage in regular physical activity, such as walking or jogging.</li>
            <li>👩‍⚕️ Consult with a nutritionist for personalized guidance.</li>
            <li>🍽️ Monitor portion sizes to maintain a healthy weight.</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>BMI Calculator</h1>
        <div>
          <label>
            Your Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && (
          <div>
            <p className={`result ${bmi >= 18.5 && bmi <= 24.9 ? 'positive' : 'negative'}`}>
              {name}, your BMI is: {bmi}
            </p>
            <p className={`feedback ${bmi >= 18.5 && bmi <= 24.9 ? 'positive' : 'negative'}`}>
              {getFeedback()}
            </p>
            {getImprovementTips()}
            <div className="emojis">
              <span>{bmi >= 18.5 && bmi <= 24.9 ? '😊' : '😅'}</span>
              <span>{bmi >= 25 ? '🙁' : '😎'}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

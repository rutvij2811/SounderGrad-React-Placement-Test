import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const SLIDES = [
  {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises."
  },
  {
      title: "Excercise 1",
      text: "Instruction of ex 1."
  },
  {
      title: "Excercise 2",
      text: "Instruction of ex 2."
  },
  {
      title: "Excercise 3",
      text: "Instruction of ex 3."
  },
  {
      title: "Excercise Complete",
      text: "Job well done!"
  }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App slides={SLIDES}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

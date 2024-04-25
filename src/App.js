// App.js
import React, { useReducer } from 'react';
import './App.css';

const initialState = {
  text: '',
  darkMode: false,
};

const actionTypes = {
  SET_TEXT: 'SET_TEXT',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
  CLEAR_TEXT: 'CLEAR_TEXT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return { ...state, text: action.payload };
    case actionTypes.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    case actionTypes.CLEAR_TEXT:
      return { ...state, text: '' };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTextChange = (e) => {
    dispatch({ type: actionTypes.SET_TEXT, payload: e.target.value });
  };

  const handleToggleDarkMode = () => {
    dispatch({ type: actionTypes.TOGGLE_DARK_MODE });
  };

  const handleClearText = () => {
    dispatch({ type: actionTypes.CLEAR_TEXT });
  };

  return (
    <div className={`App ${state.darkMode ? 'dark' : ''}`}>
      <header>
        <h1>Text Editor</h1>
        <button onClick={handleToggleDarkMode}>
          {state.darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main>
        <textarea
          value={state.text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
        />
        <div className="text-stats">
          <p>Word Count: {state.text.trim().split(/\s+/).filter(Boolean).length}</p>
          <p>Character Count: {state.text.length}</p>
        </div>
        <button onClick={handleClearText}>Clear Text</button>
      </main>
    </div>
  );
};

export default App;

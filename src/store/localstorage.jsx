// Save Redux state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};

// Load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

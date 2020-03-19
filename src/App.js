import React from 'react';

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Name 
          <input type='text' placeholder="enter your name" />
        </label><br />

        <label>
          Mobile Number 
          <input type='number' placeholder="enter your cell number" />
        </label><br />
        
        <label>
          Gender:
           <label>
            male
            <input type='radio' />
          </label>
          <label>
            female
            <input type='radio' />
          </label>
        </label><br />
        
        <button type="submit">Add</button>

        
      </form>
    </div>
  );
}

export default App;

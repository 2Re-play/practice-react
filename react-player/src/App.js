import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
        <ReactPlayer
            url='https://www.youtube.com/watch?v=FK_t6p6C_GM'
            light = {true}
            playing
            controls
        />

    </div>
  );
}

export default App;

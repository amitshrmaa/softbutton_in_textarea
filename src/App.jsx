import React, { useState } from 'react';
import QuillEditor from './QuillEditor';

const App = () => {
  const [appendButton, setAppendButton] = useState();

  return (
    <div className="App">
      <button onClick={appendButton}>
        Append Button
      </button>
      <QuillEditor setAppendButton={setAppendButton} />
    </div>
  );
};

export default App;
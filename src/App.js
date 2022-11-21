import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

const AlanKey = 'a0f9d91ea436901f7ab0e39ff177e7e72e956eca572e1d8b807a3e2338fdd0dc/stage';

//  Time stamp of video :-> 20:48
function App() {

  useEffect(()=>{
    alanBtn({
      key: AlanKey,
      onCommand: ({ command, articles }) =>{
        if(command === 'newHeadlines'){
          alert('This code was executed.');
          console.log(articles);
        }
      }
    })

  },[])


  return (
    <div className="App">
      <h1>Welcome to AI News Application</h1>
    </div>
  );
}

export default App;

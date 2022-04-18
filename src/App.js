import React from "react"
import {useEffect} from "react"
function App() {
  const [countDown, setCountDown] = React.useState(0);
  const [runTimer, setRunTimer] = React.useState(false);

  useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(60 * 5);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log("expired");
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  const togglerTimer = () => setRunTimer((t) => !t);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  return (
  <div className="App fixed h-full flex w-full">
    
  <div className="m-auto text-center">
  <div className="text-3xl">
        Time: {minutes}:{seconds}
      </div>

      <button type="button" className="m-auto mr-2 bg-[green] text-2xl p-2 w-[100px] h-[50px] text-white" onClick={togglerTimer}>
        {runTimer ? "Stop" : "Start"}
      </button>

      <button type="button" className="m-auto bg-[green] text-2xl p-2 w-[100px] h-[50px] text-white" onClick={()=>window.location.reload()}>
       Reset
      </button>

      
  </div>
    </div>
  );
 
}

export default App;

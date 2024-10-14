import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment } from "@rive-app/react-canvas";

const stateMachineName = "State Machine 1";

const stateMachineInputName = "looseLife";

function App() {



  const { rive, RiveComponent } = useRive({
    src: "rive/icon-life.riv",
    stateMachines: stateMachineName,
    // TODO: Set stateMachines
     //autoplay: true,
     layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.Center
    }),
    
  });

  const skinInput = useStateMachineInput(
    rive,
    stateMachineName,
    stateMachineInputName
  );

  const onClick = () => {
    rive.play();
    skinInput.fire();
    
  };


  return (
    
    

    <div className="App">

            
  
      <header className="App-header">
       
        <p>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div className="container" onClick={onClick}>
              
              <RiveComponent />
              

            </div>
        </p>
        
       
      </header>
    </div>
  );
}

export default App;

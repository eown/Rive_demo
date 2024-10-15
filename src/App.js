import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Rive from '@rive-app/react-canvas';
import { useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment } from "@rive-app/react-canvas";

  
const stateMachineMenu = "State Machine 1";
const stateMachineInputName = "looseLife";




//////////////////////////////////////////////////////////
//comportement icones menu
/////////////////////////////////////////////////////////
export const RiveMenu = (mysrc: string) => {

  const {rive,RiveComponent } = useRive({
    src: mysrc,
    stateMachines: stateMachineMenu,
    autoplay: true,
  });

  const actionInput = useStateMachineInput(
    rive,
    stateMachineMenu,
    stateMachineInputName
  );

  
  const onClickB = () => {
    actionInput?.fire();
  };

  return (
  
  <RiveComponent onClick={() => onClickB()} />

);
};



//////////////////////////////////////////////////////////
//comportement icones 
/////////////////////////////////////////////////////////
export const RiveIcones = (mysrc: string, myinput: string) => {


  
  const {rive,RiveComponent } = useRive({
    src: mysrc,
    stateMachines: stateMachineMenu,
   // autoplay: true,
  });

  const actionInput = useStateMachineInput(
    rive,
    stateMachineMenu,
    myinput
  );

  rive?.play();
  actionInput?.fire();

 

  const onClickB = () => {
   
    actionInput?.fire();
  };

  return (
  
    <RiveComponent onClick={() => onClickB()} />

);
};



//////////////////////////////////////////////////////////
//comportement Avatars
/////////////////////////////////////////////////////////
export const RiveAvatars = (mysrc: string, myinput: string) => {


  
  const {rive,RiveComponent } = useRive({
    src: mysrc,
    stateMachines: stateMachineMenu,
   // autoplay: true,
  });

  const actionInput = useStateMachineInput(
    rive,
    stateMachineMenu,
    myinput
  );

  rive?.play();
  actionInput?.fire();

 

  const onClickB = () => {
   
   
    rive?.play("Timeline 1");
  };

  return (
  
    <RiveComponent onClick={() => onClickB()} />

);
};



//////////////////////////////////////////////////////////
//Affichage
/////////////////////////////////////////////////////////

function App() {


 /// //////////////////////////////////////////////////////////
//Big Avatar
/////////////////////////////////////////////////////////

  const {rive,RiveComponent } = useRive({
    src: "/Rive_demo/rive/03_Avatars/man_01_trigger.riv",
    stateMachines: stateMachineMenu,
    //autoplay: true,
  });


  const actions = [
   useStateMachineInput(rive,stateMachineMenu,"Trigger_Hello" ),
   useStateMachineInput(rive,stateMachineMenu,"Trigger_FelicitationEnd" ),
    useStateMachineInput(rive,stateMachineMenu,"Trigger_Talk" ),
   useStateMachineInput(rive,stateMachineMenu,"Trigger_TrueAnimation1" ),
   useStateMachineInput(rive,stateMachineMenu,"Trigger_TrueAnimation2" ),
   useStateMachineInput(rive,stateMachineMenu,"Trigger_TrueAnimation3" ),
   useStateMachineInput(rive,stateMachineMenu,"Trigger_Close" ),
  ]
 


  rive?.play();
  actions[0]?.fire();

  const onClickB = (trigger) => {

    
    rive?.play();
    actions[trigger]?.fire();
  };


  return (
    


    <div className="App">

     
      <header className="App-header">


        <div className="containerLigne">

        <div className="containerTxt">  </div>
      
        <div className="containerBigAvatar">
            <RiveComponent />

        </div>
        <div className="containerBigAvatar">
             <button className="containerButton" onClick={() => onClickB(0)}> HELLO </button>
            <button className="containerButton" onClick={() => onClickB(1)}> CONGRATS </button>
            <button className="containerButton" onClick={() => onClickB(2)}> TALKING </button>
            <button className="containerButton" onClick={() => onClickB(3)}> FIREWORKS </button>
            <button className="containerButton" onClick={() => onClickB(4)}> HEARTS </button>
            <button className="containerButton" onClick={() => onClickB(5)}> STARS </button>
            <button className="containerButton" onClick={() => onClickB(6)}> CLOSE </button>
         
        </div>
       
       
        
        </div>
      
      <div className="containerLigne">
        <div className="containerTxt">   </div>
      
        <div className="containerMenu">
            {RiveMenu("/Rive_demo/rive/01_Menus/menu-learn.riv")}
        </div>
        <div className="containerMenu">
            {RiveMenu("/Rive_demo/rive/01_Menus/menu-quests.riv")}
        </div>
        <div className="containerMenu">
            {RiveMenu("/Rive_demo/rive/01_Menus/menu-leaderboards.riv")}
        </div>
        <div className="containerMenu">
            {RiveMenu("/Rive_demo/rive/01_Menus/menu-shop.riv")}
        </div>
        <div className="containerMenu">
            {RiveMenu("/Rive_demo/rive/01_Menus/menu-profile.riv")}
        </div>
        
        </div>



        <div className="containerLigne">

        <div className="containerTxt">  </div>
      
        <div className="containerIcones">
            {RiveIcones("/Rive_demo/rive/02_Icons/icon-life.riv","getLife")}
        </div>
        <div className="containerIcones">
            {RiveIcones("/Rive_demo/rive/02_Icons/icon-life.riv","looseLife")}
        </div>
        <div className="containerIcones">
            {RiveIcones("/Rive_demo/rive/02_Icons/icon-xp.riv","getXp")}
        </div>
        <div className="containerIcones">
            {RiveIcones("/Rive_demo/rive/02_Icons/icon-result.riv","playWrong")}
            
        </div>
        <div className="containerIcones">
            {RiveIcones("/Rive_demo/rive/02_Icons/icon-result.riv","playGreat")}
            
        </div>
        
        </div>

      <div className="containerLigne">

        <div className="containerTxt">  </div>
      
        <div className="containerAvatars">
            {RiveAvatars("/Rive_demo/rive/03_Avatars/man_01.riv","getLife")}
        </div>
        <div className="containerAvatars">
            {RiveAvatars("/Rive_demo/rive/03_Avatars/women_01.riv","getLife")}
        </div>

        </div>
        <div className="containerLigne">

        <div className="containerAvatars">
            {RiveAvatars("/Rive_demo/rive/03_Avatars/men_02.riv","getLife")}
        </div>
        <div className="containerAvatars">
            {RiveAvatars("/Rive_demo/rive/03_Avatars/women_02.riv","getLife")}
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;

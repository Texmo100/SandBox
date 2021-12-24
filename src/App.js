import React, { useState } from "react";
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import TravelForm from './Components/TravelForm/TravelForm';
import TravelInfo from "./Components/TravelInfo/TravelInfo";

const App = () => {
  const [userData, setUserData] = useState({});

  const onSubmitData = userData => {
    setUserData(userData);
    console.log(userData);
  }

  return (
    <Wrapper>
      <TravelForm onSubmitData={onSubmitData}/>
      <TravelInfo userData={userData}/>
    </Wrapper>
  );
}

export default App;
import React from "react";
import HomeCard from "../../HomeCard/HomeCard";

const Lobby = ({ type }) => {
  return (
    <div>
      <div>this is lobby of type {type}</div>
      <HomeCard/>
    </div>
  );
};
export default Lobby;

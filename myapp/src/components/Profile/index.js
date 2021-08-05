import React from "react";
import { PROFILE_TOGGLE_SHOW } from "../../store/actionTypes";
import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {
  const profileState = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleShow = () => {
    dispatch({
      type: PROFILE_TOGGLE_SHOW,
    });
  };
  //console.log(profileState);

  return (
    <>
      <h2>THIS IS PROFILE</h2>
      <p><input type="checkbox" onChange={toggleShow} />TOGGLE show</p>
      
      {profileState.show && <div>THIS DEPENDS ON GLOBAL REDUX STATE</div>}
    </>
  );
};

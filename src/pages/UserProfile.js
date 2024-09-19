// src/pages/UserProfile.js
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();  // Get the dynamic parameter

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserProfile;

import React from "react";
import { auth } from "../firebase";

export const Feed = () => {
  return (
    <div>
      Feed
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

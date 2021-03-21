import React from "react";

export const AuthOpenContext = React.createContext([false, () => {}]);

export const ModelOpenContext = React.createContext([
  { open: false, modelNo: 0 },
  () => {},
]);

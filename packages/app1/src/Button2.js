import React from "react";

import Button from "app2/Button";

const Button2 = () => (
  <React.Suspense fallback="loading">
    <Button />
  </React.Suspense>
);
export default Button2;

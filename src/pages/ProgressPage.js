import { connect } from "react-redux";
import React from "react";
import MeasurementsGrid from "../containers/MeasurementsGrid";
import LogIn from "./LogIn";
import { checkToken } from "../api-requests";

const ProgressPage = () => {
  const todaysDate = new Date();
  const result = todaysDate.toUTCString().split(" ");
  result.splice(4, 2);
  const finalValue = result.join(" ");

  return (
    <>
      {checkToken() ? (
        <div className="Page py-3">
          <div className="d-flex justify-content-center mt-3 font-weight-bold">
            {finalValue}
          </div>

          <MeasurementsGrid />
        </div>
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default connect()(ProgressPage);

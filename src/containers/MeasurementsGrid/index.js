import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MeasurementItem from "../MeasurementItem";
import { Grid, Typography } from "@material-ui/core";
import { measureData, userData } from "../../redux/actions";
import { changeToken, getMeasurements } from "../../api-requests";
import SubmitForm from "../../components/SubmitForm";
import store from "../../redux/store";

const MeasurementsGrid = ({ userInfo, measureData, dataInfo }) => {
  const [fetchRequested, setFetchRequested] = useState(false);
  useEffect(() => {
    store.dispatch(
      userData({
        isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
        userToken: JSON.parse(localStorage.getItem("tokenObj")),
        userInfo: localStorage.getItem("userInfo"),
        userId: JSON.parse(localStorage.getItem("userId")),
      })
    );
    changeToken(store.getState().userStore.userToken.token);
    getMeasurements(measureData);
  }, [fetchRequested, measureData]);

  return (
    <>
      <Typography className="text-center py-4">
        {userInfo}'s Measurements:
      </Typography>

      <Grid container item xs={12} spacing={3} alignItems="center" m={0}>
        {dataInfo ? (
          <>
            {dataInfo.map((el) => (
              <MeasurementItem key={el.id} el={el} />
            ))}
          </>
        ) : (
          <></>
        )}

        <SubmitForm
          value={dataInfo}
          setFetchRequested={setFetchRequested}
          fetchRequested={fetchRequested}
          formType={"Add Measurement"}
        />
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userStore.userInfo,
  dataInfo: state.measureStore.dataInfo,
});

MeasurementsGrid.propTypes = {
  userInfo: PropTypes.string,
  dataInfo: PropTypes.array,
};

const mapDispatch = {
  measureData,
};

export default connect(mapStateToProps, mapDispatch)(MeasurementsGrid);

import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { measureData, userData } from "../redux/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkToken, getMeasurements, changeToken } from "../api-requests";
import { Button, Paper } from "@material-ui/core";
import { Face, Assessment, MenuBook } from "@material-ui/icons";
import fullLogo from "../images/full_logo.png";
import store from "../redux/store";

const UserPage = ({
  isLoggedIn,
  dataInfo,
  measureData,
  userToken,
  userInfo,
}) => {
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
  }, [measureData]);
  const totalMeasurments = () =>
    dataInfo.map((el) => el.measures.map((el) => el.value_of_measure)).length;

  const totalMeasures = () =>
    dataInfo
      .map((el) => el.measures.map((el) => el.value_of_measure))
      .reduce((count, row) => count + row.length, 0);

  return (
    <div className="Page">
      {checkToken() && dataInfo ? (
        <Paper
          elevation={3}
          className="p-3 profile d-flex flex-column align-items-center justify-content-around"
        >
          <div className=" p-3 d-flex flex-column align-items-center ">
            <img className="fulllogo" src={fullLogo} alt="Logo" />
            <p className="mb-4">
              <Face />
              {userInfo}
            </p>

            <p>
              <Assessment />
              Number of Measurements added:
            </p>
            <p>{totalMeasurments()}</p>
            <p>
              <MenuBook /> Total of Measures recorded:
            </p>
            <p>{totalMeasures()}</p>
          </div>
          <div>
            <div className="text-center text-secondary">
              <Link to="/">
                <Button>Home</Button>
              </Link>
              <Link to="/new">
                <Button>Add more Tracks!</Button>
              </Link>
            </div>
            <div className="p-2 mb-3 d-flex flex-column  align-items-center"></div>
            <h5 className="mx-auto">Copyright © 2021 by Bassey David</h5>
          </div>
        </Paper>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userStore.isLoggedIn,
  userToken: state.userStore.userToken,
  userInfo: state.userStore.userInfo,
  dataInfo: state.measureStore.dataInfo,
});

UserPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userToken: PropTypes.shape({ token: PropTypes.string }).isRequired,
  userInfo: PropTypes.string.isRequired,
  dataInfo: PropTypes.array.isRequired,
};

const mapDispatch = {
  measureData,
};

export default connect(mapStateToProps, mapDispatch)(UserPage);

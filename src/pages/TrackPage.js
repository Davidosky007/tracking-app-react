import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { measureData, userData } from "../redux/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MeasureItem from "../components/MeasureItem";
import { checkToken, getMeasurements, changeToken } from "../api-requests";
import store from "../redux/store";

const TrackPage = ({ isLoggedIn, dataInfo, measureData, userToken }) => {
  const { id } = useParams();
  const [fetchRequested, setFetchRequested] = useState(false);
  useEffect(() => {
    getMeasurements(measureData);
    store.dispatch(
      userData({
        isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
        userToken: JSON.parse(localStorage.getItem("tokenObj")),
        userInfo: localStorage.getItem("userInfo"),
        userId: JSON.parse(localStorage.getItem("userId")),
      })
    );
    changeToken(store.getState().userStore.userToken.token);
  }, [fetchRequested, measureData]);
  return (
    <div className="Page w-100 Page">
      {checkToken() && dataInfo ? (
        <>
          <h3 className="my-4 text-center">All Your Tracks</h3>

          {dataInfo.map((item) => {
            return (
              <div key={item.id}>
                {item.measures.length > 0 ? (
                  <h4 className="my-4 text-center">
                    Your <span style={{ color: "#62b5e5" }}>{item.name}</span>{" "}
                    's Progress
                  </h4>
                ) : (
                  <></>
                )}

                <MeasureItem
                  id={id}
                  fetchRequested={fetchRequested}
                  setFetchRequested={setFetchRequested}
                  item={item}
                  measureData={measureData}
                  userToken={userToken}
                  isLoggedIn={isLoggedIn}
                />
              </div>
            );
          })}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userStore.isLoggedIn,
  userToken: state.userStore.userToken,
  dataInfo: state.measureStore.dataInfo,
});

TrackPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userToken: PropTypes.shape({ token: PropTypes.string }).isRequired,
  dataInfo: PropTypes.array.isRequired,
};

const mapDispatch = {
  measureData,
};

export default connect(mapStateToProps, mapDispatch)(TrackPage);

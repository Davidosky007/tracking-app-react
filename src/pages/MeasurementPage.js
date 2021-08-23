import React, { useEffect, useState, useRef } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { measureData, userData } from "../redux/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MeasureItem from "../components/MeasureItem";
import {
  changeToken,
  checkToken,
  getMeasurements,
  removeMeasurement,
} from "../api-requests";
import SubmitForm from "../components/SubmitForm";
import { Modal, Button } from "react-bootstrap";
import store from "../redux/store";

const MeasurementPage = ({ isLoggedIn, dataInfo, measureData, userToken }) => {
  const [show, setShow] = useState(false);
  const isMountedRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const [fetchRequested, setFetchRequested] = useState(false);
  const history = useHistory();
  useEffect(() => {
    isMountedRef.current = true;
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
    return () => isMountedRef.current = false;
  }, [fetchRequested]);

  const measurementInfo = dataInfo ? dataInfo.find((el) => el.id == id) : [];
  return (
    <div className="Page w-100">
      {checkToken() && dataInfo ? (
        <>
          <h3 className="my-4 text-center">
            Your{" "}
            <span style={{ color: "#62b5e5" }}>{measurementInfo.name}</span> 's
            Progress
          </h3>
          <SubmitForm
            userToken={userToken}
            value={id}
            setFetchRequested={setFetchRequested}
            fetchRequested={fetchRequested}
            formType={"ADD"}
          />
          <MeasureItem
            id={id}
            fetchRequested={fetchRequested}
            setFetchRequested={setFetchRequested}
            item={measurementInfo}
            measureData={measureData}
            userToken={userToken}
            isLoggedIn={isLoggedIn}
          />
          <Button variant="danger" onClick={handleShow}>
            Delete Measurement
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Warning: deleting this Measurement will be permanent!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this measurement?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={async () => {
                  handleClose();
                  await removeMeasurement(
                    id,
                    userToken,
                    fetchRequested,
                    setFetchRequested
                  );
                  history.push(`/`);
                }}
              >
                Delete Measurement
              </Button>
            </Modal.Footer>
          </Modal>
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

MeasurementPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userToken: PropTypes.shape({ token: PropTypes.string }).isRequired,
  dataInfo: PropTypes.array.isRequired,
};

const mapDispatch = {
  measureData,
};

export default connect(mapStateToProps, mapDispatch)(MeasurementPage);
import React, { useReducer } from "react";
import { Button, Slide, FormControlLabel, TextField } from "@material-ui/core";
import { updateMeasure, addMeasure, addMeasurement } from "../../api-requests";
import Edit from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Icon } from "@material-ui/core";

const SubmitForm = ({
  value,
  setFetchRequested,
  fetchRequested,
  formType,
  userId,
}) => {
  const [checked, setChecked] = React.useState(false);
  const editForm = formType === "EDIT";
  const measurementForm = formType === "Add Measurement";

  const buttonText = editForm ? "Edit" : "Add";

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      measure: "",
    }
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let inputValue = formInput.measure;
    editForm
      ? updateMeasure(value, setFetchRequested, fetchRequested, inputValue)
      : measurementForm
      ? addMeasurement(userId, fetchRequested, setFetchRequested, inputValue)
      : addMeasure(value, setFetchRequested, fetchRequested, inputValue);

    setChecked(!checked);
    setFormInput({ measure: "" });
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <>
      <FormControlLabel
        style={{ margin: "0px" }}
        control={
          <>
            {editForm ? (
              <Edit onClick={() => setChecked(!checked)} />
            ) : (
              <AddCircleOutlineIcon
                style={{ color: "#43b5e8", fontSize: "50px" }}
                onClick={() => setChecked(!checked)}
              />
            )}
          </>
        }
      />
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <form onSubmit={handleSubmit}>
          <TextField
            type={measurementForm ? "any" : "number"}
            label={measurementForm ? formType : buttonText + " Measure (cm)"}
            id="margin-normal"
            name="measure"
            defaultValue={formInput.measure}
            helperText={measurementForm ? "" : "Use only numbers"}
            onChange={handleInput}
            required={true}
          />

          <Button
            type="submit"
            variant="contained"
            style={{ color: "#43b5e8" }}
          >
            {measurementForm ? formType : buttonText + " Measure"}
            <Icon>send</Icon>
          </Button>
        </form>
      </Slide>
    </>
  );
};

export default SubmitForm;

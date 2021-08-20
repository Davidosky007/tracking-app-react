import React from "react";
import { deleteMeasure } from "../../api-requests";
import { Grid, List, ListItem, ListItemText, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SubmitForm from "../SubmitForm";
import "./index.css";
import { TrendingDown, TrendingUp } from "@material-ui/icons";

const MeasureItem = ({ setFetchRequested, fetchRequested, item, userId }) => {
  const creationDate = (date) => {
    const createdAt = new Date(date)
      .toUTCString()
      .split(" ")
      .splice(1, 3)
      .join(" ");

    return createdAt;
  };

  const deleteIcon = (value) => (
    <DeleteIcon
      onClick={() => deleteMeasure(value, setFetchRequested, fetchRequested)}
    />
  );

  const editIcon = (value) => (
    <SubmitForm
      value={value}
      setFetchRequested={setFetchRequested}
      fetchRequested={fetchRequested}
      formType={"EDIT"}
      userId={userId}
    />
  );
  let measureArr = item.measures.map((item) => parseInt(item.value_of_measure));
  let diffArr = [];
  let reversedArr = [];
  for (let i = 0; i < measureArr.length; i++) {
    diffArr.unshift(measureArr[i] - measureArr[i - 1]);
    reversedArr.unshift(item.measures[i]);
  }

  const showProgress = (idx) => {
    return (
      <span>
        {diffArr[idx] ? (
          <>
            <span>{diffArr[idx] >= 0 ? <TrendingUp /> : <TrendingDown />}</span>
            <span className="ml-1 mr-4">{`${diffArr[idx]}cm`}</span>
          </>
        ) : (
          <></>
        )}
      </span>
    );
  };

  return (
    <>
      {reversedArr.map((value, idx) => {
        return (
          <Grid key={value.id} item className="my-3">
            <Paper elevation={3}>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText
                    primary={creationDate(value.created_at)}
                    secondary={`${value.value_of_measure} cm`}
                  />

                  {showProgress(idx)}
                  <div className="d-flex flex-column align-items-end">
                    {editIcon(value)}
                    {deleteIcon(value)}
                  </div>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};

export default MeasureItem;

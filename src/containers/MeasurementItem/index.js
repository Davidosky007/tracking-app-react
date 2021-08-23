import React from "react";
import {
  Grid,
  Paper,
  Box,
  ListItem,
  List,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, FitnessCenter } from "@material-ui/icons";
import "./index.css";

import { useHistory } from "react-router-dom";
const MeasurementItem = ({ el }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const history = useHistory();
  const numOfMeasures = el.measures.length;
  const updatedAt = new Date(el.updated_at)
    .toUTCString()
    .split(" ")
    .splice(1, 3)
    .join(" ");

  return (
    <Grid elevation={3} item xs={6} sm={6} md={6} lg={6} xl={6}>
      <Paper elevation={3} key={el.created_at}>
        <Box
          padding={3}
          className="name"
          onClick={() => history.push(`/measurements/${el.id}`)}
        >
          <div className="d-flex justify-content-between">
            <FitnessCenter />
            <h4>{el.name}</h4>
          </div>
        </Box>

        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItem button onClick={handleClick}>
            <ListItemText primary="More info" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText
                  primary={`${numOfMeasures} Entries`}
                  secondary={`Last updated at: ${updatedAt}`}
                />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Paper>
    </Grid>
  );
};

export default MeasurementItem;

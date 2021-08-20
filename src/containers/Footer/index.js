import React from "react";
import "./index.css";

import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartPie,
  faEllipsisH,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Footer = () => {
  const history = useHistory();
  const [value, setValue] = React.useState("addmeasure");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
      className="footer bg-dark h-100 w-100"
    >
      <BottomNavigationAction
        className="p-1 text-white"
        label="Add Measure"
        value="addmeasure"
        onClick={() => {
          history.push("/new");
        }}
        icon={<FontAwesomeIcon className="m-1 text-white" icon={faChartBar} />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        className="p-1 text-white"
        label="Track"
        value="trackit"
        onClick={() => {
          history.push("/measurements");
        }}
        icon={<FontAwesomeIcon className="m-1 text-white" icon={faChartLine} />}
      />
      <BottomNavigationAction
        className="p-1 text-white"
        label="Your Progress"
        value="progress"
        onClick={() => {
          history.push("/");
        }}
        icon={<FontAwesomeIcon className="m-1 text-white" icon={faChartPie} />}
      />
      <BottomNavigationAction
        className="p-1 text-white"
        label="More"
        value="more"
        onClick={() => {
          history.push("/profile");
        }}
        icon={<FontAwesomeIcon className="m-1 text-white" icon={faEllipsisH} />}
      />
    </BottomNavigation>
  );
};

export default Footer;

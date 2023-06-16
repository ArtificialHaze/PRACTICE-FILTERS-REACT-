import React from "react";
import { makeStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: { width: "100%" },

  thumb: { color: "#000" },

  rail: { color: "rgba(0,0,0,0.25)" },

  track: { color: "#000" },
});

const PriceSlider = ({ value, changePrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={1000}
        max={6000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default PriceSlider;

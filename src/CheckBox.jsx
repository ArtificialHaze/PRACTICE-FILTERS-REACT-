import { FormControlLabel, Checkbox } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },

  checked: {},

  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },

  label: {
    fontSize: "0.8rem",
    fontFomily: "sans-serif",
  },
});

const CheckBox = ({ cusine, changeCheckBox }) => {
  const classes = useStyles();
  const { checked, label, id } = cusine;

  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeCheckBox(id)}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckBox;

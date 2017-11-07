import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Step from "./Step";
import statusTypes from "../constants/statusTypes";

const style = { margin: "20px 0" };
storiesOf("Step (private)", module)
  .add(
    "pending",
    withInfo()(() => (
      <Step
        index={0}
        value="Pending step"
        status={statusTypes.PENDING}
        onClick={action("clicked")}
        style={style}
      />
    ))
  )
  .add(
    "current",
    withInfo()(() => (
      <Step
        index={0}
        value="Current step"
        status={statusTypes.CURRENT}
        onClick={action("clicked")}
        style={style}
      />
    ))
  )
  .add(
    "completed",
    withInfo()(() => (
      <Step
        index={0}
        value="Completed step"
        status={statusTypes.COMPLETED}
        onClick={action("clicked")}
        style={style}
      />
    ))
  );

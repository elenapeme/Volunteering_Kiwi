import React from "react";
import "./CurrentEvent.scss";
import Button from "@kiwicom/orbit-components/lib/Button";

const CurrentEvent = ({ showEvent , currentEvent}) => {
  if (!showEvent) {
    return null;
  }
  return (
    <div className="current-event">
      <h1>Name of the Event: World Tech Conference </h1>
      <Button
        onClick={() => {}}
        ariaControls="element ID"
        ariaExpanded={false}
        title="Additional information for accessibility"
      >
          Apply for Volunteering
      </Button>
    </div>

  );
};


export default CurrentEvent;

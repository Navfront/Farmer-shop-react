import React from "react";
import TextBlock from "../text-block/text-block";
import "./style.css";

const LABEL_CLASSES = "text text--spaced text--small";

const isWarning = (data) => {
  if (data.WARNING) {
    return "adventage-card adventage-card--warning";
  } else {
    return "adventage-card";
  }
};

const AdventageCard = ({ contentData, className = "" }) => {
  return (
    <li className={className ? isWarning(contentData) + " " + className : isWarning(contentData)}>
      <div className="adventage-card__top">
        <img className="adventage-card__icon" src={contentData.IMAGE_URL} alt="icon" width="56" height="56" />
        <div className="adventage-card__title-block">
          <TextBlock
            className={
              contentData.WARNING
                ? "adventage-card__label adventage-card__label--warning" + " " + LABEL_CLASSES
                : "adventage-card__label" + " " + LABEL_CLASSES
            }
          >
            {contentData.LABEL}
          </TextBlock>
          <TextBlock className="text text--bold text--spaced adventage-card__heading">{contentData.TITLE}</TextBlock>
        </div>
      </div>
      <TextBlock className="adventage-card__text text text--spaced">{contentData.TEXT_CONTENT}</TextBlock>
    </li>
  );
};

export default AdventageCard;

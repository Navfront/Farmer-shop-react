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
    <section className={className ? isWarning(contentData) + " " + className : isWarning(contentData)}>
      <header className="adventage-card__header">
        <img
          loading="lazy"
          className="adventage-card__icon"
          src={contentData.IMAGE_URL}
          alt="icon"
          width="56"
          height="56"
        />
        <div className="adventage-card__title-block">
          <h3 className="visually-hidden">{contentData.TITLE}</h3>
          <TextBlock
            className={
              contentData.WARNING
                ? "adventage-card__label adventage-card__label--warning " + LABEL_CLASSES
                : "adventage-card__label " + LABEL_CLASSES
            }
          >
            {contentData.LABEL}
          </TextBlock>
          <TextBlock aria-hidden="true" className="text text--bold text--spaced adventage-card__heading">
            {contentData.TITLE}
          </TextBlock>
        </div>
      </header>
      <TextBlock className="adventage-card__text text text--spaced">{contentData.TEXT_CONTENT}</TextBlock>
    </section>
  );
};

export default AdventageCard;

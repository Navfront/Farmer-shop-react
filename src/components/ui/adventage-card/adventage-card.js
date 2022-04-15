import React from "react";
import TextBlock from "../text-block/text-block";
import {
  StyledAdventageCard,
  AdventageCardHeader,
  AdventageCardIcon,
  AdventageCardLabel,
  AdventageCardHeading,
} from "./styled";

const AdventageCard = ({ contentData }) => {
  return (
    <StyledAdventageCard isWarningStyle={contentData.WARNING}>
      <AdventageCardHeader>
        <AdventageCardIcon loading="lazy" src={contentData.IMAGE_URL} alt="icon" width="56" height="56" />
        <div>
          <h3 className="visually-hidden">{contentData.TITLE}</h3>
          <AdventageCardLabel isWarningStyle={contentData.WARNING}>{contentData.LABEL}</AdventageCardLabel>
          <AdventageCardHeading aria-hidden="true" textStyle="normalBold">
            {contentData.TITLE}
          </AdventageCardHeading>
        </div>
      </AdventageCardHeader>
      <TextBlock>{contentData.TEXT_CONTENT}</TextBlock>
    </StyledAdventageCard>
  );
};

export default AdventageCard;

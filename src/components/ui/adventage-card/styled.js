import styled from "styled-components";
import TextBlock from "../text-block/text-block";

export const StyledAdventageCard = styled.section`
  box-sizing: border-box;
  background-color: ${(props) => (props.isWarningStyle ? props.theme.colors.pink : props.theme.colors.lightGreen)};
  padding: 22px 20px;
  width: 100%;
  min-height: 197px;
`;

export const AdventageCardHeader = styled.header`
  display: flex;
`;

export const AdventageCardIcon = styled.img`
  margin-right: 20px;
  display: block;
  height: 56px;
  width: 56px;
`;

export const AdventageCardLabel = styled.span`
  background-color: ${(props) => (props.isWarningStyle ? props.theme.colors.red : props.theme.colors.green)};
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  margin: 0;
  margin-bottom: 4px;
  padding: 2px 10px;
`;

export const AdventageCardHeading = styled(TextBlock)`
  margin: 0;
`;

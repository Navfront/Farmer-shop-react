import styled from "styled-components/macro";

export const StyledFormBlock = styled.section`
  box-sizing: border-box;
  width: 353px;
  padding: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};

  * + * {
    margin-top: 20px;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    margin-top: 10px;
  }
  input[type="checkbox"],
  input[type="radio"] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  input[type="checkbox"] + label {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.dark};
  }
  input[type="checkbox"] + label::after {
    content: "";
    box-sizing: border-box;
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 1;
    background-color: ${({ theme }) => theme.colors.grey};
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: 15px;
  }
  input[type="checkbox"]:checked + label::after {
    background-color: ${({ theme }) => theme.colors.buttonPrimary};
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7657 0.359267C15.4533 0.0468296 14.9468 0.0468296 14.6343 0.359267L5.04983 9.94386L1.3657 6.25974C1.0533 5.9473 0.546797 5.94733 0.234328 6.25974C-0.0781094 6.57214 -0.0781094 7.07864 0.234328 7.39108L4.48414 11.6408C4.79645 11.9532 5.30333 11.953 5.61552 11.6408L15.7657 1.49064C16.0781 1.17824 16.0781 0.671705 15.7657 0.359267Z' fill='white'/%3E%3C/svg%3E%0A");
    border: none;
    background-repeat: no-repeat;
    background-position: center;
  }
  input[type="checkbox"]:disabled + label::after {
    opacity: 0.6;
  }

  input[type="text"] {
    background-color: ${({ theme }) => theme.colors.inputDefault};
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 14px 12px 13px;
    box-sizing: border-box;

    &::placeholder {
      font-family: inherit;
      font-size: 14px;
      line-height: 150%;
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;

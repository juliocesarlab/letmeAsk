import styled from "styled-components";

export const ButtonStyle = styled.div`
  .button {
    padding: 0 32px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #835afd;
    color: #fff;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: filter 0.2s;

    &:not(:disabled):hover {
      filter: brightness(1.2);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.outlined {
      background: #fff;
      border: 1px solid #835afd;
      color: #835afd
    }
  }
`;

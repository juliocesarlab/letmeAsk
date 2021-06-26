import styled from "styled-components";

export const StyledQuestion = styled.div`
  &.dark {
    &.answered {
      background: lightgray;

      p {
        color: #29292e;
        text-decoration: line-through;
      }

      .user-info {
        span {
          color: #29292e;
          text-decoration: line-through;
        }
      }
    }

    &.highlighted {
      background: #29292e;
      border: 1px solid white;

      p {
        color: #fff;
      }

      .user-info {
        span {
          color: #fff;
        }
      }

      .buttons {
        button {
          color: white;
        }
      }
    }
  }

  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin-top: 40px;

  &.answered {
    background: #dbdbdb;
  }

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid #835afd;

    footer .user-info span {
      color: #29292e;
    }
  }

  & + & {
    margin-top: 8px;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
    }
    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }

      &.like-button {
        display: flex;
        align-items: flex-end;
        gap: 8px;
      }

      &.liked {
        color: #835afd;

        svg path {
          stroke: #835afd;
        }
      }
    }
  }
`;

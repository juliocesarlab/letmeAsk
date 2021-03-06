import styled from "styled-components";

export const StyledRoomAdmin = styled.div`
  
  
  &.themeBugFix{
    height: 100vh;
    overflow-y: scroll;
  }
  
  height: 100vh;

  #noQuestions {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  

  &.dark {
    
    height: 100vh;
    background: #121212;
    transition: background-color 0.5s;

    header {
      background: #272727;
      border: none;
    }

    button {
      color: #fff;
      background: #272727;
      border: 1px solid #121212;
    }

    main {
      .room-title {
        h1 {
          color: #fefefe;
        }
        span {
          color: #fefefe;
          background: #737380;
        }
      }
    }
    .endRoomButtonDark {
      border: none;
      background: #737380;
      color: white;
    }
    .buttons {
      button {
        background: transparent;
        border: 0;
      }
    }
  }

  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    .content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }

      > div#change-theme-div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }

        button.theme {
          background: transparent;
          border: 0;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        color: #29292e;
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: none;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

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
            color: #29292e;
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: #737380;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }
    .buttons {
      display: flex;
      gap: 16px;
    }
  }

  @media (max-width: 800px) {
    &.themeBugFix{
    height: fit-content;
  }
    
    header {
      .content {
        max-width: 360px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > img {
          max-height: 40px;
        }

        > div#change-theme-div {
          display: flex;
          width: 222px;
          height: 100%;
          justify-content: center;
          align-items: center;
          padding: 4px;

          button {
            background: none;
            height: 40px;
            padding: 0 2px;
            margin: 0;
            width: 100px;
            border: none;

            > span {
              display: none;
            }
          }

          button.theme {
            background: none;
            position: relative;
            right: 24px;
            width: 18px;
            border: 0;
            
          }
        }
      }
    }
    main{
      .room-title{
        padding-left: 16px;
      }

      #noQuestions{
        padding-left: 16px;

        h1{
          font-size: 32px;
        }
      }
    }
  }
`;

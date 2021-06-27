import styled from "styled-components";

export const StyledRoomCode = styled.button`

&.dark{
  > div {
    background: transparent;
  }
}

&{
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;
  align-items: center;

  > div {
    background: #835afd;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
}

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }
}

@media (max-width: 800px){
  &{
    border-radius: 0px;

    >span{
      display: none;
    }
    

    >div{
      border-radius: 50%;
      
      display: flex;
      justify-content: center;
      align-items: center;
      width: 38px;
      margin-left: 4px;
      z-index: 10;

      >img{
        width: 22px;
        margin-left: -1.3px;
      }
    }
  }
}

`
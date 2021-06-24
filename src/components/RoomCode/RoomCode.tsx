import copyImg from "../../assets/copy.svg";
import { StyledRoomCode } from "./style";

type RoomCodeType = {
  code: string;
};

export const RoomCode = (props: RoomCodeType) => {
  const copyRoomToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };

  return (
    <StyledRoomCode onClick={copyRoomToClipboard}>
      <div>
        <img src={copyImg} alt="Código de sala" />
      </div>
      <span>Sala #{props.code}</span>
    </StyledRoomCode>
  );
};

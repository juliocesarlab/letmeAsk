import copyImg from "../../assets/copy.svg";
import { StyledRoomCode } from "./style";
import { useTheme } from '../../hooks/useTheme'

type RoomCodeType = {
  code: string;
};

export const RoomCode = (props: RoomCodeType) => {
  const { theme } = useTheme()
  const copyRoomToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };

  return (
    <StyledRoomCode onClick={copyRoomToClipboard} className={theme === 'dark' ? 'dark' : ''}>
      <div>
        <img src={copyImg} alt="Código de sala" />
      </div>
      <span>Sala #{props.code}</span>
    </StyledRoomCode>
  );
};

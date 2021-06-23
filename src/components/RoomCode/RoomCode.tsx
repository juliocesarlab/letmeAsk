import copyImg from '../../assets/copy.svg'
import { StyledRoomCode } from './style'

export const RoomCode = () => (
  <StyledRoomCode>  
    <div>
      <img src={copyImg} alt="Código de sala" />
    </div>
    <span>Sala #234234235234234</span>
  </StyledRoomCode>
)
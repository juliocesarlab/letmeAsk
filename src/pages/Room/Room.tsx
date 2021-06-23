import logoImg from "../../assets/logo.svg";
import { Button } from "../../components/Button/Button";
import { StyledRoom } from "./styles";
import { RoomCode } from "../../components/RoomCode/RoomCode";

export const Room = () => {
  return (
    <StyledRoom id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <RoomCode />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar ?" />
          <div className="form-footer">
            <span>
              Para enviar uma pergunta, <button>faça login</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </StyledRoom>
  );
};

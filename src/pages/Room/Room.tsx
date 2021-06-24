import { StyledRoom } from "./styles";

import { useParams } from "react-router-dom";

import { FormEvent, useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button/Button";
import { RoomCode } from "../../components/RoomCode/RoomCode";

import logoImg from "../../assets/logo.svg";
import { database } from "../../services/firebase";

type RoomParams = {
  id: string;
};

export const Room = () => {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState("");
  const roomId = params.id;

  const handleSendQuestion = async (e: FormEvent) => {
    e.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error("Você deve estar logado para fazer perguntas");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('')
  };

  return (
    <StyledRoom id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar ?"
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
          { user 
            ? 
            <div className="user-info">
              <img src={user.avatar} alt={user.name} />
              <span>{user.name}</span>
            </div> 
            : 
            <span>
              Para enviar uma pergunta, <button>faça login</button>
            </span>
          }
            <Button type="submit">Enviar pergunta</Button> 
            
          </div>
        </form>
      </main>
    </StyledRoom>
  );
};

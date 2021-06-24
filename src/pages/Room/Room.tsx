import { StyledRoom } from "./styles";

import { useParams } from "react-router-dom";

import { FormEvent, useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button/Button";
import { RoomCode } from "../../components/RoomCode/RoomCode";
import { Question } from "../../components/Questions/Question";

import { database } from "../../services/firebase";

import logoImg from "../../assets/logo.svg";
import { UseRoom } from "../../hooks/UseRoom";

type RoomParams = {
  id: string;
};

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = UseRoom(roomId);

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

    setNewQuestion("");
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
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar ?"
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça login</button>
              </span>
            )}
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>

        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            />
          );
        })}
      </main>
    </StyledRoom>
  );
};

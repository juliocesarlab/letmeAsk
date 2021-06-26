import { StyledRoomAdmin } from "./styles";
import { RiLightbulbLine, RiLightbulbFill } from "react-icons/ri";

import { useHistory, useParams } from "react-router-dom";

import { UseRoom } from "../../hooks/UseRoom";


import { useTheme } from "../../hooks/useTheme";

import { Button } from "../../components/Button/Button";
import { RoomCode } from "../../components/RoomCode/RoomCode";
import { Question } from "../../components/Questions/Question";

import { database } from "../../services/firebase";

import logoImg from "../../assets/logo.svg";
import deleteImg from "../../assets/delete.svg";
import checkImg from "../../assets/check.svg";
import answerImg from "../../assets/answer.svg";

type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const {theme, toggleTheme} = useTheme()
  const params = useParams<RoomParams>();
  
  const roomId = params.id;
  const history = useHistory();

  const { questions, title } = UseRoom(roomId);

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  };

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  };

  const handleHighlightQuestion = async (questionId: string) => {
    
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  };

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm("Você tem certeza que deseja excluir essa pergunta ?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    } else {
      return;
    }
  };

  return (
    <StyledRoomAdmin id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <div id="change-theme-div">
            <RoomCode code={params.id} />
            <button onClick={toggleTheme} className="theme">
              {theme === "light" ? (
                <RiLightbulbLine size={24} />
              ) : (
                <RiLightbulbFill size={24} />
              )}
            </button>
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => handleCheckQuestionAsAnswered(question.id)}
                >
                  <img src={checkImg} alt="Marcar pergunta como respondida" />
                </button>
                <button
                  type="button"
                  onClick={() => handleHighlightQuestion(question.id)}
                >
                  <img src={answerImg} alt="responder pergunta" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="exluir pergunta" />
                </button>
              </div>
            </Question>
          );
        })}
      </main>
    </StyledRoomAdmin>
  );
};

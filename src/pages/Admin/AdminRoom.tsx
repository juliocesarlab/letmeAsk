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
import logoImgDark from "../../assets/logoDark.png";
import deleteImg from "../../assets/delete.svg";
import checkImg from "../../assets/check.svg";
import answerImg from "../../assets/answer.svg";
import { useEffect } from "react";
import { useState } from "react";

type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const { theme, toggleTheme } = useTheme();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [haveQuestions, setHaveQuestions] = useState<boolean>(true);
  const [questionsLength, setQuestionsLength] = useState<Number>(0);
  const questionsRef = database.ref(`/rooms/${roomId}/questions`);

  useEffect(() => {
    const questionsCheck = async () => {
      const questionsRef = await database
        .ref(`rooms/${roomId}/questions`)
        .get();
      const existQuestions = await questionsRef.val();
      if (existQuestions === null) setHaveQuestions(false);
    };

    questionsCheck();
  }, [roomId]);

  useEffect(() => {
    questionsRef.on("value", (obj) => {
      const responseVal = obj.val();
      if (responseVal) {
        const result = Object.keys(responseVal).length;
        setQuestionsLength(result);
      }

      return () => {
        questionsRef.off("value");
      };
    });
  }, [roomId, questionsRef]);
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
    <StyledRoomAdmin
      id="page-room"
      className={`
    ${theme === "dark" ? "dark" : ""} 
    ${questionsLength >= 3 ? "themeBugFix" : ""}

    `}
    >
      <header>
        <div className="content">
          <img
            src={theme === "dark" ? logoImgDark : logoImg}
            alt="Let me ask"
          />
          <div id="change-theme-div">
            <RoomCode code={params.id} />
            <button onClick={toggleTheme} className="theme">
              {theme === "light" ? (
                <RiLightbulbLine size={28} />
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

        {haveQuestions === false && (
          <div id="noQuestions">
            <h1>Ainda não foram feitas perguntas, chame seus amigos!</h1>
          </div>
        )}
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
                  <img src={deleteImg} alt="excluir pergunta" />
                </button>
              </div>
            </Question>
          );
        })}
      </main>
    </StyledRoomAdmin>
  );
};

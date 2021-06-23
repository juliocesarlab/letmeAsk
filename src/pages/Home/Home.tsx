import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button/Button";

import { database } from "../../services/firebase";

import illustrationImg from "../../assets/illustration.svg";
import logoImg from "../../assets/logo.svg";
import googleIconImage from "../../assets/google-icon.svg";

import { PageAuth } from "./style";
import { FormEvent } from "react";
import { useState } from "react";

export const Home = () => {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('')
  const { user, signInWithGoogle } = useAuth();

  const   handleCreateRoom = async () => {
    if (!user) {
        await signInWithGoogle()
    }

    history.push("/rooms/new");
  };

  const   handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault()
    
    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()){
      alert("Esta sala não existe")
      return;
    }

    history.push(`/rooms/${roomCode}`)

    
    
  };

  return (
    <PageAuth >
      <aside>
        <img src={illustrationImg} alt="illustrationImg" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeAsk" />

          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImage} alt="googleIconImage" />
            Crie sua sala com o Google
          </button>

          <div className="separator">Ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            
            <input type="text" 
            placeholder="Digite o código da sala"
            onChange={e => setRoomCode(e.target.value)}
            value={roomCode}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </PageAuth>
  );
};

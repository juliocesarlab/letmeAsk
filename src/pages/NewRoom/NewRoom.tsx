import { useState } from "react";
import { FormEvent } from "react";

import { Link, useHistory } from "react-router-dom";

import { database } from "../../services/firebase";

import { Button } from "../../components/Button/Button";


import { useAuth } from "../../hooks/useAuth";

import illustrationImg from "../../assets/illustration.svg";
import logoImg from "../../assets/logo.svg";

import { RoomStyle } from './style'



export const NewRoom = () => {
  
  const [newRoom, setNewRoom] = useState('')
  const { user } = useAuth()
  const history = useHistory() 
  
  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <RoomStyle >
      <aside>
        <img src={illustrationImg} alt="illustrationImg" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeAsk" />
          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            
            <input type="text" 
            placeholder="Nome da sala" 
            onChange={e => setNewRoom(e.target.value)} 
            value={newRoom}
            />

            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em um sala existente ? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </RoomStyle>
  );
};

import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import "../styles/auth.scss";

export const NewRoom = () => {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustrationImg" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeAsk" />
          <h2>Criar uma nova sala</h2>

          <form action="">
            <input type="text" placeholder="Nome da sala" />

            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em um sala existente ? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

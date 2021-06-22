import { useHistory } from "react-router";
import { auth, firebase } from "../services/firebase";
import { Button } from "../components/Button";

import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import googleIconImage from "../assets/google-icon.svg";

import "../styles/auth.scss";

export const Home = () => {
  const history = useHistory();

  const handleCreateRoom = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      history.push('/rooms/new');
    });

    
  };

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

          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImage} alt="googleIconImage" />
            Crie sua sala com o Google
          </button>

          <div className="separator">Ou entre em uma sala</div>

          <form action="">
            <input type="text" placeholder="Digite o código da sala" />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

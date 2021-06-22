import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import googleIconImage from "../assets/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";

export const Home = () => {
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

          <Button className="create-room">
            <img src={googleIconImage} alt="googleIconImage" />
            Crie sua sala com o Google
          </Button>

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

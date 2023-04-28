import logo from "../assets/logo.svg"
import "./global.css"
export function App() {
  return <div className="container">
    <header className = "header">
      <img src={logo} alt="Workflow logo" />
      <span>Textinho em Francês doidera</span>
    </header>

    <form>
      <div className="inputContainer">
        <label htmlFor="email">E-Mail</label>
        <input 
          type="text"
          name="email"
          id="email" 
          placeholder="johndoe@gmail.com" 
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          name="password"
          id="password" 
          placeholder="***************" 
        />
      </div>
      <a href="">Esqueceu sua senha?</a>

      <button className="button">
        Se conectar
        <img src="" alt="" />
      </button>

      <div className="footer">
        <p>Ainda não tem conta? <a href="">Criar Conta :)</a></p>
        
      </div>
      
    </form>
  </div>;
}

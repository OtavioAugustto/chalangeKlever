import User from "../user/User";
import photo from "../assets/img/user.jpg"


function Tavinho() {
  return (
    <div className="Tavinho">
      <header className="Tavinho-header">
        <p>
          <p>Eu sou um component chamado Tavinho</p>
          <User name="Camila" photo={photo}></User>
          <User name="Otávio" photo={photo}></User>
          <User name="João" photo={photo}></User>
          <User name="Gustavo" photo={photo}></User>
        </p>
      </header>
    </div>
  );
}

export default Tavinho;

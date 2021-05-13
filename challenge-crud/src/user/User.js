
function User(props) {
    return (
      <div>
        <div>
            Nome: {props.name}
        </div>
        <div>
            Foto: <img src={props.photo}/>
        </div>
      </div>
        
        
    );
  }
  
  export default User;
  
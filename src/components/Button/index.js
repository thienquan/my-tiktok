import myAlert from "~/myAlert"

function Button(){
  const alert = "Xin chào!";
  return <button onClick={() => myAlert(alert)}>Click me!</button>
}

export default Button
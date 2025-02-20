import Random from "./Random";
import Hello from "./Hello";
import KgButton from "./KgButton";
function App(){
let a = 10;
let b = 20;
let sum = (a + b)/2;

let fullName = () =>{
  return "Rakesh Kumar";
}

return <div>
  <h1>
    Hello World , please chech division of the two numbers {sum} and enter the fullName of the user {fullName()}
  </h1>
  {/* <KgButton> </KgButton> */}
  <Hello name="Rakesh" age={27} />
  <Random />
  <Random />
  <Random />
  <Random />

  </div>
   
  
}

export default App;
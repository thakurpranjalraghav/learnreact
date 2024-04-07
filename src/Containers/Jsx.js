import { jsx } from "react/jsx-runtime";

let name= "Pranjal";
function CheckEvenOrOdd(num){
  if (num%2==0){
    return <div> Even </div>
  }
  else {
    return <div> Odd </div>
  }

}
let char='a'
function CheckAlphabet(char){
  switch (char){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u': 
      return <div> Vowel </div>
    default:
      return <div> Not Vowel</div>
  }
}
let num =4;
const users=[
  {name:'Pranjal', age:20},
  {name:'Akshara', age:22},
  {name:'lakshi', age:25}
]
function Jsx() {
  return(
    <div>
      <h2>HELLO {name}</h2>
      <div>{
        CheckEvenOrOdd(5)
        }
        {
          num %2 === 0 ? <div> Even Number </div>
          : <div> Odd Number </div>
        }
         <h3>IF STATEMENT</h3>
        {
          num%2 === 0 && <div> Even Number </div>
        }
        {
          num%2>0 && <div> Odd Number </div> 
        }
      </div>
  
    <h3> Loop</h3>
    {
      users.map((item,index)=>{
        return <div key={index}>
        {item.name} - {item.age} </div>
      })  
    }
    {
        CheckAlphabet(char)
        }
      </div>
  );
}

export default Jsx;

export function Greet(){
  return <h1>Hello World!</h1>
}
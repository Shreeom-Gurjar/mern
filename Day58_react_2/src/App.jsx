import Hero from "./components/Hero";

const App = () =>{
 const name = "superman"
 let obj = {
  course1: 'React',
  course2: 'Angular',
  course3: 'Vue',
 }
 let arr = [10,20,30,40];
  return ( 
  <>
  <Hero />
  <div>
  <h1>We are learning react {name}</h1>
  {2+3}
  <ul>
    <li>{obj.course1}</li>
    <li>{obj.course2}</li>
    <li>{obj.course3}</li>
    
  </ul>
  <ol>
  <li>{arr[0]}</li>
  <li>{arr[1]}</li>
  <li>{arr[2]}</li>
  </ol>
  </div>
  <div>
    <h1>This is another h1</h1>
  </div>
  </>
  );
};
export default App;
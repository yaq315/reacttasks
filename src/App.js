
import Task1 from './componts/task1';
import Task2 from './componts/task2';
import Task3 from './componts/task3';
import Task4 from './componts/task4';
import Task5 from './componts/task5';
import image from './componts/imag.jpg';
import Task6 from './componts/task6';
import Task7 from './componts/task7';
import Task8 from './componts/task8';
import Task9 from './componts/task8';
import Task10 from './componts/task10';
import Task11 from './componts/task11';
function App() {
  const Task7Click = () => {
    alert('Task7 button clicked!');
  };
  return (
    <div className="App"><hr />
     <Task1 name="Amro"  /><hr />
    <Task2  label="Click Me"  /><hr />
    <Task3  PN="labtob" price="$999" description="---" /><hr /> 
    <Task4  username="amro" email="amro@orange.com" age="27" /><hr />
    <Task5  avatar={<img src= {image} alt="Amro" style={{ width: '100px', height: '100px',borderRadius:"30px"}}/>}
     name="amro" email="amro@orange.com" /> <hr />
     <Task6  hLink="Home" aLink="About" ctLink="Contant"/> <hr />
     <Task7 label="Click Me" onClick={Task7Click} /> <hr />
     <Task8 />
     <Task9 />
     <Task10 />
     <Task11 />
     
    </div>
  );
}

export default App;

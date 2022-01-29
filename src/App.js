import logo from './logo.svg';
import './App.css';
import './style.css';
import myWonderfulImage from "./jsx2.jpg"
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:'100vw'}}>
      <h1 className="title red">React JS</h1>
      <br></br>
      <img src={myWonderfulImage} alt ='jsx2' />
      <br></br>
      <img src="/jsx.jpg" alt ='jsx' />
      </div> 
      <div className='video'>
      <ReactPlayer url='https://youtu.be/9GtB5G2xGTY'/>
      </div>  
    </div>
  );
}

export default App;

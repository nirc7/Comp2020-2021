import logo from './logo.svg';
import './App.css';
import EFirstElem from './Elements/EFirstElem';
import CCDog from './ClassComponents/CCDog';

const App =
  <div style={{padding:5}}>
    <CCDog name="Snoopy" hasBone={true}/>
    <CCDog name="chubi" hasBone={false}/>
    {EFirstElem}
  </div>;
export default App;

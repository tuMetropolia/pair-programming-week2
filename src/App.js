import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import logo from './images/logo.svg';
import BoxColor from './components/BoxColor/BoxColor';

function App() {
  return (
    <>
      {/* <h3>React Practice</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      /> */}

      {/* <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings> */}

      {/* <Random min={1} max={2} />
      <Random min={1} max={100} /> */}

      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </>
  );
}

export default App;

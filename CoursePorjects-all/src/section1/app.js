import logo from './logo.svg';
import './App.css';
import Button from './propsAsFunction';
import Greeting from './props';

function App() {
    let x = 10;

    const increment = () => {
        for (let i = 0; i < 10; i++) {
            x += 10;
        }
        console.log(x)
    }
    return (
        <div className="">
            <Greeting name="osama bittar" className="red" />
            <Button onClick={increment} label="click here" ></Button>

        </div>
    );
}

export default App;

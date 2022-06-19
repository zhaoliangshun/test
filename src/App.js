import './App.scss';
import Test from './test';
import dayjs from 'dayjs'

function App() {
    return (
        <div className="App">
            <Test/>


            {dayjs().format('DD/MM/YYYY')}
        </div>
    );
}

export default App;

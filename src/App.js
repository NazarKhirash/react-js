import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className='wrapper'>
            <header className='header'>
                <div className='header_box'>
                    <Users/>
                </div>
                <div className='header_box'>
                    <Posts/>
                </div>
            </header>
            <div className='main'>
                <Comments/>
            </div>
        </div>
    );
}

export default App;

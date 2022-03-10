import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import {useState} from "react";

function App() {
    const [userId, setUserId]  = useState(null)


    return (
        <div>
            <Users setUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;

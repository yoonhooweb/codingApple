
import './App.css';
import { useState } from 'react';

function App() {

    let logo = "React Blog";
    let [title , a] = useState(["남자코트 추천","강남 우동 맛집","react 독학"]);
    let [count, countUp] = useState(0);
    
    return (
        
        <div className="App">
            <button className='button' onClick={()=> {a(["여자코트 변경", "강남 우동 맛집", "react 독학"])}}>버튼</button>
            <div className='black-nav'>
                <h4>{logo}</h4>
            </div>
            <div className='list'>
                <h4>{title[0]} <span onClick={()=>{countUp(count + 1)}}>❤️</span> {count}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{title[1]} <span >❤️</span> 0 개</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{title[2]} <span >❤️</span> 0 개</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>

    );
}

export default App;

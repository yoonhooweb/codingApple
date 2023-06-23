
import './App.css';
import { useState } from 'react';

function App() {

    let logo = "React Blog";
    let [title, reName] = useState(["남자코트 추천", "강남 우동 맛집", "react 독학"]);
    let [count, countUp] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState(0);

    return (

        <div className="App">
            <div className='black-nav'>
                <h4>{logo}</h4>
            </div>

            <button className='button' onClick={() => {
                let copy = [...title];
                copy[0] = "코트 추천";
                reName(copy);
            }}>글 수정</button>

            <button onClick={() => {
                let sorts = [...title].sort();
                reName(sorts);
            }}>정렬</button>
            {/* <div className='list'>
                <h4>{title[0]} <span onClick={() => { countUp(count + 1) }}>❤️</span> {count}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{title[1]} <span>❤️</span> 0 개</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{title[2]} <span onClick={ () => { modal == true ? setModal(false) : setModal(true) }} >❤️</span> 0 개</h4>
                <p>2월 17일 발행</p>
            </div> */}
            {

                title.map(function (v, i) {
                    return (
                        <div className='list' key={i}>
                            <h4 onClick={() => { modal == true ? setModal(false) : setModal(true)}}>{v} <span onClick={() => {
                                let copyCount = [...count];
                                
                                copyCount[i] = copyCount[i] + 1;
                                countUp(copyCount);
                                console.log(`count : ${count} / copyCount : ${copyCount}`);
                            }}>❤️</span> {count[i]}개</h4>
                            <p onClick={()=> {setModalTitle(i)}}>2월 17일 발행</p>
                        </div>
                    )
                })
            }

            {
                modal == true ? <Modal title={title} setShirts={reName} setBlueColor={"blue"} setModalTitle={modalTitle} /> : ''
            }
        </div >
    );
}


function Modal(props) {
    return (
        <div className="modal" >
            <h4>{props.title[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div >

    )
}

export default App;

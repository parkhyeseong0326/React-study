import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천','경남 우동 맛집','알고리즘 독학']);
  let [따봉,따봉변경] = useState(0);
  return (
    <div className='App'>
      <div className='black-nav'>

        <div>개발 blog</div>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트추천';
        글제목변경(copy);
      }}>글 수정</button>
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}>정렬 버튼</button>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>6월 25일 작성</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>6월 25일 작성</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>6월 25일 작성</p>
      </div>
      <Modal></Modal>
    </div>
  );
}
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세제목</p>
    </div>
  )
}
export default App;

/* esLint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [subject, setSubject] = useState(["시루", "웅비", "승아"]);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>react blog</h4>
      </div>

      <div className="list">
        <h4>
          {subject[0]}{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setLike(like + 1);
            }}
          >
            😇
          </span>{" "}
          {like}
        </h4>
        <p>5월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{subject[1]}</h4>
        <p>5월 2일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(modal ? false : true);
          }}
        >
          {subject[2]}
        </h4>
        <p>5월 2일 발행</p>
      </div>
      {modal ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;

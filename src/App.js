/* esLint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [subject, setSubject] = useState(["시루", "웅비", "승아"]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>react blog</h4>
      </div>

      {/* <div className="list">
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
            setModal(!modal);
          }}
        >
          {subject[2]}
        </h4>
        <p>5월 2일 발행</p>
      </div> */}

      {subject.map(function (item, index) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {subject[index]}
            </h4>
            <span
              // style={{ cursor: "pointer" }}
              onClick={() => {
                let copy = [...like];
                copy[index]++;
                setLike(copy);
              }}
            >
              😇
            </span>{" "}
            {like[index]}
            <p>5월 2일 발행</p>
          </div>
        );
      })}

      {modal ? (
        <Modal subject={[subject, setSubject]} backgroundColor={"gray"} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.backgroundColor }}>
      <h4>{props.subject[0][0]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          let copy = [...props.subject[0]];
          copy[0] = "멍멍";

          props.subject[1](copy);
        }}
      >
        수정
      </button>
    </div>
  );
}

export default App;

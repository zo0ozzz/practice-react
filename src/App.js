/* esLint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [subject, setSubject] = useState(["시루", "웅비", "승아"]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

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

      {subject.map((item, index) => {
        return (
          <Post
            subject={subject}
            setSubject={setSubject}
            like={like}
            setLike={setLike}
            modal={modal}
            setModal={setModal}
            setTitle={setTitle}
            index={index}
          />
        );
      })}

      <input type="text" />

      {modal ? (
        <Modal
          title={title}
          subject={subject}
          setSubject={setSubject}
          backgroundColor={"gray"}
        />
      ) : null}
    </div>
  );
}

function Post(props) {
  return (
    <div className="list">
      <h4
        onClick={() => {
          props.setTitle(props.index);
          props.setModal(!props.modal);
        }}
      >
        {props.subject[props.index]}
      </h4>
      <span
        // style={{ cursor: "pointer" }}
        onClick={() => {
          let copy = [...props.like];
          copy[props.index]++;
          props.setLike(copy);
        }}
      >
        😇
      </span>{" "}
      {props.like[props.index]}
      <p>5월 2일 발행</p>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.subject[props.title]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          let copy = [...props.subject];
          copy[props.title] = "멍멍";

          props.setSubject(copy);
        }}
      >
        수정
      </button>
    </div>
  );
}

export default App;

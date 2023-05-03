/* esLint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [subject, setSubject] = useState([]);
  let [like, setLike] = useState([]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");
  let 날짜 = new Date();
  // console.log(날짜.getSeconds());
  let [date, setDate] = useState([]);

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
            date={date}
            setDate={setDate}
            index={index}
          />
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          if (inputValue === "") {
            alert("제목을 입력해주세요.");
            return;
          }

          let copy = [...subject];

          copy.unshift(inputValue);

          setSubject(copy);

          let copy2 = [...like];

          copy2.unshift(0);

          setLike(copy2);

          let copy3 = [...date];

          copy3.unshift(날짜.getSeconds());

          setDate(copy3);

          document.querySelector("input").value = "";
        }}
      >
        등록
      </button>

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
        {props.subject[props.index]}{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();

            let copy = [...props.like];
            copy[props.index]++;
            props.setLike(copy);
          }}
        >
          😇
        </span>{" "}
        {props.like[props.index]}
        <button
          onClick={(e) => {
            e.stopPropagation();

            let copy = [...props.subject];

            copy.splice(props.index, 1);

            props.setSubject(copy);

            let copy2 = [...props.like];

            copy2.splice(props.index, 1);

            props.setLike(copy2);

            let copy3 = [...props.date];

            copy3.splice(props.index, 1);

            props.setDate(copy3);
          }}
        >
          삭제
        </button>
      </h4>
      <p>{props.date[props.index]}</p>
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

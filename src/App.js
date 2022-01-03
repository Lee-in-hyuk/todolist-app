import React, { useState, useRef } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
function App() {

  const [todos, setTodos ] = useState([
    {
      id:1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id:2,
      text: '컴포넌트 스타일 해보기',
      checked: false,
    },
    {
      id:3,
      text: '일정관리 앱 만들어보기',
      checked: false,
    }
  ]);
  //고유값으로 사용될 id
  //ref를 사용해서 변수에 담기
  const nextId = useRef(4);
  function onInsert(text){
    const todo = {
      id:nextId.current,
      text,
      checked: false
    }
    setTodos(todos.concat(todo)); //concat = 연결 시켜주는 역할
    //nextId가 다음 번호로 바뀐 todo값을 todos로 최신화 시켜줌
    nextId.current += 1;
    //-> nextId.current = nextId.current+1;
  }

  //해당 id항목 삭제하기
  function onRemove(id){
    setTodos(todos.filter(todo => todo.id !== id));
    //id파라미터는 ListItem.js에 있는 삭제버튼을 클릭했을 때 실행되는 파라미터이고,
    //todo.id는 todos안에 있는 항목의 id값들을 의미함.
    //그래서 삭제버튼 클릭했을 때 삭제되는 id를 제외한 나머지 todos안의 항목 id들을 필터해서 setTodos해줌
  }

  //해당 id항목 checked반전
  function onToggle(id){
    setTodos(todos.map(todo=>todo.id === id ? {...todo, checked: !todo.checked } : todo));
    //삼항 연산자 이용 (조건 ? 값1 : 값2)
    //스프레드 문법 이용해서 ...todo, checked
    //checked: !todo.checked -> 체크가 안 된건 체크되게, 체크된건 체크 안 되게 바꿔준다는 내용
    //아무것도 해당 안 되는 조건이면 그대로 todo로 나오게 작성.
  }
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { MdCreate } from "react-icons/md";
import './TodoInsert.scss';

export default function TodoInsert({ onInsert }){
    const [ value, setValue ] = useState('');
    function onChange(e){
        setValue(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault(); // 기존에 갖고 있던 이벤트 제거
        onInsert(value); // App.js에 있는 onInsert함수를 props로 받아와서 사용
        setValue(''); //value값 초기화하게 빈 문자열로.
    }
    return(
        // onSubmit대신 onClick이벤트를 써도 되는데, onSubmit을 쓰면 입력을 클릭하지 않고 enter만 눌러도 작동되기 때문
        <form className="TodoInsert svg" onSubmit={onSubmit}>
            <input type="text" placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <button type="submit"><MdCreate/></button>
        </form>
    );
}
import './TodoListItem.scss';
import { MdDelete } from "react-icons/md";
//icon 사이트에서 원하는 아이콘 클릭한 뒤 {}안에 넣어서 적용시키고 싶은 곳에 컴포넌트형식으로 작성
import cn from 'classnames';

export default function TodoListItem({todo, onRemove, onToggle}){
    const { id, text, checked } = todo;
    return(
        <div className="TodoListItem">
            {/* { checked }는 클래스명 */}
            {/* onToggle의 id파라미터를 넘기기 위해선 함수로 넘겨야해서 ()=>인 화살표함수로 작성 */}
            <div className={cn('checkbox',{ checked })} onClick={()=>{onToggle(id)}}>
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdDelete/>
            </div>
        </div>
    );
}
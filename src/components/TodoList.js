import TodoListItem from "./TodoListItem";
import './TodoList.scss';
export default function TodoList({todos, onRemove, onToggle }){
    
    return(
        <div className="TodoList">
            {/* <TodoListItem />
            <TodoListItem />
            <TodoListItem /> */}
            {/* 위에 3개 대신 map메서드를 이용해서 한번에 작성 */}
            {todos.map((todo) => (
                <TodoListItem
                todo={todo}
                key={todo.id}
                onRemove={onRemove}
                onToggle={onToggle}/> //key에 id가 없으면 todo.id대신 index사용
            ))}
        </div>
    );
}
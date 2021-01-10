import React from 'react';
import TodoItem from './todo-item'

const TodoList = ({ todos }) => {


   const elements = todos.map((item) => {
      return (
         <li>
            <TodoItem
               article={item.article}
               isCompleted={item.isCompleted} />
         </li>
      )
   });

   return elements;
}

export default TodoList;
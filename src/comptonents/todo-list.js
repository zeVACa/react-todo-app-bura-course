import React from 'react';
import TodoItem from './todo-item'

const TodoList = () => {
   const elements = [];

   for (let i = 1; i <= 20; i++) {
      elements.push(<li><TodoItem num={i} /></li>)
   }

   return elements;
}

export default TodoList;
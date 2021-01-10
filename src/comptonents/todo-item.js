import React from 'react';

const ListItem = ({ article, isCompleted }) => {

   const todoItemStyle = {
      textDecoration: isCompleted ? 'lineThrough' : 'none',
      color: isCompleted ? 'lightGray' : 'black'
   }

   return (
      <span
         className={isCompleted ? 'todo-item-completted' : null}>
         {article + ". is completed: " + isCompleted}
      </span>
   );
}

export default ListItem;
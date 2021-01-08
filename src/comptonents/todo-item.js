import React from 'react';

const ListItem = ({ num, isImportant = false }) => {

   // props.isImportant = props.num % 2 ? true : false

   isImportant = num % 2 ? true : false;

   const style = {
      color: isImportant ? 'tomato' : 'gray'
   }

   let isOdd = (num % 2) ? 'odd' : 'even';

   return (
      <span style={style}>{`${num} is ${isOdd} item`}</span>

   )
}

export default ListItem;
import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './comptonents/app-header';
import SearchPanel from './comptonents/search-panel';
import TodoList from './comptonents/todo-list';


const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
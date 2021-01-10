import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './comptonents/app-header';
import SearchPanel from './comptonents/search-panel';
import TodoList from './comptonents/todo-list';

import './comptonents/index.css'


const App = () => {

  const todosData = [
    {
      article: "Build React app",
      isCompleted: false,
      importance: {
        isHigh: true,
        isMedium: false,
        isLow: false
      }
    },
    {
      article: "Go to the GYM",
      isCompleted: true,
      importance: {
        isHigh: false,
        isMedium: true,
        isLow: false
      }
    },
    {
      article: "Have a dating",
      isCompleted: false,
      importance: {
        isHigh: true,
        isMedium: false,
        isLow: true
      }
    },
  ]


  return (
    <div>
      {/* <AppHeader /> */}
      {/* <SearchPanel /> */}
      <TodoList todos={todosData} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
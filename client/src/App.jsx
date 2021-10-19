import React from "react";
import "./App.css";
import CounterItem from "./components/counter-item/counter-item.component";
import TodoItem from "./components/todo-item";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {
          id: 1,
          title: "Đá bóng",
          isDone: true,
        },
        {
          id: 2,
          title: "Chơi game",
          isDone: false,
        },
        {
          id: 3,
          title: "Đi bơi",
          isDone: true,
        },
        {
          id: 4,
          title: "Đi shopping",
          isDone: false,
        },
        {
          id: 5,
          title: "Đi du lịch",
          isDone: true,
        },
      ],
      counter: 0,
    };
    this.onClickItem = this.onClickItem.bind(this);
    this.inputRef = React.createRef();
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(process.env.REACT_APP_BASE_API);
    if (process.env.REACT_APP_BASE_API) {
      fetch(process.env.REACT_APP_BASE_API)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }

  increase() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
    // this.setState((state) => ({ counter: state.counter + 1 }));
  }

  decrease() {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  }

  onClickItem(item) {
    const { todoItems } = this.state;
    const newTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === item.id) {
        todoItem.isDone = !item.isDone;
      }
      return todoItem;
    });
    this.setState({ todoItems: newTodoItems });
  }

  render() {
    const { todoItems, counter } = this.state;

    return (
      <div className="App">
        <input type="text" ref={this.inputRef} />
        {!!todoItems.length &&
          todoItems.map((item, index) => (
            <TodoItem key={index} item={item} onClickItem={this.onClickItem} />
          ))}
        {!todoItems.length && <h1>Mày không có gì cần làm, đi chơi đi :v</h1>}
        <CounterItem count={counter} />
        <button onClick={this.increase}>Tăng</button> <br />
        <button onClick={this.decrease}>Giảm</button>
      </div>
    );
  }
}

export default App;

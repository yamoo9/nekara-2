import './App.css';

// stateless component
export default function App(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

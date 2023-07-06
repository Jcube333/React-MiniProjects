import logo from "./assets/logo.png";
import Form from "./Components/Form/form.jsx";
function App() {
  return (
    <div>
     <header className="header">
        <img src={logo} alt="logo" />
        <h1>InvestIT</h1>
      </header>
      <Form></Form>
    </div>
  );
}

export default App;

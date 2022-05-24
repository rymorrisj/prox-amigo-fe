import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  function loggedin() {
    const isUserLoggedIn = true;
    if (isUserLoggedIn) {
      return (<Login />)
    } else {
      return (<Signup />)
    }

  }

  return (
    <div>
      {loggedin()}
    </div>
  );
}

export default App;

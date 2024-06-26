import profile from "./assets/images/profile.png";
import "./App.css";
import Link from "./components/Link";
import Form from "./components/Form";
import Message from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <div className="badge">
        <img src={profile} alt="profile" />
        <p>Kylie Senn</p>
        <p>"React Newbie"</p>
        <p>
          I love to learn new things <br /> share a link below!
        </p>
        <Form />

        <Link>
          <Link />
        </Link>
        <Message />
      </div>
    </div>
  );
}

export default App;

// add onclick handler event for links to shadow box

export default function Message() {
    function handleClick() {
      console.log("button Clicked");
    }
    return (
      <div>
        <button onClick={handleClick}>Subscribe!</button>
      </div>
    );
  }
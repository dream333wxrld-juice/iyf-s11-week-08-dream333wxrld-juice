function Greeting({ name = "Guest", timeOfDay }) {
  let message;
  if (timeOfDay === "morning") {
    message = `Good morning, ${name}!`;
  } else if (timeOfDay === "afternoon") {
    message = `Good afternoon, ${name}!`;
  } else if (timeOfDay === "evening") {
    message = `Good evening, ${name}!`;
  } else {
    message = `Hello, ${name}!`;
  }

  return <p>{message}</p>;
}

export default Greeting;
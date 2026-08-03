import './App.css'

function App() {
  const name = "Gilbert Mungai"
  const today = new Date().toLocaleDateString()
  const hour = new Date().getHours()

  let greeting
  if (hour < 12) {
    greeting = "Good morning!"
  } else if (hour < 18) {
    greeting = "Good afternoon!"
  } else {
    greeting = "Good evening!"
  }

  return (
    <div>
      <h1>{name}</h1>

      <p>
        I'm a student in the IYF program, currently working through the
        Season 11 curriculum and learning full-stack web development.
      </p>
      <p>
        This week I'm learning React fundamentals — components, JSX, props,
        and state — while helping build the CommunityHub team project.
      </p>
      <p>
        I'm the team lead for our group, so besides coding I'm also
        coordinating our repo setup, branch protection, and feature
        ownership across the team.
      </p>

      <p>Today's date: {today}</p>

      <p>{greeting}</p>
    </div>
  )
}

export default App
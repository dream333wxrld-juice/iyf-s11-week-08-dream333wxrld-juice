import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Button from './components/Button'
import PostList from './components/PostList'
import Card from './components/Card'
import Greeting from './components/Greeting'

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
      <Header />

      <main>
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

        <Button />

        <Greeting name="Gilbert" timeOfDay="evening" />
        <Greeting />

        <Card title="Welcome" variant="primary">
          <p>This is the card content!</p>
          <button>Click me</button>
        </Card>

        <Card title="Secondary Example" variant="secondary">
          <p>A second card showing a different variant.</p>
        </Card>

        <Card title="Outlined Example" variant="outlined">
          <p>A third card showing the outlined variant.</p>
        </Card>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <PostList />
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
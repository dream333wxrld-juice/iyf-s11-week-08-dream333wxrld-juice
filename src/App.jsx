import { useState } from 'react'
import './App.css'

// Layout
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

// Shared / composition
import Button from './components/Button'
import Card from './components/Card'
import Greeting from './components/Greeting'
import { UserGreeting, UserGreetingTernary, UserGreetingEarlyReturn } from './components/UserGreeting'

// State & events
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import UserForm from './components/UserForm'
import EventExamples from './components/EventExamples'
import ContactForm from './components/ContactForm'
import TodoList from './components/TodoList'

// Posts (lifted state)
import Stats from './components/Stats'
import PostList from './components/PostList'

// Users
import UserList from './components/UserList'

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

  // Task 16.4: lifted state for posts, shared between Stats and PostList
  const [posts, setPosts] = useState([
    { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React...", author: "John Doe", date: "Jan 15, 2026", likes: 0 },
    { id: 2, title: "JavaScript Best Practices", excerpt: "Write cleaner code...", author: "Jane Smith", date: "Jan 10, 2026", likes: 0 },
    { id: 3, title: "Understanding Props", excerpt: "How data flows in React...", author: "Alex Kim", date: "Jan 8, 2026", likes: 0 }
  ])

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }
        : post
    ))
  }

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0)

  // Daily Challenge 3: users for UserList
  const users = [
    { id: 1, name: "Trevor Wachira", email: "trevor@example.com" },
    { id: 2, name: "Christine Wambui", email: "christine@example.com" }
  ]

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

        <h2>Greeting Component</h2>
        <Greeting name="Gilbert" timeOfDay="evening" />
        <Greeting />

        <h2>Cards (Composition + Variants)</h2>
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

        <h2>Conditional Rendering Patterns</h2>
        <UserGreeting user={{ name: "Gilbert" }} />
        <UserGreeting user={null} />
        <UserGreetingTernary user={{ name: "Gilbert" }} />
        <UserGreetingTernary user={null} />
        <UserGreetingEarlyReturn user={{ name: "Gilbert" }} />
        <UserGreetingEarlyReturn user={null} />

        <h2>useState Basics</h2>
        <Counter />
        <Toggle />
        <UserForm />

        <h2>Event Handling</h2>
        <EventExamples />
        <ContactForm />

        <h2>Todo List (Arrays/Objects in State)</h2>
        <TodoList />

        <h2>Reusable Buttons</h2>
        <Button text="Submit" variant="primary" size="large" />
        <Button text="Cancel" variant="secondary" size="small" />
        <Button text="Delete" variant="danger" disabled={true} />
        <Button loading={true} />

        <h2>Posts (Lifted State)</h2>
        <Stats totalPosts={posts.length} totalLikes={totalLikes} />

        <div style={{ display: 'flex', gap: '2rem' }}>
          <PostList posts={posts} onLike={handleLike} />
          <Sidebar />
        </div>

        <h2>User List</h2>
        <UserList users={users} />
        <UserList users={[]} />
      </main>

      <Footer />
    </div>
  )
}

export default App
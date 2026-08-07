// Pattern 1: && operator
function UserGreeting({ user }) {
  return (
    <div>
      {user && <p>Welcome, {user.name}!</p>}
      {!user && <p>Please log in</p>}
    </div>
  );
}

// Pattern 2: ternary
function UserGreetingTernary({ user }) {
  return (
    <div>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in</p>}
    </div>
  );
}

// Pattern 3: early return
function UserGreetingEarlyReturn({ user }) {
  if (!user) {
    return <p>Please log in</p>;
  }
  return <p>Welcome, {user.name}!</p>;
}

export { UserGreeting, UserGreetingTernary, UserGreetingEarlyReturn };
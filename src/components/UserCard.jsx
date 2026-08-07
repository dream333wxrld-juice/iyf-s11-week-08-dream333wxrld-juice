function UserCard({ user }) {
  return (
    <div className="user-card">
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  )
}

export default UserCard
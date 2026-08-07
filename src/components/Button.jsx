function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : text}
    </button>
  )
}

export default Button

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

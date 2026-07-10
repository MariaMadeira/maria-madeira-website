// Shared so App.tsx and entry-server.tsx render the same Suspense fallback.
// If the two trees differ structurally, hydration fails (React error #418).
export default function PageLoader() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
    }}>
      <div style={{
        width: "40px",
        height: "40px",
        border: "3px solid var(--border-color)",
        borderTopColor: "var(--accent-secondary)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

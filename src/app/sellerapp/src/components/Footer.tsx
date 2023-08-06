export default function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div
        className="text-center p-2"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        &copy; {new Date().getFullYear()} My Website
      </div>
    </footer>
  );
}

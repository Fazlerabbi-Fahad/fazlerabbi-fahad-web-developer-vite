export default function Navbar() {
  return (
    <div className="max-w-64 m-auto py-4 lg:py-10">
      <div className="text-white text-[10px] lg:text-sm font-semibold flex justify-evenly">
        <p>
          <a href="/#about" className="hover:animate-pulse">
            About
          </a>
        </p>
        <p>
          <a href="/#portfolio" className="hover:animate-pulse">
            Portfolio
          </a>
        </p>
        <p>
          <a href="/#contact" className="hover:animate-pulse">
            Contact
          </a>
        </p>
      </div>
    </div>
  );
}

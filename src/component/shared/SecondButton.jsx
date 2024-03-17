// eslint-disable-next-line react/prop-types
export default function SecondButton({ children }) {
  return (
    <button className="btn-sm bg-white text-[#750310] rounded-md font-semibold shadow-md shadow-black hover:animate-pulse">
      {children}
    </button>
  );
}

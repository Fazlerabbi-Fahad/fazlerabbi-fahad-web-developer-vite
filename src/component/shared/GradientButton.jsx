// eslint-disable-next-line react/prop-types
export default function GradientButton({ children }) {
  return (
    <button className="btn-sm bg-gradient-to-r from-[#750310] to-[#D21C23] text-white  rounded-md font-semibold shadow-md shadow-black hover:animate-pulse ">
      {children}
    </button>
  );
}

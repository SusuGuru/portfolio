export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#0B1221] text-white rounded-t-2xl">
      <h1 className="text-lg font-semibold">Alex’s Portfolio</h1>
      <ul className="flex gap-8 text-sm">
        <li className="hover:text-cyan-400 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
        <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
      </ul>
      <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-400 transition-all active:scale-95">
        Resume
      </button>
    </nav>
  );
}

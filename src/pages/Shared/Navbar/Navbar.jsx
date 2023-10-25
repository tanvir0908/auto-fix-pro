import { BsFillCarFrontFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div>
      <div className="text-primary flex items-center gap-2 font-secondary">
        <BsFillCarFrontFill size={40} />
        <p className="text-3xl font-semibold">AutoFix Pro</p>
      </div>
    </div>
  );
}

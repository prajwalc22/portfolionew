import { ModeToggle } from "./toggle";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center border-2 p-2">
        <div className="p-2">Navbar</div>
        <ModeToggle />
      </div>
    </>
  );
};

export default Navbar;

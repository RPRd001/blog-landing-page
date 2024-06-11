import logo from "../images/logo.svg";
import Button from "../ui/Button";
import MenuDrop from "../ui/DropDown";
import hamburgerIcon from "../images/icon-hamburger.svg"

export const productMenu = [
	"Product",
	"Overview",
	"Pricing",
	"Marketplace",
	"Features",
	"Integrations",
];

export const companyMenu = ["Company", "About", "Team", "Blog", "Careers"];
export const connectMenu = ["Connect", "Contact", "Newsletter", "LinkedIn"];

const Navigation = () => {
	return (
		<header className="flex flex-row items-center justify-around absolute  w-full py-6 bg-transparent">
			<nav className="flex flex-row items-center justify-between gap-8">
				<img src={logo} alt="Blogr Logo" className="w-20" />
				<ul className="hidden md:flex md:flex-row md:items-center md:gap-6 md:text-[#fec3bf]">
					<MenuDrop items={productMenu} />
					<MenuDrop items={companyMenu} />
					<MenuDrop items={connectMenu} />
				</ul>
			</nav>
			<div className="hidden md:flex md:flex-row md:gap-10 md:items-center">
				<button className="text-[#fdcdc9]">Login</button>
				<Button text={"Sign Up"} />
			</div>

			{/* 
				How is a normal hamburguer menu implemented?

				How to implement the hamburguer menu here without changing the 
				current element hierarchy ??
			*/}
			<img className="h-[1rem] cursor-pointer"  src={hamburgerIcon} alt="menu icon" />
		</header>
	);
};

export default Navigation;

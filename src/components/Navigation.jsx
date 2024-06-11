import logo from "../images/logo.svg";
import Button from "../ui/Button";
import MenuDrop from "../ui/DropDown";

const Navigation = () => {

	const productMenu = ["Product", "Something", "Some Product", "some other product"]
	const companyMenu = ["Company", "About Us", "Something", "Something Else"]
	const connectMenu = ["Connect", "Contact", "Newsletter", "LinkedIn"]

	return (
		<header className="flex flex-row justify-around absolute  w-full py-6 bg-transparent">
			<nav className="flex flex-row items-center justify-between gap-8">
				<img src={logo} alt="Blogr Logo" className="w-20" />
				<ul className="flex flex-row items-center gap-6 text-[#fec3bf]">
					<MenuDrop items={productMenu} />
					<MenuDrop items={companyMenu} />
					<MenuDrop items={connectMenu} />
				</ul>
			</nav>
			<div id="button-container" className="flex flex-row gap-10 items-center">
				<button className="text-[#fdcdc9]">Login</button>
				<Button text={"Sign Up"}/>
			</div>
		</header>
	);
};

export default Navigation;

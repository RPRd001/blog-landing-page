import logo from "../images/logo.svg";
import Button from "../ui/Button";
import MenuDrop from "../ui/DropDown";

const Navigation = () => {

	const menuItems = ["Product", "Company", "Connect"]

	return (
		<header className="flex flex-row justify-around absolute  w-full py-6 bg-transparent">
			<nav className="flex flex-row items-center justify-between gap-8">
				<img src={logo} alt="Blogr Logo" className="w-20" />
				<ul className="flex flex-row items-center gap-6 text-[#fec3bf]">
					{menuItems.map((item, i) => {
						return (<MenuDrop menuTitle={item} key={i}/>)
					})}
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

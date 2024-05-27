import logo from "../images/logo.svg";
import arrowIconLight from "../images/icon-arrow-light.svg";

const Navigation = () => {
	return (
		<header className="flex flex-row justify-around absolute  w-full py-6 bg-transparent">
			<nav className="flex flex-row items-center justify-between gap-8">
				<img src={logo} alt="Blogr Logo" className="w-20" />
				<ul className="flex flex-row items-center gap-6 text-[#fec3bf]">
					<li className="flex flex-row items-center gap-2">
						Product{" "}
						<img className="w-2" src={arrowIconLight} alt="arrow icon" />
					</li>
					<li className="flex flex-row items-center gap-2">
						Company{" "}
						<img className="w-2" src={arrowIconLight} alt="arrow icon" />
					</li>
					<li className="flex flex-row items-center gap-2">
						Connect{" "}
						<img className="w-2" src={arrowIconLight} alt="arrow icon" />
					</li>
				</ul>
			</nav>
			<div id="button-container" className="flex flex-row gap-2 items-center">
				<button className="text-[#fdcdc9]">Login</button>
				<button className="border rounded-full py-1.5 px-3 bg-[#fdfefe] text-[#d35c6e]">
					Sign Up
				</button>
			</div>
		</header>
	);
};

export default Navigation;

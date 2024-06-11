import logo from "../images/logo.svg";
import { productMenu, companyMenu, connectMenu } from "./Navigation.jsx";

const Footer = () => {
	return (
		<footer className="flex flex-col items-center gap-10  md:flex-row md:items-start bg-[#24242c] rounded-tr-[6rem] p-20 md:gap-40">
			<img src={logo} alt="Blogr Logo" className="w-20" />

			<div className="flex flex-col items-center gap-10  md:flex-row md:items-start md:gap-48 lg:justify-around">
				<ul className="flex flex-col items-center  md:items-start gap-3">
					<li className="font-bold text-white mb-5">Product</li>
					{productMenu.map((item, i) => {
						return (
							<li
								className="text-[#bbbbc3] hover:text-white hover:underline hover:cursor-pointer"
								key={i}
							>
								{item}
							</li>
						);
					})}
				</ul>

				<ul className="flex flex-col items-center  md:items-start gap-3">
					<li className="font-bold text-white mb-5">Company</li>
					{companyMenu.map((item, i) => {
						return (
							<li
								className="text-[#bbbbc3] hover:text-white hover:underline hover:cursor-pointer"
								key={i}
							>
								{item}
							</li>
						);
					})}
				</ul>

				<ul className="flex flex-col items-center  md:items-start gap-3">
					<li className="font-bold text-white mb-5">Connect</li>
					{connectMenu.map((item, i) => {
						return (
							<li
								className="text-[#bbbbc3] hover:text-white hover:underline hover:cursor-pointer"
								key={i}
							>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;

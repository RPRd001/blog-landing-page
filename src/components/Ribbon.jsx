import illustrationPhones from "../images/illustration-phones.svg"

const Ribbon = () => {
	return (
		<section className="mt-20 md:mt-0">
			<div className="flex flex-col md:flex-row items-center md:justify-between  bg-gradient-to-r from-[#303145] to-[#3d4063] h-[550px] md:h-[400px] px-14 rounded-bl-[6rem] rounded-tr-[6rem]">
				<img src={illustrationPhones} alt="cellphone with Blogr App on the screen" className="relative bottom-28"/>
				<div className="flex flex-col items-center text-center md:text-start md:items-start justify-around gap-8 relative bottom-28">
					<h2 className="text-[#fdfdfe] text-3xl">State of the Art Infrastructure</h2>
					<p className="text-[#d8dadf]">
						With reliability and speed in mind, worldwide data centers provide
						the backbone for ultra-fast connectivity. This ensures your site
						will load instantly, no matter where your readers are, keeping your
						site competitive.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Ribbon;

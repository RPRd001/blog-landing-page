import Button from "../ui/Button";

const Hero = () => {
	return (
		<div className="bg-gradient-to-r to-[#ff4457] from-[#ff886f] py-20 h-[500px] max-h-[500px] rounded-bl-[6rem] flex flex-col items-center justify-center gap-8 w-full">
			<h1 className="text-4xl md:text-5xl text-white text-center">A modern publishing platform</h1>
			<p className="text-[#fec3bf]">Grow your audience and build your online brand</p>
			<div className="flex flex-row items-center gap-3">
				<Button text={"Start for Free"}/>
				<Button text={"Learn More"} style={"secondaryStyle"}/>
			</div>
		</div>
	);
};

export default Hero;

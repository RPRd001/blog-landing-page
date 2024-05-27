const Hero = () => {
	return (
		<div className="bg-gradient-to-r to-[#ff4457] from-[#ff886f] h-60 py-20 h-[500px] max-h-[500px] rounded-bl-[6rem] flex flex-col items-center justify-center gap-8">
			<h1 className="text-5xl text-white">A modern publishing platform</h1>
			<p className="text-[#fec3bf]">Grow your audience and build your online brand</p>
			<div className="flex flex-row items-center gap-3">
				<button className="border rounded-full py-1.5 px-6 bg-[#fdfefe] text-[#d35c6e]">Start for Free</button>
				<button className="border rounded-full py-1.5 px-6 bg-transparent text-white">Learn More</button>
			</div>
		</div>
	);
};

export default Hero;

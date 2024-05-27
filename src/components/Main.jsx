import Hero from "./Hero";
import Features from "./Features";
import Ribbon from "./Ribbon";

const Main = () => {
	return (
		<main className="min-h-full w-full">
			<Hero />
			{/* Right side features */}
			<Features />
			<Ribbon />
			{/* Left side features */}
			<Features />
		</main>
	);
};

export default Main;

import Hero from "./Hero";
import Features from "./Features";
import Ribbon from "./Ribbon";
import FeaturesReversed from "./FeaturesReversed"

const Main = () => {
	return (
		<main className="min-h-full w-full flex flex-col items-center">
			<Hero />
			{/* Right side features */}
			<Features />
			<Ribbon />
			{/* Left side features */}
			<FeaturesReversed />
		</main>
	);
};

export default Main;

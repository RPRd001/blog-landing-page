import illustrationLaptopDesktop from "../images/illustration-laptop-desktop.svg";

const Features = () => {
	return (
		// overflow-hidden

		<section className="flex flex-col items-center py-20 overflow-hidden gap-8">

			{/* Container */}
			<div className="self-end flex flex-row-reverse items-center relative gap-20  bottom-20 right-60">
				{/* Text Section*/}
				<div className="flex flex-col items-start gap-8">
					{/* Text Block 1 */}
					<div className="flex flex-col gap-4">
						<h3 className="text-2xl text-[#1c394f]">Free, open, simple</h3>
						<p className="text-[#83868a]">
							Blogr is a free and open source application backed by a large
							community of helpful developers. It supports features such as code
							syntax highlighting, RSS feeds, social media integration,
							third-party commenting tools, and works seamlessly with Google
							Analytics. The architecture is clean and is relatively easy to
							learn.
						</p>
					</div>

					{/* Text Block 1 */}
					<div className="flex flex-col gap-4">
						<h3 className="text-2xl text-[#1c394f]">Powerful tooling</h3>
						<p className="text-[#83868a]">
							Batteries included. We built a simple and straightforward CLI tool
							that makes customization and deployment a breeze, but capable of
							producing even the most complicated sites.
						</p>
					</div>
				</div>

				{/* Image Section */}
				<img
					className="max-w-[48rem]"
					src={illustrationLaptopDesktop}
					alt="a modern design artwork"
				/>
			</div>
		</section>
	);
};

export default Features;

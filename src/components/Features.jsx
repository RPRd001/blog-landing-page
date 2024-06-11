import illustrationDesktop from "../images/illustration-editor-desktop.svg";

const Features = () => {

	/*
		Pending: 1. Refactor the code from the text blocks to avoid code repetition
					and use instead reusable components
	*/

	return (

		<section className="flex flex-col items-center py-20 overflow-hidden gap-8">
			<h2 className="text-3xl md:text-4xl text-[#1c394f]">Designed for the future</h2>

			{/* Container */}
			<div className="flex flex-col-reverse max-w-sm md:max-w-none md:self-end md:flex-row items-center md:relative md:left-52 md:gap-20  md:bottom-32">
				{/* Text Section*/}
				<div className="flex flex-col items-start gap-8">
					{/* Text Block 1 */}
					<div className="flex flex-col gap-4">
						<h3 className="text-xl md:text-2xl text-[#1c394f] text-center md:text-start">
							Introducing an extensible editor
						</h3>
						<p className="text-[#83868a] text-sm md:text-base text-center md:text-start">
							Blogr features an exceedingly intuitive interface which lets you
							focus on one thing: creating content. The editor supports
							management of multiple blogs and allows easy manipulation of
							embeds such as images, videos, and Markdown. Extensibility with
							plugins and themes provide easy ways to add functionality or
							change the looks of a blog.
						</p>
					</div>

					{/* Text Block 1 */}
					<div className="flex flex-col gap-4">
						<h3 className="text-xl md:text-2xl text-[#1c394f] text-center md:text-start">
							Robust content management
						</h3>
						<p className="text-[#83868a] text-sm md:text-base text-center md:text-start">
							Flexible content management enables users to easily move through
							posts. Increase the usability of your blog by adding customized
							categories, sections, format, or flow. With this functionality,
							you&apos;re in full control.
						</p>
					</div>
				</div>

				{/* Image Section */}
				<img
					className="max-w-sm md:max-w-[48rem]"
					src={illustrationDesktop}
					alt="a modern design artwork"
				/>
			</div>
		</section>
	);
};

export default Features;

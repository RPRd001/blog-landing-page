
const Button = ({text, style}) => {

	const primaryStyle = "border-transparent text-sm rounded-full py-2 px-6 bg-[#fdfefe] text-[#d35c6e] hover:bg-[#ff7b86] hover:text-white"

	const secondaryStyle = "border text-sm rounded-full py-2 px-6 bg-transparent text-white hover:bg-[#fdfefe] hover:text-[#d35c6e]"

	return (
		<button className={style ? secondaryStyle : primaryStyle}>
			{text}
		</button>
	);
};

export default Button;

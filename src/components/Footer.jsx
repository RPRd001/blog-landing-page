import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="flex flex-row items-start justify-around bg-[#24242c] rounded-tr-[6rem] py-10">
      <img src={logo} alt="Blogr Logo" className="w-20" />
      
      <ul className="flex flex-col items-start gap-3">
        <li className="font-bold text-white mb-5">Product</li>
        <li className="text-[#bbbbc3]">Overview</li>
        <li className="text-[#bbbbc3]">Pricing</li>
        <li className="text-[#bbbbc3]">Marketplace</li>
        <li className="text-[#bbbbc3]">Features</li>
        <li className="text-[#bbbbc3]">Integrations</li>
      </ul>

      <ul className="flex flex-col items-start gap-3">
        <li className="font-bold text-white mb-5">Company</li>
        <li className="text-[#bbbbc3]">Overview</li>
        <li className="text-[#bbbbc3]">Pricing</li>
        <li className="text-[#bbbbc3]">Marketplace</li>
        <li className="text-[#bbbbc3]">Features</li>
        <li className="text-[#bbbbc3]">Integrations</li>
      </ul>

      <ul className="flex flex-col items-start gap-3">
        <li className="font-bold text-white mb-5">Connect</li>
        <li className="text-[#bbbbc3]">Overview</li>
        <li className="text-[#bbbbc3]">Pricing</li>
        <li className="text-[#bbbbc3]">Marketplace</li>
        <li className="text-[#bbbbc3]">Features</li>
        <li className="text-[#bbbbc3]">Integrations</li>
      </ul>
    </footer>
  )
}

export default Footer
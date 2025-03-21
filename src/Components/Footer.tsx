import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <>
    <footer className="p-4 bg-gradient-to-bl from-[#374e37] to-[#162916] md:p-8 lg:p-10 ">
  <div className="mx-auto max-w-screen-xl text-center">
    <a 
      href="#" 
      className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6"
    >
      <img src={logo} alt="Krivam Ply" className="h-10 mr-4" />
      Krivam Ply
    </a>

    <p className="my-6 text-gray-500 dark:text-gray-400">
      Building Better, Together<br/>
      <span className="font-semibold text-primary-600 dark:text-primary-400">
        Strength meets sustainability
      </span>
    </p>

    <span className="text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Krivam Ply™. All rights reserved.
    </span>
  </div>
</footer>
</>
  )
}

export default Footer
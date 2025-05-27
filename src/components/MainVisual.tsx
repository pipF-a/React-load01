import { FaGithub } from "react-icons/fa";

export const MainVisual = () => {
  return (
    <section className='pt-36 pb-24 px-4 bg-stone-50'>
      <div className='container mx-auto flex items-center space-y-8 flex-col justify-center text-center'>
        <div className='bg-amber-100 border border-solid border-[#e5e7eb] text-3xl h-16 w-16 rounded-full flex justify-center items-center'>👋</div>
        <h2 className='text-7xl font-bold text-stone-800'>Welcome to My Portfolio</h2>
        <p className="text-xl text-stone-500">React と Tailwind CSS が好きな、初心者プログラマの @handle です！</p>
        <a href="#" className="bg-emerald-600 text-white py-3 px-6 flex items-center rounded-lg hover:bg-emerald-700 transition duration-300"><FaGithub className="w-6 h-6 mr-2"/>GitHub</a>
      </div>
    </section>
  )
}

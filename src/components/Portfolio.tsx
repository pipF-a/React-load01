import { useState } from "react";
import type { TabItemImage } from "../types/portfolio";
import { tabItemImages,tabItems } from "../constants/portfolioData";

export const Portfolio = () => {

  const [currentWorks,setCurrentWorks] = useState<TabItemImage[]>([tabItemImages[0]]);
  const toggleCurrentWorks = (index: number) => {
    setCurrentWorks([tabItemImages[index]]);
  }
  
  return (
    <section className="md:py-24 md:bg-stone-50 py-24 px-4">
      <div className="container mx-auto max-w-4xl space-y-8">
        <hgroup>
          <h2 className="text-5xl font-bold text-stone-800">Portfolio</h2>
          <p className="mt-8 text-stone-500 leading-relaxed text-xl">学習を通じて、実際に開発した成果物のリストです🤖</p>
        </hgroup>
        <div className="md:flex md:gap-6">
          <div className="flex flex-col gap-4 md:max-w-[282px] w-full">
            {tabItems.map((item,index)=> (
            <button
              key={index}
              onClick={() => toggleCurrentWorks(index)}
              className="flex py-6 px-2 border rounded-xl shadow-sm items-center space-x-2 border-[#e5e7eb] cursor-pointer"
            >
              <div className="bg-white border text-3xl h-16 w-16 rounded-full flex justify-center items-center border-[#e5e7eb]">
                {item.icon}
              </div>
              <p className="text-lg font-medium text-stone-800">{item.name}</p>
            </button>
            ))}
          </div>
          {currentWorks.map((currentWork) => (
            <div key={currentWork.image} className="max-w-[584px] w-full col-span-2 md:mt-0 mt-4">
              <img src={currentWork.image} alt={currentWork.alt} className="rounded-t-xl border border-stone-400 border-b-0 h-[380px] w-full object-cover" />
              <div className="rounded-b-xl bg-white border-t-0 border-stone-400 border p-6 shadow-lg">
                <p className="text-stone-600 mb-2">{currentWork.desc}</p>
                <a href={currentWork.link} className="text-emerald-600 underline">👀 View on GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

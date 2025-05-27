import { useState } from "react";

export const Portfolio = () => {

  interface TabItem  {
    name:string;
    icon:string;
  }

  interface tabItemImage  {
    image:string;
    alt:string;
    desc:string;
    link:string;
  }


  const tabItems:TabItem[] = [
    {name:'ポートフォリオサイト',icon:'👋'},
    {name:'名言ジェネレーター',icon:'💬'},
    {name:'作業用メモアプリ',icon:'✏️'},
    {name:'作業用メモアプリ',icon:'💰'},
  ]

  const tabItemImages:tabItemImage[] = [
    {
      image:'https://b13o.github.io/react-portfolio//react-portfolio.png',
      alt: 'ポートフォリオサイト',
      desc:'今表示しているこのサイト。シンプルな Web サイトを作成しながら、Reactの基本的な概念を学びました。',
      link:'#',
    },
    {
      image:'https://b13o.github.io/react-portfolio//random-quote.png',
      alt: '名言ジェネレーター',
      desc:'このプロジェクトでは、useEffect フックを使ったデータフェッチと、その注意点について重点的に学習しました。',
      link:'#',
    },
    {
      image:'https://b13o.github.io/react-portfolio//simple-memo.png',
      alt: '作業用メモアプリ',
      desc:'このプロジェクトでは、stateの配列やオブジェクトを、イミュータブルに扱うReactの作法を学習しました。',
      link:'#',
    },
    {
      image:'https://b13o.github.io/react-portfolio//warikan-culculator.png',
      alt: '作業用メモアプリ',
      desc:'このプロジェクトでは、Zustandを使用して、グローバルに状態を管理する実装を学習しました。',
      link:'#',
    },
  ]

  const [currentWorks,setCurrentWorks] = useState<tabItemImage[]>([tabItemImages[0]]);
  const toggleCurrentWorks = (index: number) => {
    setCurrentWorks([tabItemImages[index]]);
  }
  
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto max-w-4xl space-y-8">
        <hgroup>
          <h2 className="text-5xl font-bold text-stone-800">Portfolio</h2>
          <p className="mt-8 text-stone-500 leading-relaxed text-xl">学習を通じて、実際に開発した成果物のリストです🤖</p>
        </hgroup>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 max-w-[282px] w-full">
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
            <div className="max-w-[584px] w-full col-span-2">
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

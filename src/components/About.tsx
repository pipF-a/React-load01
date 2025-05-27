
export const About = () => {
  return (
    <section>
      <div className="container mx-auto py-36 max-w-4xl flex items-center gap-6">
        <div>
          <img src="https://b13o.github.io/react-portfolio//camp-coffee.jpg" alt="Camp Coffee" className="rounded-lg shadow-md"></img>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-stone-800">About</h2>
          <p className="text-stone-500 leading-relaxed text-xl mt-8">私は、プログラミングを始めて約１年半となる、ビギナーの開発者です。現在は、React、TypeScript、Tailwind CSS などを使用した、 フロントエンド 開発のスキルアップに、情熱を注いでいます。</p>
          <p className="text-stone-500 leading-relaxed text-xl mt-8">趣味は、キャンプです🏕️</p>
        </div>
      </div>
    </section>
  )
}

import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiArticleLine } from "react-icons/ri";

export const Social = () => {
  const socialIcons:ReactNode[] =[<FaGithub className="w-16 h-16" />,<FaXTwitter className="w-16 h-16" />,<RiArticleLine className="w-16 h-16" />];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-xl text-center space-y-8">
        <h2 className="text-5xl font-bold text-stone-800 ">Social</h2>
        <p className="text-stone-500 leading-relaxed text-xl">私は、主に下記の媒体で、活動の記録を更新しています。<br/>そして、多くの開発者と繋がれることを、楽しみにしています🙌</p>
        <ul className="flex justify-center space-x-2 sm:space-x-8">
          {socialIcons.map(icon =>(
            <li className="flex items-center p-12 sm:p-16 rounded-2xl border border-stone-200 hover:bg-stone-50 text-stone-600 hover:text-stone-900"><a href="">{icon}</a></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

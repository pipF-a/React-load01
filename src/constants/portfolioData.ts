import type { TabItem, TabItemImage } from "../types/portfolio";

export const tabItems: TabItem[] = [
  { name: 'ポートフォリオサイト', icon: '👋' },
  { name: '名言ジェネレーター', icon: '💬' },
  { name: '作業用メモアプリ', icon: '✏️' },
  { name: '割り勘計算機', icon: '💰' },
];

export const tabItemImages: TabItemImage[] = [
  {
    image: 'https://b13o.github.io/react-portfolio//react-portfolio.png',
    alt: 'ポートフォリオサイト',
    desc: '今表示しているこのサイト。シンプルな Web サイトを作成しながら、Reactの基本的な概念を学びました。',
    link: '#',
  },
  {
    image: 'https://b13o.github.io/react-portfolio//random-quote.png',
    alt: '名言ジェネレーター',
    desc: 'このプロジェクトでは、useEffect フックを使ったデータフェッチと、その注意点について重点的に学習しました。',
    link: '#',
  },
  {
    image: 'https://b13o.github.io/react-portfolio//simple-memo.png',
    alt: '作業用メモアプリ',
    desc: 'このプロジェクトでは、stateの配列やオブジェクトを、イミュータブルに扱うReactの作法を学習しました。',
    link: '#',
  },
  {
    image: 'https://b13o.github.io/react-portfolio//warikan-culculator.png',
    alt: '割り勘計算機',
    desc: 'このプロジェクトでは、Zustandを使用して、グローバルに状態を管理する実装を学習しました。',
    link: '#',
  },
];
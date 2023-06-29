import { koulen } from "../(app)/fonts";

const myPortableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <div className="text-lg">
        {children}
        <br />
      </div>
    ),
    h1: ({ children }: any) => (
      <div
        className={`text-4xl font-extrabold ${koulen.className} text-transparent bg-clip-text bg-gradient-to-bl from-cyan-200 to-cyan-400`}
      >
        {children}
      </div>
    ),
    h2: ({ children }: any) => (
      <div
        className={`text-2xl font-extrabold ${koulen.className} text-transparent bg-clip-text bg-gradient-to-bl from-cyan-200 to-cyan-400`}
      >
        {children}
      </div>
    ),
  },
  marks: {
    em: ({ children }: any) => (
      <em className="text-emerald-300 font-semibold">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="text-emerald-300 mt-6">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="text-sky-400 mt-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="list-disc">{children}</li>,
    number: ({ children }: any) => <li className="list-decimal">{children}</li>,
  },
};

export default myPortableTextComponents;

import { space_grotesk } from "../fonts";

type ButtonProps = {
  text: string;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`mt-4 bg-transparent text-opacity-80 hover:text-opacity-100 hover:bg-slate-900 duration-200 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-cyan-400/30 ${space_grotesk.className}`}
    >
      {props.text}
    </button>
  );
}

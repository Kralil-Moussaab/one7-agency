/* eslint-disable react/prop-types */
export default function Button({ content }) {
  return (
    <button className="bg-gradient rounded-lg border-0 py-2 px-4 text-white">
      {content}
    </button>
  );
}

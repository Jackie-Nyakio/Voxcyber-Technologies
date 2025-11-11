export default function Card({ product, onAdd }) {
  const { image, name, price, oldPrice } = product;

  return (
    <article className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 relative">
      <div className="relative w-full h-40 flex items-center justify-center mb-4">
        <img src={image} alt={name} className="max-h-32 object-contain" loading="lazy" />
        <button
          onClick={() => onAdd(name)}
          title={`Add ${name} to cart`}
          className="absolute bottom-2 right-2 bg-vox-500 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold shadow-md hover:bg-vox-600 transition"
        >
          +
        </button>
      </div>

      <h3 className="text-gray-800 font-semibold text-[17px]">{name}</h3>

      <div className="flex items-center gap-2 mt-1">
        <span className="text-vox-500 font-bold text-[17px]">{price}</span>
        {oldPrice && <span className="text-gray-400 text-xs line-through">{oldPrice}</span>}
      </div>
    </article>
  );
}

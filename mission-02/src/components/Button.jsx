import ShoppingBascket from './ShoppingBascket';

export default function Button() {
  return (
    <div className="w-249pxr">
      <button
        type="button"
        className="flex items-center justify-center w-full border border-gray-300 rounded h-9 mt-6pxr pb-1pxr text-content"
      >
        <ShoppingBascket />
        담기
      </button>
    </div>
  );
}

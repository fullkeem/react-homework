export default function Price({ price, discount }) {
  return (
    <>
      <span className="mt-2 font-normal text-gray-300 line-through text-14pxr">
        {discount > 0 && `${price}원`}
      </span>
    </>
  );
}

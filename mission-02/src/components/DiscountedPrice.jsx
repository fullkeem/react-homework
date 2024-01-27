export default function DiscountedPrice({ discount, price }) {
  const discountPrice = price - (price * discount) / 100;
  const floorDiscountPrice = Math.floor(discountPrice / 10) * 10;
  return (
    <div>
      {discount > 0 && (
        <span className="mr-2 font-bold text-orange-600 text-16pxr">
          {discount}%
        </span>
      )}
      <span className="m-0 font-semibold text-16pxr">
        {floorDiscountPrice.toLocaleString()}원
      </span>
    </div>
  );
}

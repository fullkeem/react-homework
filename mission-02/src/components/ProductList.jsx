import Button from './Button';
import Description from './Description';
import DiscountedPrice from './DiscountedPrice';
import Images from './Images';
import Name from './Name';
import Price from './Price';

export default function ProductList({
  image,
  name,
  description,
  price,
  discount,
}) {
  return (
    <li className="flex flex-col items-start cursor-pointer swiper-slide w-249pxr">
      <Images image={image} name={name} />
      <Button />
      <Description description={description} />
      <Name name={name} />
      <Price price={price} discount={discount} />
      <DiscountedPrice price={price} discount={discount} />
    </li>
  );
}

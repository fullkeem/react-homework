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
    <li className="flex flex-col items-start swiper-slide w-249pxr h-516pxr">
      <Images image={image} />
      <Button />
      <Description description={description} />
      <Name name={name} />
      <Price price={price} />
      <DiscountedPrice price={price} discount={discount} />
    </li>
  );
}

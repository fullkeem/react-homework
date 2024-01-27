export default function ProductList() {
  return (
    <li className="flex flex-col items-start swiper-slide w-249pxr h-516pxr">
      <a href="/src/pages/productDetail/#${item.id}">
        <img
          width={249}
          height={516}
          src="${`${imgURL}/${item.id}/${item.main_image}`}"
          alt="${
      item.name
    }"
        />
      </a>
      <button className="mt-6pxr" type="button">
        <img src="/banner/add_cart_button.png" alt />
      </button>
      <span className="font-semibold text-gray-200 text-14pxr mt-16pxr">
        ${'{'}item.desc{'}'}
      </span>
      <h3 className="font-bold text-16pxr mt-8pxr">
        ${'{'}item.name{'}'}
      </h3>
      <span className="font-normal text-gray-300 text-14pxr mt-16pxr">
        ${'{'}item.price{'}'}원
      </span>
      <div>
        <span className="m-0 font-bold text-orange-600 text-16pxr">
          ${'{'}item.discount{'}'}%
        </span>
        <span className="m-0 font-semibold text-16pxr">
          ${'{'}item.price - (item.price * item.discount) / 100{'}'}원
        </span>
      </div>
    </li>
  );
}

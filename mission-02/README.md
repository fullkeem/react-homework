## 리액트 2주차 과제

---

### 목차

- [🍩 요구사항](#🍩-요구-사항)
- [🌳 Project-Tree](#🌳-Project-Tree)
- [👨‍💻 수행 과정](#👨‍💻-수행-과정)
- [👀 결과물 ](#👀-결과물)
- [🙂 회고](#🙂-회고)

---

### 🍩 요구사항

- [x] 바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택합니다.
- [x] 바닐라 프로젝트에서 활용했던 데이터베이스의
      데이터를 JSON 파일로 로컬 드라이브에 저장합니다.
- [x] JSON 데이터를 불러와 마크업에 연결하여 UI를 구현하세요. 필요한 경우, 리스트 렌더링을 활용해보세요.

---

### 🌳 Project-Tree

```
📦mission-02
 ┣ 📂node_modules
 ┣ 📂public
  ┃ ┣ 📂icons
  ┃ ┃ ┗ 📜shopping-bascket.svg
  ┃ ┗ 📂images
  ┃ ┃ ┣ 📜delicious.jpeg
  ┃ ┃ ┣ 📜kf365.jpg
  ┃ ┃ ┣ 📜kimsButcher.jpg
  ┃ ┃ ┣ 📜kurlys.jpg
  ┃ ┃ ┣ 📜natureSilok.jpg
  ┃ ┃ ┣ 📜ohbaltan.jpg
  ┃ ┃ ┣ 📜samihyun.jpg
  ┃ ┃ ┣ 📜soonguiGarden.jpeg
  ┃ ┃ ┗ 📜taewoo.jpeg
  ┣ 📂src
  ┃ ┣ 📂components
  ┃ ┃ ┣ 📜Button.jsx
  ┃ ┃ ┣ 📜Description.jsx
  ┃ ┃ ┣ 📜DiscountedPrice.jsx
  ┃ ┃ ┣ 📜Images.jsx
  ┃ ┃ ┣ 📜Name.jsx
  ┃ ┃ ┣ 📜Price.jsx
  ┃ ┃ ┣ 📜Product.jsx
  ┃ ┃ ┣ 📜ProductList.jsx
  ┃ ┃ ┗ 📜ShoppingBascket.jsx
  ┃ ┣ 📂data
  ┃ ┃ ┗ 📜productListData.json
  ┃ ┣ 📂styles
  ┃ ┃ ┗ 📜style.css
  ┃ ┣ 📜App.jsx
  ┃ ┗ 📜main.jsx
  ┣ 📜.eslintrc.cjs
  ┣ 📜.gitignore
  ┣ 📜.prettierrc.cjs
  ┣ 📜index.html
  ┣ 📜package.json
  ┣ 📜pnpm-lock.yaml
  ┣ 📜postcss.config.cjs
  ┣ 📜README.md
  ┣ 📜tailwind.config.js
  ┗ 📜vite.config.js
```

---

### 👨‍💻 수행 과정

#### 1. 데이터를 효과적으로 사용하면서, 리스트 렌더링을 적용하기에도 적합한것 같아 제품 리스트(ProductList)를 선택하여 UI를 구성했습니다.

<br />

#### 2. 포켓호스트의 'products'에서 필요한 일부 데이터를 추출하여 'productListData.json' 파일에 저장하였습니다.

<details>
  <summary><em>productListData.json</em></summary>

```json
{
  "name": "productListData.json",
  "version": "0.0.1",
  "author": "admin@gamil.com",
  "products": [
    {
      "id": "rm30kvaahi4amvw",
      "image": "/images/delicious.jpeg",
      "name": "[브룩클린688] 호주산 목초육 안심 스테이크 250g (냉장)",
      "description": "행사 100g 당  7,328원",
      "price": "22900",
      "discount": "20"
    },
    {
      "id": "wh0t60xgd0chnm6",
      "image": "/images/kf365.jpg",
      "name": "[KF365] 한돈 삼겹살 구이용 600g (냉장)",
      "description": "100g 당 판매가: 2,690원",
      "price": "17950",
      "discount": "10"
    },
    ...
  ]
}
```

</details>
<br />

#### 3. 저장한 데이터를 'Product' 컴포넌트에서 불러와, 'map()' 함수를 이용하여 'ProductList' 컴포넌트에 prop으로 전달하였습니다. 이를 통해 데이터의 각 항목이 'ProductList' 컴포넌트의 인스턴스로 변환되었습니다.

<details>
 <summary><em>Product.jsx</em></summary>

```jsx
export default function Product() {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="flex justify-between h-24pxr mb-20pxr">
        <h1 className="sr-only">상품리스트</h1>
        <div className="w-783pxr">
          <ul className="flex flex-wrap justify-between gap-4 product-container">
            {ProductListData.products.map((data) => (
              <ProductList key={data.id} {...data} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
```

</details>
<br />

#### 4. 'ProductList' 컴포넌트에서는 전달받은 'data' 객체의 속성들을 분해 할당하여 필요한 속성들을 각 자식 컴포넌트에게 prop으로 전달하였습니다. 각 자식 컴포넌트는 필요한 데이터를 받아 사용했습니다.

<details>
  <summary><em>productList.jsx</em></summary>

```jsx
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
```

</details>
<br />

---

### 👀 결과물

![react-mission02-결과물](https://github.com/fullkeem/react-homework/assets/103557910/29ed42b3-2c01-47fc-bc43-1599370b9c25)

---

### 🙂 회고

- 수업 시간에 따라가며 이해했던 부분들을 과제를 통해 직접 적용해 보는 경험이 좋았습니다.
  <br />
- 중복되는 코드를 효율적으로 단축시키는 방법을 배울 수 있어서 유익했습니다.
  <br />
- 데이터 요소 중 값이 없거나 필요한 부분을 렌더링할 때 조건부 렌더링을 활용하는 방법도 연습해 보았습니다.
  <br />
- 컴포넌트 구조를 세밀하게 분리하여 작업해 보았는데, 이 정도로 세분화하여 작업하는 것이 적절한지 궁금합니다.

export default function Images({ image, name }) {
  return (
    <a href="#">
      <img width={249} height={516} src={image} alt={name} />
    </a>
  );
}

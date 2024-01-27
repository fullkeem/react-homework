export default function Name({ name }) {
  return (
    <>
      <h2
        title={name}
        className="overflow-hidden font-bold w-249pxr text-16pxr mt-8pxr overflow-ellipsis whitespace-nowrap"
      >
        {name}
      </h2>
    </>
  );
}

export default function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} relative max-w-xl transform cursor-pointer transition hover:scale-105`}
    >
      <div>
        <div className="p-8">
          <div className="title-2xl font-bold">{item.title}</div>
          <div className="mt-10 font-semibold underline underline-offset-4">
            SHOP NOW +
          </div>
        </div>
      </div>
      <img
        src={item.src}
        className="absolute top-5 left-[40%] h-40 w-56"
        alt=""
      />
    </div>
  );
}

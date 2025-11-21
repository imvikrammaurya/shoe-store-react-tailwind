export default function Card({ item }) {
  return (
    <div>
      <div>
        <div>
          <div>{item.title}</div>
          <div>SHOP NOW +</div>
        </div>
      </div>
      <img src={item.src} alt="" />
    </div>
  );
}

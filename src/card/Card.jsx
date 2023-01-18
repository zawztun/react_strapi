import img1 from "../images/rayban.jpeg";

function Card({ item }) {
  const img =
    "http://localhost:1337" + item.attributes.image.data[0].attributes.url;
  console.log(img);
  return (
    <div>
      <div className="card__list__item">
        <div className="card__list__pic">
          <img className="card__photo" src={img} alt="" />
        </div>
        <div className="card__body">
          <h2 className="card__body__title">{item.attributes.title}</h2>
          <p className="card__body__text">
            70 years since its introduction, they are back: the Eames Fiberglass
            Chairs .Avaliable from 1 October November Design.
          </p>

          <button className="card__bottom__btn">SEE COLLECTION</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

function Card({ user, about, roles }) {
  return (
    <article className="card">
      <h2>{user}</h2>
      <ul className="card__taglist">
        {roles.map((role) => {
          return <Tag key={role} tag={role} />;
        })}
      </ul>
      <p>{about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;

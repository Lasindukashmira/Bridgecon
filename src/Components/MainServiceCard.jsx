import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
export default function MainServiceCard({ item }) {
  return (
    <div className="mainServiceCard">
      <div className="tophalf">
        <FontAwesomeIcon icon={item.icon} className="seicons" />
        <h1>{item.title}</h1>
      </div>
      <div className="bottomhalf">
        {item.subpoints.map((subitem) => {
          return <Row subitem={subitem} />;
        })}
      </div>
    </div>
  );
}

const Row = ({ subitem }) => (
  <div className="brow">
    <FontAwesomeIcon icon={subitem.pointicon} className="subicons" />

    <p>{subitem.point}</p>
  </div>
);

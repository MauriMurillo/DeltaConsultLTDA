import React, { useContext, useState } from "react";
import close from "../../../Assets/Icons/utilIcons/Close.svg";
import { DeltaContext } from "../../../Contexts/DeltaContext";
function Card(props) {
  const { cardData, setPerson, person } = props;
  return (
    <div className="cardTeam" onClick={cardData.name === person ? ()=>setPerson("") : () => setPerson(cardData.name)}>
      <div className="imageContainer">
        <img src={cardData.picture} alt={cardData.name} />
      </div>
      <div className="cardInfo">
        <div className="name">{cardData.name}</div>
        <div className="job">{cardData.job}</div>
      </div>
    </div>
  );
}

function Individual(props) {
  const { screenSize } = useContext(DeltaContext);
  const { persona, setPerson, person } = props;
  return (
    <div className="individualFrame">
      {screenSize.width > 600 ? (
        <Card cardData={persona} setPerson={setPerson} person={person} />
      ) : null}
      <div className="desc">
        {persona.resume.map((item) => (
          <p>{item}</p>
        ))}
        <img
          className="icon"
          src={close}
          alt="close"
          onClick={() => setPerson("")}
        />
      </div>
    </div>
  );
}

function All(props) {
  const { members, setPerson } = props;
  return (
    <div className="allFrame">
      {members.map((item) => (
        <Card cardData={item} setPerson={setPerson} />
      ))}
    </div>
  );
}

function Group(props) {
  const { members } = props;
  const [person, setPerson] = useState("");

  if (person === "") {
    return <All members={members} setPerson={setPerson} />;
  } else {
    const display = members.find((item) => item.name === person);
    return (
      <Individual persona={display} setPerson={setPerson} person={person} />
    );
  }
}

export { Group };

import React from "react";
import md5 from "md5";

function Gravatar(props) {
  const correo = props.correo;
  const hash = md5(correo);

  return (
    <img
      style={{
        borderRadius: "50%",
        marginRight: "1rem",
        marginBottom: "1rem",
        width: "100px",
        height: "100px"
      }}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;

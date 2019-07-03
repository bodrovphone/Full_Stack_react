import React from "react";
import Items from "../components/Items";

export default function Home(props) {
  return (
    <div>
      <Items page={Number(props.query.page) || 1} />
      <br />
    </div>
  );
}

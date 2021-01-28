import React from "react";

export default function(props) {
  const { color, children } = props;
  return <button style={{ color }}>{children}</button>;
}

import React from "react";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <p>Anar Mamedov ® {year}</p>
    </footer>
  );
}

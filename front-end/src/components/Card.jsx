import React from "react";

const Card = () => {
  return (
    <a href="/" className="flex flex-col gap-1">
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-14851194/original/0b5e0119-1909-4558-a573-4ecbeb124f56.jpeg?im_w=1200"
        alt=""
        className="aspect-square object-cover rounded-lg"
      />

      <h3 className="font-semibold text-lg truncate">Quarto em lisboa</h3>

      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Card;

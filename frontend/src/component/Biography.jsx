import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography" style={{ backgroundColor: "#f2ffff" }}>
        <div className="banner">
          <img src={imageUrl} alt="about image" />
        </div>
        <div className="banner">
          <h2>Biography</h2>
          <h3>Who Are We</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            facere aliquam perferendis, repellat saepe recusandae ipsam sapiente
            vero, suscipit odit amet? Eveniet ut tempore magni ab praesentium.
            Optio earum ipsam inventore blanditiis adipisci perspiciatis fuga,
            voluptates quia tempore quod ipsa, obcaecati rem explicabo
            asperiores quae natus ut, maiores iusto aliquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit
            perspiciatis dolorem aperiam labore eius doloremque magnam fugit hic
            quod, provident odit dolorum commodi quibusdam aspernatur quas.
            Commodi fugiat veritatis dignissimos porro, vero ut minima.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
            dolores!
          </p>
        
        </div>
      </div>
    </>
  );
};

export default Biography;

import React from "react";
import "./List.css";

const List = ({ form, setForm }) => {
  console.log(form);

  const deleteHandler = (index) => {
    setForm((form) => form.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2 className="m-5 list-header">Personnel List</h2>

      <div className="row row-cols-1 row-cols-md-5 g-1 p-5 my-4">
        {form.map((card, index) => (
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body rounded" key={index}>
              <img
                src={card.photo}
                className="card-img-top card-img"
                alt="personnel-img"
              ></img>
              <div className="card-body text-dark">
                <h5 className="card-title">
                  {card.name} {card.surname}
                </h5>
                <h6 className="card-text">{card.title}</h6>
                <p className="card-text">{card.gender}</p>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-danger mb-3"
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;

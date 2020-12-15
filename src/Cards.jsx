export const Cards = ({ title, image, ingredients }) => {
  return (
    <>
      <div class="card-columns float-left  ml-5 mt-3">
        <div
          className="card shadow p-3 mb-5 bg-white rounded "
          style={{ width: "18rem" }}
        >
          <img
            className="img-fluid w-50 mx-auto rounded-circle"
            src={image}
            alt="img"
          />
          <div className="card-body">
            <h5 className="card-title text-success">{title}</h5>
            <ul className="card-text  ">{ingredients}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

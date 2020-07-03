import React from "react";

export default class MovieItem extends React.Component {
  render() {
    const { item, onRemove } = this.props;

    const onHandleRemove = (id) => () => {
      onRemove(id);
    };

    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top card-img--height"
          src={`https://image.tmdb.org/t/p/w500${
            item.backdrop_path || item.poster_path
          }`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="card-text">Rate: {item.vote_average}</div>
          <button className="btn btn-danger" onClick={onHandleRemove(item.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

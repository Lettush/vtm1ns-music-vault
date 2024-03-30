import { Paper } from "@mui/material";

const Item = (props) => {
  return (
    <a href={props.item.url} target="_blank" rel="noreferrer">
      <Paper
        className="carousel-item"
        style={{
          backgroundImage: `url("${props.item.image}")`,
        }}
      >
        <h1>{props.item.name}</h1>
      </Paper>
    </a>
  );
};

export default Item;

import { Paper, Button } from "@mui/material";

const Item = (props) => {
  return (
    <Paper
      style={{
        backgroundImage: `url("${props.item.image}")`,
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "500px",
      }}
    >
      <h1>{props.item.name}</h1>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};

export default Item;

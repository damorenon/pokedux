
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
import StarButton from "./StartButton";

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const { name, sprites: { front_default }, types, id, favorite } = pokemon;
  const typesString = types.map(elem => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return <Card
    title={name}
    cover={<img src={front_default} alt={name} />}
    extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
  >
    <Meta description={typesString} />
  </Card>
}

export default PokemonCard;
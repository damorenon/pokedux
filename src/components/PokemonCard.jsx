import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function PokemonCard({ pokemon }) {
  const { name } = pokemon;
  return <Card
    title={name}
    cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto" />}
    extra={<StarOutlined />}
  >
    <Meta description="Fire, magic" />
  </Card>
}

export default PokemonCard;
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function PokemonCard({ pokemon }) {
  const { name, sprites: { front_default } } = pokemon;
  return <Card
    title={name}
    cover={<img src={front_default} alt={name} />}
    extra={<StarOutlined />}
  >
    <Meta description="Fire, magic" />
  </Card>
}

export default PokemonCard;
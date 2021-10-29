import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';

export default function Pokemon({ pokemon }) {
    return (
        <ItemStyles>
            <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
            
            <Title>
                <Link href={`/pokemon/${pokemon.id}`} >
                    {pokemon.name}
                </Link>
            </Title>
            <p>{pokemon.weight}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon?.pokemon_v2_pokemonabilities[0]?.pokemon_v2_ability?.name}</p>
            <p>{pokemon?.pokemon_v2_pokemonabilities[1]?.pokemon_v2_ability?.name}</p>
            <PriceTag>{pokemon.weight}</PriceTag>

        </ItemStyles>
    )
}
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Pokemon from './Pokemon';



export const ALL_POKEMONS_QUERY = gql`
    query ALL_POKEMONS_QUERY {
        pokemon_v2_pokemon {
            id
            name
            height
            weight    
            pokemon_v2_pokemonabilities {
                pokemon_v2_ability {
                    name 
                    
                }
            }
            
        }
    }
`;

const PokemonsListStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
`;

export default function Pokemons() {
    const { data, error, loading } = useQuery(ALL_POKEMONS_QUERY);
    console.log('data',data,'error', error,'loading', loading);
    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  let imageId = data?.pokemon_v2_pokemon?.id;


  return (
      <div>
        <PokemonsListStyles>
            {data.pokemon_v2_pokemon.map((pokemon) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </PokemonsListStyles>
     </div>
  )
    
}
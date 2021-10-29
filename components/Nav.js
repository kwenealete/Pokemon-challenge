import Link from "next/link";
import NavStyles from './styles/NavStyles';


export default function Nav() {
    // const user = useUser();
    // const { openCart } = useCart();
    
    return (
    <NavStyles>
        <Link href="/pokemons">Pokemons</Link>
    </NavStyles>
    );
}
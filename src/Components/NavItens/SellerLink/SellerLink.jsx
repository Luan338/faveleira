export function SellerLink() {
    // NAVEGAÇÃO PARA O ITENS
    const NavItens = [
        {
            id: 1,
            text: "Meu atelie By Rafa",
        }
    ];

    return (
        <nav>
            <ul>
                {NavItens.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
        </nav>
    )
}
export function ProductList() {
    // ITENS
    const SubItens = [
        {
            id: 1,
            text: "Ecobags",
        },
        {
            id: 2,
            text: "Bolsa térmica",
        },
        {
            id: 3,
            text: "Todos",
        }
    ];

    return (
        <nav>
            <ul>
                {SubItens.map(({ id, text }) => {
                    <li key={id}>{text}</li>
                })}
            </ul>
        </nav>
    )
}
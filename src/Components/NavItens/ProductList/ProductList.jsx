import "./ProductList.css";

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
        <nav className="nav_product">
            <ul>
                {SubItens.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
        </nav>
    )
}
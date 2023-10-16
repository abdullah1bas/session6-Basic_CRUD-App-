import Products from "./Products";

function Categories() {
    return (
        <>
            <h1> Categories Page</h1>
            <Products showTitlePage={false} showButton={false} />
        </>
    )
}

export default Categories;
import "./Book.css"
import OrderButton from "./OrderButton"

const Book = () => {
    return (
        <div className="one-book">
            <h2 className="main-heading">Název knihy</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nobis quia cumque fuga laboriosam dolores eius blanditiis accusamus
                suscipit sunt repudiandae tempora deleniti iure modi, facere labore
                molestiae consectetur maiores quasi?</p>
            <OrderButton></OrderButton>
        </div>
    )
}

export default Book
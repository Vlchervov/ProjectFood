import { useActions } from "../../../hooks/useActions";
import { CatalogCartFooter } from "./CatalogCartFooterComponent.styled";

interface ICatalogFooterComponent {
    item: {
        id: number;
        priceTotal: number;
        count: number;
    }
    setButton: Function;
}

export const CatalogCartFooterComponent = (props: ICatalogFooterComponent) => {
    const { decrease, removeItem, increase } = useActions();
    return (
        <CatalogCartFooter>
            <div className="CatalogCartFooter">
                <p className="CatalogCartFooter__price">{props.item.priceTotal} ₽</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        className="CatalogCartFooter__counterDecreaseButton"
                        onClick={() => {
                            decrease(props.item.id);
                            props.setButton("default");
                            if (props.item.count === 1) removeItem(props.item.id);
                        }}
                    >
                        <span></span>
                    </div>
                    <p className="CatalogCartFooter__count">{props.item.count}</p>
                    <div
                        className="CatalogCartFooter__counterIncreaseButton"
                        onClick={() => {
                            increase(props.item.id);
                        }}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </CatalogCartFooter>
    )
}
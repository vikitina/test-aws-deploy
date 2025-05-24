import { useParams } from "react-router-dom"
import { data, category as categoryData } from "../../mock/data";
import styles from "./goods.module.css";
const Goods = () => {

    const {id} = useParams()
    const product = data.find((item) => item.id === Number(id))
    console.log(product)
    if (!product) {
       
        return <div>Not available</div>
    }
    const { name, price, photo, category} = product;
    const categoryName=categoryData.find((item)=> item.id === category)
    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}>
            <img className={styles.image} src={`/images/products/${photo}`} alt=""/>
            </div>
            <div className={styles.description}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.price}>{`€ ${price}`}</p>
                <p className={styles.category}>Category: {categoryName.name}</p>
            </div>

        </div>

    )
}
export default Goods
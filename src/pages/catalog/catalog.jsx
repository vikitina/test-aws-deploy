import { data } from "../../mock/data"
import Products from "../../components/products/products"

const Catalog = () => {
  const handbags = data.filter((item) => item.category === 1)
  const clothes = data.filter((item) => item.category === 2)
  return (
    <>
      <Products list={handbags} title={"handbags"} />
      <Products list={clothes} title={"clothes"} />
    </>

  )
}
export default Catalog
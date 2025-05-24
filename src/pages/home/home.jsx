import { Link } from "react-router-dom"
// import { data } from "../../mock/data"
import Hero from "../../components/hero/hero"
import Features from "../../components/features/features"
import Banner from "../../components/banneer/banner"
import Products from "../../components/products/products"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { getData } from "../../store/data-process/data-process.selector"

const Home = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(getData)
  const handbags = data.filter((item)=>item.category===1).slice(0,4)
  const clothes = data.filter((item)=>item.category===2).slice(0,4)
  return (
    <>
    <Hero />
    <Features />
    <Banner />
    <Products list={handbags} title={"handbags"}/>
    <Products list={clothes} title={"clothes"}/>

    </>
  )
}
export default Home
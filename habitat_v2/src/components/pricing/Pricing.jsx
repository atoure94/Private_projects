import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import img from "../images/pricing.jpg"
import "../home/price/price.css"
import RecentCard from "../home/recent/RecentCard";

const Pricing = () => {
  return (
    <>
        <section className='blog-out mb'>
            <Back name='Prix' title='Prix ' cover={img} />
            <div className='container recent'>
                <RecentCard />
            </div>
        </section>
    </>
  )
}

export default Pricing

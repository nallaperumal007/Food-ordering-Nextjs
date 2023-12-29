import Image from "next/image"
import Right from "../icons/Right"
export default function Hero() {
  return (
    <>
    <section className="hero">

         <div>
             <h1 className="text-4xl font-semibold">Delicious Signature Pizzas Await You!</h1>
             <p className="my-6 text-gray-600 ">Explore a taste adventure with our crafted pizzas,Love and care in every pizza,
             for your delight.Savor freshness in every delicious bite.Experience a masterpiece in 
             every slice.Elevate your dining joy with us</p>
             <div className="flex gap-4">
                <button className="flex justify-center bg-rose-800 uppercase  items-center gap-2 text-white px-4 py-2 rounded-full">Order Now!
                 <Right />
                 </button>
                <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                  Learn More...
                  <Right />
                  </button>
             </div>
         </div>

         <div className="relative">
            <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
         </div>
    </section>
    </>
  )
}

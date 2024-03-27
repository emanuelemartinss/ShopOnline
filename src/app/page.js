"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
 const [products, setProducts] = useState([])

 useEffect(() => {
  getDados()
 },[])

 async function getDados(){
  const data = await fetch("https://fakestoreapi.com/products")

  const prod = await data.json()

  setProducts(prod)
 }

  return (
    <main className="flex min-h-screen max-w-screen flex-wrap gap-6 
    items-center justify-center p-24">
      {products.map((p) => {
        return (<div key={p.id} className="border rounded-md ">
          <Image src={p.image} width={200} height={200} alt={p.title} />
          <div>
            {p.title}
          </div>
          <div>
            {p.price}
          </div>
        </div>)
      })}
    </main>
  );
}

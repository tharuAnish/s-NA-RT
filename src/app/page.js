import { fetchAllProducts } from "@/action"
import { auth } from "@/auth"
import ProductCard from "@/components/product-card"
import { redirect } from "next/navigation"

export default async function Home() {
  // this will give you wether the user is authenticated or not
  const getSession = await auth()

  if (!getSession?.user) redirect("/unauth-page")

  const getAllProducts = await fetchAllProducts()

  return (
    <div className="bg-stone-50">
      <div className="min-h-[80vh] pt-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-2">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0
          ? getAllProducts.data.map((productItem) => (
              <ProductCard item={productItem} />
            ))
          : null}
      </div>
    </div>
  )
}

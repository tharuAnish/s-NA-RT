import { fetchAllProducts } from "@/action"
import ProductCard from "@/components/product-card"

export default async function Home() {
  const getAllProducts = await fetchAllProducts()
  console.log(getAllProducts)

  return (
    <div className="bg-stone-50">
      <div className="min-h-[80vh] mt-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-2">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0
          ? getAllProducts.data.map((productItem) => (
              <ProductCard item={productItem} />
            ))
          : null}
      </div>
    </div>
  )
}

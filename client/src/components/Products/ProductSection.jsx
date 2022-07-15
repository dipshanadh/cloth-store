import products from "../../_data/products"
import Product from "./Product"

const ProductSection = () => {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto p-4  sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Customers also purchased
				</h2>

				<div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
					{products.map(product => (
						<Product product={product} key={product.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductSection

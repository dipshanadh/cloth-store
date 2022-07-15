import Product from "./Product"
import products from "../../_data/cart"

const Products = () => (
	<ul className="-my-6 divide-y divide-gray-200">
		{products.map(product => (
			<Product product={product} key={product.id} />
		))}
		{/* <!-- More products... --> */}
	</ul>
)

export default Products

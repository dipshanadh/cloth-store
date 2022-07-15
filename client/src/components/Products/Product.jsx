import { Link } from "react-router-dom"

const Product = ({ product }) => (
	<div key={product.id} className="group relative">
		<Link to={`./${product.id}`}>
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
				<img
					src={product.imageSrc}
					alt={product.imageAlt}
					className="w-full h-full object-center object-cover lg:w-full lg:h-full"
				/>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<span aria-hidden="true" className="absolute inset-0" />
						{product.name}
					</h3>
					<p className="mt-1 text-sm text-gray-500">
						{product.color}
					</p>
				</div>
				<p className="text-sm font-medium text-gray-900">
					{product.price}
				</p>
			</div>
		</Link>
	</div>
)

export default Product

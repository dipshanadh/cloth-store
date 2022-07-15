import { useState } from "react"
import product from "../_data/product"

const reviews = { href: "#", average: 4, totalCount: 117 }

const Product = () => {
	const [selectedColor, setSelectedColor] = useState(product.colors[0])
	const [selectedSize, setSelectedSize] = useState(product.sizes[3])

	return (
		<div className="bg-white">
			<div className="pt-6">
				{/* Image gallery */}
				<div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
					<div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
						<img
							src={product.images[0].src}
							alt={product.images[0].alt}
							className="w-full h-full object-center object-cover"
						/>
					</div>
					<div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
						<div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
							<img
								src={product.images[1].src}
								alt={product.images[1].alt}
								className="w-full h-full object-center object-cover"
							/>
						</div>
						<div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
							<img
								src={product.images[2].src}
								alt={product.images[2].alt}
								className="w-full h-full object-center object-cover"
							/>
						</div>
					</div>
					<div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
						<img
							src={product.images[3].src}
							alt={product.images[3].alt}
							className="w-full h-full object-center object-cover"
						/>
					</div>
				</div>

				{/* Product info */}
				<div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							{product.name}
						</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:mt-0 lg:row-span-3">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl text-gray-900">
							{product.price}
						</p>

						{/* Reviews */}
						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map(rating => (
										<svg
											key={rating}
											className={`
												${reviews.average > rating ? "text-gray-900" : "text-gray-200"}
												h-5 w-5 flex-shrink-0`}
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="sr-only">
									{reviews.average} out of 5 stars
								</p>
								<a
									href={reviews.href}
									className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
								>
									{reviews.totalCount} reviews
								</a>
							</div>
						</div>

						<form className="mt-10">
							{/* Colors */}
							<div>
								<h3 className="text-sm text-gray-900 font-medium">
									Color
								</h3>
								<div className="flex items-center space-x-3 mt-4">
									{/* 
                                            Active and Checked: "ring ring-offset-1"
										    Not Active and Checked: "ring-2" 
                                        */}
									{product.colors.map(color => (
										<label
											className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400"
											key={color.name}
											htmlFor={color.name}
										>
											<input
												type="radio"
												name="color"
												value={color.name}
												id={color.name}
												className="sr-only"
												aria-labelledby="color-0-label"
												onChange={() =>
													setSelectedColor(color)
												}
											/>
											<span
												aria-hidden="true"
												className={`h-8 w-8 ${
													color.class
												} ${
													selectedColor === color &&
													"ring-2 ring-indigo-500"
												} border border-black border-opacity-10 rounded-full`}
											></span>
										</label>
									))}
								</div>
							</div>

							{/* Sizes */}
							<div className="mt-10">
								<div className="flex items-center justify-between">
									<h3 className="text-sm text-gray-900 font-medium">
										Size
									</h3>
									<a
										href="#"
										className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
									>
										Size guide
									</a>
								</div>

								<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 mt-4">
									{product.sizes.map(size => (
										<label
											key={size.name}
											htmlFor={size.name}
											className={`${
												selectedSize === size &&
												"ring-2 ring-indigo-500"
											} group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6`}
										>
											<input
												type="radio"
												name="size"
												id={size.name}
												value={size.name}
												disabled={!size.inStock}
												className="sr-only"
												onChange={() =>
													setSelectedSize(size)
												}
											></input>
											<span>{size.name}</span>
											{size.inStock ? (
												<span
													className="border-indigo-500 absolute -inset-px rounded-md pointer-events-none"
													aria-hidden="true"
												/>
											) : (
												<span
													aria-hidden="true"
													className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
												>
													<svg
														className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
														viewBox="0 0 100 100"
														preserveAspectRatio="none"
														stroke="currentColor"
													>
														<line
															x1={0}
															y1={100}
															x2={100}
															y2={0}
															vectorEffect="non-scaling-stroke"
														/>
													</svg>
												</span>
											)}
										</label>
									))}
								</div>
							</div>

							<button
								type="submit"
								className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Add to bag
							</button>
						</form>
					</div>

					<div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						{/* Description and details */}
						<div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">
									{product.description}
								</p>
							</div>
						</div>

						<div className="mt-10">
							<h3 className="text-sm font-medium text-gray-900">
								Highlights
							</h3>

							<div className="mt-4">
								<ul
									role="list"
									className="pl-4 list-disc text-sm space-y-2"
								>
									{product.highlights.map(highlight => (
										<li
											key={highlight}
											className="text-gray-400"
										>
											<span className="text-gray-600">
												{highlight}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="mt-10">
							<h2 className="text-sm font-medium text-gray-900">
								Details
							</h2>

							<div className="mt-4 space-y-6">
								<p className="text-sm text-gray-600">
									{product.details}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product

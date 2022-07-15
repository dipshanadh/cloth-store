import Featured from "./Featured"

const Category = ({ category }) => {
	const { name, featured, sections } = category

	return (
		<div className="flex">
			<div className="relative flex">
				{/* 
                Item active: "border-indigo-600 text-indigo-600", 
                Item inactive: "border-transparent text-gray-700 hover:text-gray-800"
            */}
				<button
					type="button"
					className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
					aria-expanded="false"
				>
					{name}
				</button>
			</div>

			{/*
            Show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
                From: "opacity-0"
                To: "opacity-100"
            Leaving: "transition ease-in duration-150"
                From: "opacity-100"
                To: "opacity-0"
        */}
			<div className="absolute top-full inset-x-0 text-sm text-gray-500 hidden">
				{/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
				<div
					className="absolute inset-0 top-1/2 bg-white shadow"
					aria-hidden="true"
				></div>

				<div className="relative bg-white">
					<div className="max-w-7xl mx-auto px-8">
						<div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
							<div className="col-start-2 grid grid-cols-2 gap-x-8">
								{featured.map(product => (
									<Featured
										product={product}
										key={product.name}
									/>
								))}
							</div>
							<div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
								{sections.map(section => (
									<div key={section.id}>
										<p className="font-medium text-gray-900">
											{section.name}
										</p>
										<ul
											role="list"
											aria-labelledby="Accessories-heading"
											className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
										>
											{section.items.map(item => (
												<li
													className="flex"
													key={item.name}
												>
													<a
														href={item.href}
														className="hover:text-gray-800"
													>
														{" "}
														{item.name}{" "}
													</a>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Category

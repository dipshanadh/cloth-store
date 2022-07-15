import { sortOptions, subCategories, filters } from "../_data/filterOptions"

import ProductSection from "../components/Products/ProductSection"

const Products = () => {
	return (
		<div className="bg-white">
			<div>
				{/*     
					Mobile filter dialog

					Off-canvas filters for mobile, show/hide based on off-canvas filters state.
				*/}
				<div
					className="relative z-40 lg:hidden"
					role="dialog"
					aria-modal="true"
				>
					{/*}
						Off-canvas menu backdrop, show/hide based on off-canvas menu state.

						Entering: "transition-opacity ease-linear duration-300"
						From: "opacity-0"
						To: "opacity-100"
						Leaving: "transition-opacity ease-linear duration-300"
						From: "opacity-100"
						To: "opacity-0"
					*/}
					<div className="fixed inset-0 bg-black bg-opacity-25"></div>

					<div className="fixed inset-0 flex z-40">
						{/* 
							Off-canvas menu, show/hide based on off-canvas menu state.

							Entering: "transition ease-in-out duration-300 transform"
								From: "translate-x-full"
								To: "translate-x-0"
							Leaving: "transition ease-in-out duration-300 transform"
								From: "translate-x-0"
								To: "translate-x-full"
						*/}
						<div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
							<div className="px-4 flex items-center justify-between">
								<h2 className="text-lg font-medium text-gray-900">
									Filters
								</h2>
								<button
									type="button"
									className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
								>
									<span className="sr-only">Close menu</span>
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>

							{/* Filters */}
							<form className="mt-4 border-t border-gray-200">
								<h3 className="sr-only">Categories</h3>
								<ul className="font-medium text-gray-900 px-2 py-3">
									{subCategories.map(category => (
										<li key={category.name}>
											<a
												href={category.href}
												className="block px-2 py-3"
											>
												{category.name}
											</a>
										</li>
									))}
								</ul>

								{filters.map(section => (
									<div
										className="border-t border-gray-200 px-4 py-6"
										key={section.id}
									>
										<h3 className="-mx-2 -my-3 flow-root">
											{/*  Expand/collapse section button  */}
											<button
												type="button"
												className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
												aria-controls="filter-section-mobile-0"
												aria-expanded="false"
											>
												<span className="font-medium text-gray-900">
													{" "}
													Color{" "}
												</span>
												<span className="ml-6 flex items-center">
													{/* Expand icon, show/hide based on section open state. */}
													<svg
														className="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
															clip-rule="evenodd"
														/>
													</svg>
													{/* Collapse icon, show/hide based on section open state. */}
													<svg
														className="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
															clip-rule="evenodd"
														/>
													</svg>
												</span>
											</button>
										</h3>
										{/* <Filter section, show/hide based on section state. */}
										<div
											className="pt-6"
											id="filter-section-mobile-0"
										>
											<div className="space-y-6">
												{section.options.map(
													(option, optionIdx) => (
														<div
															key={option.value}
															className="flex items-center"
														>
															<input
																id={`filter-mobile-${section.id}-${optionIdx}`}
																name={`${section.id}[]`}
																defaultValue={
																	option.value
																}
																type="checkbox"
																defaultChecked={
																	option.checked
																}
																className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
															/>
															<label
																htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																className="ml-3 min-w-0 flex-1 text-gray-500"
															>
																{option.label}
															</label>
														</div>
													)
												)}
											</div>
										</div>
									</div>
								))}
							</form>
						</div>
					</div>
				</div>

				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative z-10 flex items-baseline justify-between pt-8 pb-6 border-b border-gray-200">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900">
							New Arrivals
						</h1>

						<div className="flex items-center">
							<div className="relative inline-block text-left">
								<div>
									<button
										type="button"
										className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
										id="menu-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										Sort
										<svg
											className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
								</div>
								{/* 
									Dropdown menu, show/hide based on menu state.

									Entering: "transition ease-out duration-100"
										From: "transform opacity-0 scale-95"
										To: "transform opacity-100 scale-100"
									Leaving: "transition ease-in duration-75"
										From: "transform opacity-100 scale-100"
										To: "transform opacity-0 scale-95"
								*/}
								<div
									className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="menu-button"
									tabindex="-1"
								>
									<div className="py-1" role="none">
										{/*                 
											Active: "bg-gray-100", Not Active: ""

											Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
										*/}

										{sortOptions.map(option => (
											<a
												key={option.name}
												href={option.href}
												className="font-medium text-gray-900 text-gray-500 block px-4 py-2 text-sm"
											>
												{option.name}
											</a>
										))}
									</div>
								</div>
							</div>

							<button
								type="button"
								className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">View grid</span>
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
								</svg>
							</button>
							<button
								type="button"
								className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
							>
								<span className="sr-only">Filters</span>
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>

					<section
						aria-labelledby="products-heading"
						className="pt-6 pb-24"
					>
						<h2 id="products-heading" className="sr-only">
							Products
						</h2>

						<div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
							{/* Filters */}
							<form className="hidden lg:block">
								<h3 className="sr-only">Categories</h3>
								<ul className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
									{subCategories.map(category => (
										<li key={category.name}>
											<a href={category.href}>
												{category.name}
											</a>
										</li>
									))}
								</ul>

								{filters.map(section => (
									<div
										className="border-b border-gray-200 py-6"
										key={section.id}
									>
										<h3 className="-my-3 flow-root">
											<button
												type="button"
												className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
												aria-controls="filter-section-0"
												aria-expanded="false"
											>
												<span className="font-medium text-gray-900">
													{" "}
													Color{" "}
												</span>
												<span className="ml-6 flex items-center">
													{/* Expand icon, show/hide based on section open state. */}
													<svg
														className="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
															clip-rule="evenodd"
														/>
													</svg>
													{/* Collapse icon, show/hide based on section open state. */}
													<svg
														className="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
															clip-rule="evenodd"
														/>
													</svg>
												</span>
											</button>
										</h3>
										{/* Filter section, show/hide based on section state. */}
										<div
											className="pt-6"
											id="filter-section-0"
										>
											<div className="space-y-4">
												{section.options.map(
													(option, optionIdx) => (
														<div
															key={option.value}
															className="flex items-center"
														>
															<input
																id={`filter-${section.id}-${optionIdx}`}
																name={`${section.id}[]`}
																defaultValue={
																	option.value
																}
																type="checkbox"
																defaultChecked={
																	option.checked
																}
																className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
															/>
															<label
																htmlFor={`filter-${section.id}-${optionIdx}`}
																className="ml-3 text-sm text-gray-600"
															>
																{option.label}
															</label>
														</div>
													)
												)}
											</div>
										</div>
									</div>
								))}
							</form>

							{/* Product grid */}
							<div className="lg:col-span-3">
								<ProductSection />
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}

export default Products

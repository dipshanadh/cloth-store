import CategoryMobile from "./CategoryMobile"
import navigation from "../../_data/navigation"

const MobileNavigation = () => {
	return (
		<div
			className="relative z-40 lg:hidden hidden"
			role="dialog"
			aria-modal="true"
		>
			{/* 
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
                        From: "-translate-x-full"
                        To: "translate-x-0"
                        Leaving: "transition ease-in-out duration-300 transform"
                        From: "translate-x-0"
                        To: "-translate-x-full"
                    */}

				<div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
					<div className="px-4 pt-5 pb-2 flex">
						<button
							type="button"
							className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
						>
							<span className="sr-only">Close menu</span>
							{/* <!-- Heroicon name: outline/x --> */}
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

					{/* <!-- Links --> */}
					<div className="mt-2">
						<div className="border-b border-gray-200">
							<div
								className="-mb-px flex px-4 space-x-8"
								aria-orientation="horizontal"
								role="tablist"
							>
								{/* <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" --> */}
								{navigation.categories.map(category => (
									<button
										key={category.name}
										id="tabs-1-tab-1"
										className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
										aria-controls="tabs-1-panel-1"
										role="tab"
										type="button"
									>
										{category.name}
									</button>
								))}
							</div>
						</div>

						{/* Tab panel, show/hide based on tab state. */}
						{navigation.categories.map(category => (
							<CategoryMobile
								category={category}
								key={category.id}
							/>
						))}
					</div>

					<div className="border-t border-gray-200 py-6 px-4 space-y-6">
						{navigation.pages.map(page => (
							<div className="flow-root" key={page.name}>
								<a
									key={page.href}
									href={page.href}
									className="-m-2 p-2 block font-medium text-gray-900"
								>
									{page.name}
								</a>
							</div>
						))}
					</div>

					<div className="border-t border-gray-200 py-6 px-4 space-y-6">
						<div className="flow-root">
							<a
								href="#"
								className="-m-2 p-2 block font-medium text-gray-900"
							>
								Sign in
							</a>
						</div>
						<div className="flow-root">
							<a
								href="#"
								className="-m-2 p-2 block font-medium text-gray-900"
							>
								Create account
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileNavigation

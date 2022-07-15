import { Link } from "react-router-dom"

// Components
import Category from "./Category"

// Data
import navigation from "../../_data/navigation"

const DesktopNavigation = () => {
	return (
		<header className="relative bg-white">
			<p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
				Get free delivery on orders inside 100KM radius
			</p>

			<nav
				aria-label="Top"
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
			>
				<div className="border-b border-gray-200">
					<div className="h-16 flex items-center">
						{/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
						<button
							type="button"
							className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
						>
							<span className="sr-only">Open menu</span>
							{/* <!-- Heroicon name: outline/menu --> */}
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
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>

						{/* <!-- Logo --> */}
						<div className="ml-4 flex lg:ml-0">
							<Link to="/">
								<span className="sr-only">Workflow</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</Link>
						</div>

						{/* <!-- Flyout menus --> */}
						<div className="hidden lg:ml-8 lg:block lg:self-stretch">
							<div className="h-full flex space-x-8">
								{navigation.categories.map(category => (
									<Category
										category={category}
										key={category.id}
									/>
								))}

								{navigation.pages.map(page => (
									<Link
										key={page.href}
										to={page.href}
										className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
									>
										{page.name}
									</Link>
								))}
							</div>
						</div>

						{/* Sign in and sign up link */}
						<div className="ml-auto flex items-center">
							<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
								<Link
									to="/auth/login"
									className="text-sm font-medium text-gray-700 hover:text-gray-800"
								>
									Sign in
								</Link>
								<span
									className="h-6 w-px bg-gray-200"
									aria-hidden="true"
								></span>
								<Link
									to="/auth/signup"
									className="text-sm font-medium text-gray-700 hover:text-gray-800"
								>
									Create account
								</Link>
							</div>

							{/* <!-- Search --> */}
							<div className="flex lg:ml-6 p-2 text-gray-400 hover:text-gray-500">
								<span className="sr-only">Search</span>
								{/* <!-- Heroicon name: outline/search --> */}
								<svg
									className="w-6 h-6"
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
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>

							{/* <!-- Cart --> */}
							<div className="ml-4 flow-root lg:ml-6 group -m-2 p-2 flex items-center">
								<div
									href="#"
									className="group -m-2 p-2 flex items-center"
								>
									{/* <!-- Heroicon name: outline/shopping-bag --> */}
									<svg
										className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
											d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
										/>
									</svg>
									<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
										0
									</span>
									<span className="sr-only">
										items in cart, view bag
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default DesktopNavigation

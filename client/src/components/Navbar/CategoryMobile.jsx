import Featured from "./Featured"

const CategoryMobile = ({ category }) => {
	const { featured, sections } = category

	return (
		<div
			id="tabs-1-panel-1"
			className="pt-10 pb-8 px-4 space-y-10"
			aria-labelledby="tabs-1-tab-1"
			role="tabpanel"
			tabIndex="0"
		>
			<div className="grid grid-cols-2 gap-x-4">
				{featured.map(product => (
					<Featured product={product} key={product.name} />
				))}
			</div>

			{sections.map(section => (
				<div key={section.id}>
					<p
						id="women-clothing-heading-mobile"
						className="font-medium text-gray-900"
					>
						{section.name}
					</p>
					<ul
						role="list"
						aria-labelledby="women-clothing-heading-mobile"
						className="mt-6 flex flex-col space-y-6"
					>
						{section.items.map(item => (
							<li className="flow-root" key={item.name}>
								<a
									href={item.href}
									className="-m-2 p-2 block text-gray-500"
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
	)
}

export default CategoryMobile

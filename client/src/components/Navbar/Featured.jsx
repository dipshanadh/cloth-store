const Featured = ({ product }) => {
	const { name, href, imageSrc, imageAlt } = product

	return (
		<div className="group relative text-base sm:text-sm" key={name}>
			<div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
				<img
					src={imageSrc}
					alt={imageAlt}
					className="object-center object-cover"
				/>
			</div>
			<a href={href} className="mt-6 block font-medium text-gray-900">
				<span
					className="absolute z-10 inset-0"
					aria-hidden="true"
				></span>
				{name}
			</a>
			<p aria-hidden="true" className="mt-1">
				Shop now
			</p>
		</div>
	)
}

export default Featured

import MobileNavigation from "./MobileNavigation"
import DesktopNavigation from "./DesktopNavigation"

const Navbar = () => {
	return (
		<div className="bg-white">
			<MobileNavigation />
			<DesktopNavigation />
		</div>
	)
}

export default Navbar

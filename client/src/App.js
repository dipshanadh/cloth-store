import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Cart from "./components/Cart"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

// Pages
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Product from "./Pages/Product"
import Products from "./Pages/Products"

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Cart />
			<Routes>
				<Route path="/">
					<Route index element={<HeroSection />} />
				</Route>
				<Route path="/auth">
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>
				<Route path="/products">
					<Route index element={<Products />} />
					<Route path=":id" element={<Product />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

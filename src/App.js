import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Products = lazy(() => import('./components/Product/Products'));
const ProductDetails = lazy(() => import('./components/Product/ProductDetails'));
const NoMatch = lazy(() => import('./components/NavBar/NoMatch'));

const App = () => {
	return (
		<>
			<NavBar />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:slug" element={<ProductDetails />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
import { HeroSection } from "./components/homePage/HeroSection";
import { MaxScreenSize } from "./components/MaxScreenSize";
import { NavBar } from "./components/navbar/NavBar";

export default function Home() {
	return (
		<main className="bg-page-bg-color text-text-color-page ">
			<div className="relative">
				{/* the navigation Bar */}
				<MaxScreenSize className="navbar w-full  m-auto flex justify-center py-5">
					<NavBar />
				</MaxScreenSize>
				{/* Hero Section */}
				<MaxScreenSize className="flex-col">
					<HeroSection />
				</MaxScreenSize>
			</div>
		</main>
	);
}

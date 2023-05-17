import { HeroSection } from "./components/homePage/HeroSection";
import { MaxScreenSize } from "./components/MaxScreenSize";
import { NavBar } from "./components/navbar/NavBar";
import { VideoComponent } from "./components/VideoAdd";

export default function Home() {
	return (
		<main className="bg-page-bg-color text-text-color-page h-[100%]">
			<div className="relative">
				<div className="hero-secion relative w-full m-auto max-w-7xl items-center justify-between">
					{/* the navigation Bar */}
					<VideoComponent />
					<div className="absolute top-0">
						<MaxScreenSize className="navbar w-full  m-auto flex-col justify-center py-5 ">
							<NavBar />
							{/* Hero Section */}

							<HeroSection />
						</MaxScreenSize>
					</div>
				</div>
			</div>
		</main>
	);
}

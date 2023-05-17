import Image from "next/image";
import { StemEducation } from "./components/afibotservices/StemEducation";
import { HeroSection } from "./components/homePage/HeroSection";
import { MaxScreenSize } from "./components/MaxScreenSize";
import { NavBar } from "./components/navbar/NavBar";
import { VideoComponent } from "./components/VideoAdd";
import stemImage from "../../assets/images/WhatsApp Image 2023-05-17 at 6.30.22 AM.jpeg";

export default function Home() {
	return (
		<main className="bg-page-bg-color text-text-color-page h-[100%]">
			<div className="relative">
				<div className="hero-secion relative w-full m-auto max-w-7xl items-center justify-between">
					{/* the navigation Bar */}
					<VideoComponent />
					<div className="absolute top-0 w-full">
						<MaxScreenSize className="navbar w-full  m-auto flex-col justify-center py-5 ">
							<NavBar />
							{/* Hero Section */}
							<HeroSection />

							{/* stem Education */}
						</MaxScreenSize>
					</div>
				</div>
				<div className="mt-5 relative">
					<div className="relative">
						<div className="empty-img-cover w-full h-80"></div>
						<Image
							className="w-full object-cover h-80"
							src={stemImage}
							alt="Stem Education"
						/>
					</div>
					<div className="top-content w-full">
						<MaxScreenSize>
							<StemEducation />
						</MaxScreenSize>
					</div>
				</div>
			</div>
		</main>
	);
}

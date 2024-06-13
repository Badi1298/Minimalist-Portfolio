import { navItems } from '@/data';

import Hero from '@/components/hero';
import Grid from '@/components/grid';
import Experience from '@/components/experience';
import Testimonials from '@/components/testimonials';
import RecentProjects from '@/components/recent-projects';

import { FloatingNav } from '@/components/ui/floating-navbar';
import Approach from '@/components/approach';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
			<div className="w-full max-w-7xl">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Testimonials />
				<Experience />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}

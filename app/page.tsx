import { FaHome } from 'react-icons/fa';

import { FloatingNav } from '@/components/ui/floating-navbar';

import Grid from '@/components/grid';
import Hero from '@/components/hero';

export default function Home() {
	return (
		<main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
			<div className="w-full max-w-7xl">
				<FloatingNav navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]} />
				<Hero />
				<Grid />
			</div>
		</main>
	);
}

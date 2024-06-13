import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/magic-button';
import { socialMedia } from '@/data';

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
	return (
		<footer
			id="contact"
			className="mb-[100px] w-full pb-10 md:mb-5"
		>
			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Ready to take <span className="text-purple">your</span> digital presente to the next level?
				</h1>
				<p className="my-5 text-center text-white-200 md:mt-10">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
				<a href="mailto:serbandavid83@gmail.com">
					<MagicButton
						label="Let's get in touch"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>

			<div className="mt-16 flex flex-col items-center justify-between md:flex-row">
				<p className="text-sm font-light md:text-base md:font-normal">Copyright &copy; 2024 Serban David</p>
				<div className="flex items-center gap-3 md:gap-6">
					{socialMedia.map((profile) => (
						<div
							key={profile.id}
							className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
						>
							<img
								src={profile.img}
								alt={profile.id.toString()}
								width={20}
								height={20}
							/>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
}

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { companies, testimonials } from '@/data';

export default function Testimonials() {
	return (
		<div
			id="testimonials"
			className="py-20"
		>
			<h1 className="heading">
				Kind words from <span className="text-purple">satisfied clients</span>
			</h1>
			<div className="mt-10 flex flex-col items-center max-lg:mt-10">
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>

				<div className="mt-16 flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
					{companies.map(({ id, name, nameImg, img }) => (
						<div
							key={id}
							className="flex max-w-32 gap-2 md:max-w-60"
						>
							<img
								src={img}
								alt={name}
								className="w-5 md:w-10"
							/>
							<img
								src={nameImg}
								alt={name}
								className="w-20 md:w-24"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

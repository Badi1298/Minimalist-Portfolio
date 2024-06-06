import { cn } from '@/utils/cn';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './background-gradient-animation';
import { GlobeDemo } from './grid-globe';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return (
		<div
			className={cn(
				// change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
				'md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8',
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	id,
	className,
	title,
	titleClassName,
	description,
	img,
	imgClassName,
	spareImg,
}: {
	id: number;
	className?: string;
	title?: string | React.ReactNode;
	titleClassName?: string;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	spareImg?: string;
}) => {
	return (
		<div
			className={cn(
				'group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
				className
			)}
			style={{
				background: 'rgb(4,7,29)',
				backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
			}}
		>
			<div className={`${id === 6 && 'flex h-full justify-center'}`}>
				<div className="absolute h-full w-full">
					{img && (
						<Image
							fill
							src={img}
							alt={img}
							className={cn(imgClassName, 'object-cover object-center')}
						/>
					)}
				</div>
				<div className={`absolute -bottom-5 right-0 ${id === 5 && 'w-full opacity-80'}`}>
					{spareImg && (
						<Image
							fill
							src={spareImg}
							alt={spareImg}
							className="h-full w-full object-cover object-center"
						/>
					)}
				</div>

				{id === 6 && (
					<BackgroundGradientAnimation>
						<div className="absolute z-50 flex items-center justify-center font-bold text-white" />
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						'relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10'
					)}
				>
					<div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">{description}</div>
					<div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">{title}</div>
				</div>

				{id === 2 && <GlobeDemo />}
			</div>
		</div>
	);
};

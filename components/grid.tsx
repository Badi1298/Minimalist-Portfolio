import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { gridItems } from '@/data';

export default function Grid() {
	return (
		<section id="about">
			<BentoGrid>
				{gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
					<BentoGridItem
						key={id}
						id={id}
						title={title}
						titleClassName={titleClassName}
						description={description}
						className={className}
						img={img}
						imgClassName={imgClassName}
						spareImg={spareImg}
					/>
				))}
			</BentoGrid>
		</section>
	);
}

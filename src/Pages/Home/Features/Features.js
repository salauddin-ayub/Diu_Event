import React from 'react';
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';
import features from '../../../Data/features';
import './Features.css';

const items = [
	{
		src: 'https://daffodilvarsity.edu.bd/template/images/course-1.jpg'
	},
	{
		src: 'https://i0.wp.com/blog.daffodilvarsity.edu.bd/wp-content/uploads/2020/02/84828249_10157397014892203_7386717366794584064_o.jpg?fit=1933%2C1289&ssl=1'
	},
	{
		src: 'https://scontent.fdac136-1.fna.fbcdn.net/v/t1.6435-9/32116195_739295969792464_4483986629148540928_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFwawvX9oEIw7Qp5u0kE09pGN05C3TMsN4Y3TkLdMyw3vCyWyMbuyCc8t5tRA13pDFOF_Gz90qDcRGUQgN-AfeE&_nc_ohc=DB56IsJ9isoAX8zM4Cj&_nc_oc=AQlh8BxjveUiNsGthYnbwiUaUkw8Tn1bhY-VC76LcLer_p-I88OHEKG8ft43ISrRV30&_nc_ht=scontent.fdac136-1.fna&oh=00_AT935TSrgaiFpnyz8GhL2WKLJx0DPchIRZ7FfZNRjaSYIw&oe=623D57E1'
	},
	{
		src: 'https://scontent.fdac136-1.fna.fbcdn.net/v/t31.18172-8/13247670_10154304380537203_2284033987559155695_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFTdqruUHGTBIziAdvs_kWyENxke3uTFnUQ3GR7e5MWdXFlwGrAAO_Trul2GidC1Zvr1BcqslbG1IXtY_vRp7ZA&_nc_ohc=7ZaZTOOVQFgAX_tutFF&_nc_ht=scontent.fdac136-1.fna&oh=00_AT80Cgo8jasE8RQeNi9UNm08OV1Awcbb6jmYPeUmozAslQ&oe=623EBC35'
	}
];

const Features = () => {
	const [ activeIndex, setActiveIndex ] = React.useState(0);
	const [ animating, setAnimating ] = React.useState(false);

	const onExiting = () => {
		setAnimating(true);
	};
	const onExited = () => {
		setAnimating(false);
	};
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};
	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};
	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
				<img src={item.src} alt={item.altText} width="100%" className="img-fluid" />
			</CarouselItem>
		);
	});

	return (
		<section id="features">
			<div className="container">
				<div className="row">
					<div className="mt-4">
						<h4 className="mb-5 mt-5 text-center">
							Time and distance are no longer a matter of concern. Easily Contuct us to visit our campus.
						</h4>
					</div>
					<div className="col-md-6 align-self-center">
						<ul>
							{features.map((feature) => (
								<li key={feature.icon}>
									<div className="d-flex">
										<div className="icon">
											<span>{feature.icon}</span>
										</div>
										<div className="features-item-text">
											<h6>{feature.title}</h6>
											<p>{feature.description}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="col-md-6">
						<Carousel
							activeIndex={activeIndex}
							next={next}
							previous={previous}
							keyboard={false}
							pause={false}
							ride="carousel"
							interval="2000"
							slide={false}
							className="carousel-fade"
						>
							<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="d-none"/>
							{slides}
							<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
							<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
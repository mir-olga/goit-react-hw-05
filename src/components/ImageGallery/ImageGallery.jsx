import  ImageCard  from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, openModal }) => {
	
return (
	<ul className={css.listImg}>
		{items.map(({ id, urls: { small, regular }, alt_description }) => (
			<li key={id} onClick={() => openModal({ urls: regular, alt: alt_description })}>
					<ImageCard  
					small={small}
					descr={alt_description} 
				/>
			</li>
		))}
	</ul>  
);
}

export default ImageGallery;
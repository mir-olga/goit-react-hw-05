import css from './ImageCard.module.css';

const ImageCard = ({ small, descr }) => {

    return (
            <img
                className={css.imageCard}
                src={small}
                alt={descr}
                width="300"
                height="400"
            />
    );
}

export default ImageCard;
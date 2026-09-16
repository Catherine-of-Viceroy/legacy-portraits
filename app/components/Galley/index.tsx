import Tile from '../Tile';
import styles from './index.module.css';
import galleryData from '../../data/gallery.json';
const Gallery = () => {
    const { data } = galleryData;
    return (
        <div className={styles.gallery}>
            <h2 className={styles.title}>Live Projects</h2>
            <div className={styles.grid}>
                {data.map((item) => (
                    <Tile
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
};

export default Gallery;
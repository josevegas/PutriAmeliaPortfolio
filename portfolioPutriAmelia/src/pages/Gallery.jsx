import { photoSessions } from '../data/photos';

function Gallery() {
    return (
        <div className="gallery-grid">
            {photoSessions.map(photo => (
                <div key={photo.id} className="gallery-item">
                    <img src={photo.src} alt={photo.title} />
                    {/* Opcional: Mostrar título o tags al hacer hover */}
                </div>
            ))}
        </div>
    )
}

export default Gallery
function VideoGrid() {
    const videoIds = ['ZukboSBHZJk?si=qfhNWwxKGEGAz7Zz', 'gVdvwKKDTgc?si=oRTbfyLLK2_3JOIi'];
    return (
        <div className="video-container">
            {videoIds.map(id => (
                <div key={id} className="video-item">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video de Modelaje"
                    ></iframe>
                </div>
            ))}
        </div>
    );
}

export default VideoGrid
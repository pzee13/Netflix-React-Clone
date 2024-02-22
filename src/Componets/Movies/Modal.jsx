

import YouTube from 'react-youtube';

function VideoModal({ videoId, onClose }) {
  const opts = {
    height: '400',
    width: '600',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default VideoModal;

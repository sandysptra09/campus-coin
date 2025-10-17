import ReactPlayer from 'react-player';

const videoUrl = 'https://youtu.be/4ZwC2oAGpsM';

export default function HowItWorksVideoPlayer() {
    return (
        <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3 aspect-video rounded-xl overflow-hidden shadow-lg">
                {videoUrl ? (
                    <ReactPlayer
                        src={videoUrl}
                        width="100%"
                        height="100%"
                        controls
                        pip
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                        🎬 Video coming soon...
                    </div>
                )}
            </div>
        </div>
    )
}

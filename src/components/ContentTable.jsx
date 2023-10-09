import { usePlayerStore } from '@/store/playerStore'

const ContentTable = ({song, index}) => {
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

    const playSong = () => {
        
        fetch(`/api/get-info-playlist.json?id=${song.albumId}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[index]})
            })
    }

    return (
        <tr className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300">
            <button onClick={playSong}>
                {song.id === currentMusic?.song?.id && song.albumId === currentMusic?.song?.albumId 
                ?
                    <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5 text-green-400">{index + 1}</td>
                :
                    <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">{index + 1}</td>
                }
                <td className="px-4 py-2 flex gap-3">
                    <picture className="">
                        <img src={song.image} alt={song.title} className="w-11 h-11" />
                    </picture>
                    <div className="flex flex-col">
                        {song.id === currentMusic?.song?.id && song.albumId === currentMusic?.song?.albumId 
                        ?
                            <h3 className="text-green-400 text-base font-normal">{song.title}</h3>
                        :
                        <   h3 className="text-white text-base font-normal">{song.title}</h3>
                        }
                        
                        <span>{song.artists.join(", ")}</span>
                    </div>
                </td>
                <td className="px-4 py-2">{song.album}</td>
                <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">{song.duration}</td>
            </button>
        </tr>
    )
}

export default ContentTable
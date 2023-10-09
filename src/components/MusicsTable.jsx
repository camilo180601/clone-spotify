import { usePlayerStore } from '@/store/playerStore'

export const Time = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
    ><path
        d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
    ></path><path
        d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"
    ></path></svg>
)

const MusicsTable = ({ songs }) => {
    const { currentMusic, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

    const playSong = (song, index) => {

        fetch(`/api/get-info-playlist.json?id=${song.albumId}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[index] })
            })
    }

    return (
        <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/50">
            <thead className="">
                <tr className="text-zinc-400 text-sm">
                    <th className="px-4 py-2 font-light">#</th>
                    <th className="px-4 py-2 font-light">Título</th>
                    <th className="px-4 py-2 font-light">Álbum</th>
                    <th className="px-4 py-2 font-light"><Time /></th>
                </tr>
            </thead>
            <tbody>
                <tr className="h-[10px]"></tr>
                {
                    songs.map((song, index) => (
                        <tr key={index} onClick={() => playSong(song, index)} className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300">

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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default MusicsTable
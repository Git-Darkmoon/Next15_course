import { Metadata } from "next"

type Album = {
  readonly userId: number
  readonly id: number
  readonly title: string
}

export const metadata: Metadata = {
  title: "Albums | Next 15 Course",
  description: "Albums page",
}

const Albums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums")
  if (!response.ok) throw new Error("Failed to fetch data")
  const albumsData: Album[] = await response.json()

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albumsData.map((album) => {
          return <li key={album.id}>{album.title}</li>
        })}
      </ul>
    </div>
  )
}
export default Albums

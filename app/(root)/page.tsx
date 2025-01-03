import Greeting from "../components/Greeting"

function Home() {
  console.log("what am I doing here ? -- Server")
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Next.js 15</h1>
      <Greeting />
    </>
  )
}
export default Home

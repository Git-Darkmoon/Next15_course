import Link from "next/link"

const UsersDashboard = () => {
  return (
    <div>
      <h2>Dashboard Users</h2>

      <ul className="space-y-6">
        <li>
          <Link href={"/dashboard/users/1"}>User 1</Link>
        </li>
        <li>
          <Link href={"/dashboard/users/2"}>User 2</Link>
        </li>
        <li>
          <Link href={"/dashboard/users/3"}>User 3</Link>
        </li>
        <li>
          <Link href={"/dashboard/users/4"}>User 4</Link>
        </li>
      </ul>
    </div>
  )
}
export default UsersDashboard

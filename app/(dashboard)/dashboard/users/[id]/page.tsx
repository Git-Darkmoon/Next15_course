export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params

  const title = `User ${id} | Next 15 Course`

  return {
    title,
  }
}

const UserDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params

  return <div>User Details Page for user {id}</div>
}
export default UserDetailsPage

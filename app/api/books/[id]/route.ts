import books from "../../db"

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)

  const body = await request.json()
  books[id] = body
  return Response.json(books)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  books.splice(id, 1)
  return Response.json(books)
}

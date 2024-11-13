import { users, deleteUser, updateUser } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((user) => user.id == parseInt(id))
  return Response.json(user)
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  deleteUser(parseInt(id))

  return Response.json(users)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {

  const user = await request.json();
  
  const { id } = params;

  updateUser(parseInt(id), user.name);

  return Response.json(users)
}
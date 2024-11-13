type User = { id: number, name: string }

export let users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const user = await request.json();
  const newUser = {
    id: users.length + 1,
    name: user.name,
  };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers:{
      "Content-Type": "application/json",
    },
    status: 201,
  })
}

export const deleteUser = (userId: number) => {
  users = users.filter( user => user.id !== userId)
}

export const updateUser = (userId: number, newName: string) => {
  users = users.map(user => user.id == userId ? {...user, name: newName} : user)
}
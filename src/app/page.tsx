import { connectDB } from "@/libs/mongodb";
import user from "@/models/user";
import Link from "next/link";

const loadUsers = async () =>{
  await connectDB()
  const users = user.find()
  return users
}

export default async function Home() {
  const users = await loadUsers()
  console.log(users)
  return (
    <main >
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">¡Bienvenido a la página de inicio!</h2>
        <p className="mt-2 text-sm text-gray-600 text-center">Aquí puedes comenzar a explorar nuestro sitio.</p>
        <div className="mt-4 flex justify-center">
          <Link href="/login">
            <span className="text-indigo-600 hover:text-indigo-500">Iniciar sesión</span>
          </Link>
          <span className="mx-2 text-gray-500">o</span>
          <Link href="/register">
            <span className="text-indigo-600 hover:text-indigo-500">Registrarse</span>
          </Link>
        </div>
      </div>
    </div>
    </main>
  );
}

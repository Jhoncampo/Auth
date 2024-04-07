"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Aquí puedes agregar la lógica de cierre de sesión, por ejemplo, limpiar el token de autenticación
        // Redirige a la página de inicio de sesión después de cerrar sesión
        router.push("/login");
    };

    return (
        <>
            <nav className="bg-gray-800 p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl">My App</h1>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                    >
                        Logout
                    </button>
                </div>
            </nav>
            <section className="container mx-auto p-8 bg-white shadow rounded-md">
                <h2 className="text-2xl font-semibold mb-4">
                    Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Widget 1 */}
                    <div className="p-4 bg-gray-100 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">Widget 1</h3>
                        <p>This is the content of Widget 1.</p>
                    </div>
                    {/* Widget 2 */}
                    <div className="p-4 bg-gray-100 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">Widget 2</h3>
                        <p>This is the content of Widget 2.</p>
                    </div>
                    {/* Widget 3 */}
                    <div className="p-4 bg-gray-100 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">Widget 3</h3>
                        <p>This is the content of Widget 3.</p>
                    </div>
                    {/* Widget 4 */}
                    <div className="p-4 bg-gray-100 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">Widget 4</h3>
                        <p>This is the content of Widget 4.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;

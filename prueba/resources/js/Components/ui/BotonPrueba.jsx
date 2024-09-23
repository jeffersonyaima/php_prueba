import { Link } from "@inertiajs/react";

export default function BotonPrueba() {
    return (
        <Link href="/productos/disponibles">
            <div className="relative inline-block">
                <div className="absolute inset-0 border-2 border-red-500 rounded-md transform translate-x-0 translate-y-0 transition-all duration-300 ease-in-out hover:translate-x-2 hover:-translate-y-2"></div>

                <button className="relative bg-red-500 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:-translate-y-2 z-10">
                    Productos disponibles
                </button>
            </div>
        </Link>
    );
}

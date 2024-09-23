import { useState } from 'react';

export default function TablaProductos({ productos }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mb-6">
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-1/2 transition"
                />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Nombre</th>
                        <th scope="col" className="px-6 py-3">Precio</th>
                        <th scope="col" className="px-6 py-3">Disponible</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((producto) => (
                        <tr key={producto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {producto.id}
                            </th>
                            <td className="px-6 py-4">{producto.nombre}</td>
                            <td className="px-6 py-4">{producto.precio}</td>
                            <td className="px-6 py-4">
                                {producto.disponible ? (
                                    <span className="bg-green-400 text-white rounded-xl p-2">Disponible</span>
                                ) : (
                                    <span className="bg-red-400 text-white rounded-xl p-2">No Disponible</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

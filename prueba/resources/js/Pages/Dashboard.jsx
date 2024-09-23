import BotonPrueba from "@/Components/ui/BotonPrueba";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';
import Boton from "/public/storage/prueba/boton.png";
import TablaProductos from "@/Components/ui/TablaProductos";

export default function Dashboard({ auth, productos }) {

    console.log(productos);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid grid-cols-2">

                            <div className="border-l-2 flex justify-center items-center my-4">
                                <BotonPrueba />
                            </div>
                        </div>
                        <hr className="my-2 mx-8" />

                        <div className="mx-8 my-2">
                            <TablaProductos
                                productos={productos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

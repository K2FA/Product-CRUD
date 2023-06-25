import List from "@/Components/ProductList/List";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex">
                        <Link
                            href={route("product.create")}
                            as="button"
                            method="get"
                            className="btn bg-black text-white my-4 p-2 rounded-lg font-semibold"
                        >
                            Create Product
                        </Link>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className=" shadow-sm sm:rounded-lg">
                            <div className="overflow-x-auto">
                                <table className="table w-full ">
                                    <thead className="border-solid border-2 border-black">
                                        <tr>
                                            <th className="border-solid border-2 border-black">
                                                #
                                            </th>
                                            <th className="border-solid border-2 border-black">
                                                Nama Product
                                            </th>
                                            <th className="border-solid border-2 border-black">
                                                Deskripsi Product
                                            </th>
                                            <th className="border-solid border-2 border-black">
                                                Harga
                                            </th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center border-solid border-2 border-black ">
                                        {props.products?.map((data, i) => {
                                            return (
                                                <tr key={data.id}>
                                                    <td className="border-solid border-2 border-black">
                                                        {i + 1}
                                                    </td>
                                                    <td className="border-solid border-2 border-black">
                                                        {data.nama}
                                                    </td>
                                                    <td className="border-solid border-2 border-black">
                                                        {data.deskripsi}
                                                    </td>
                                                    <td className="border-solid border-2 border-black">
                                                        Rp. {data.harga}
                                                    </td>
                                                    <td className="border-solid border-2 border-black">
                                                        <Link
                                                            href={route(
                                                                "product.edit"
                                                            )}
                                                            as="button"
                                                            method="get"
                                                            data={{
                                                                id: data.id,
                                                            }}
                                                        >
                                                            Update
                                                        </Link>
                                                    </td>
                                                    <td className="border-solid border-2 border-black">
                                                        <Link
                                                            href={route(
                                                                "product.destroy",
                                                                data.id
                                                            )}
                                                            as="button"
                                                            method="delete"
                                                        >
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

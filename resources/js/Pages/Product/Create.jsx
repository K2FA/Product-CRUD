import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Create(props) {
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState("");

    const handleTombolSubmit = () => {
        const product = {
            nama,
            deskripsi,
            harga,
        };
        router.post("/product", product);
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Product
                </h2>
            }
        >
            <Head title="Create Product" />

            <div className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="form-control max-w-4xl">
                        <div className="max-w-4xl">
                            <InputLabel
                                htmlFor="nama"
                                value="Nama"
                                className="label w-full"
                            >
                                Nama
                            </InputLabel>
                            <TextInput
                                type="text"
                                id="nama"
                                name="nama"
                                onChange={(event) =>
                                    setNama(event.target.value)
                                }
                                value={nama}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="deskripsi"
                                value="Deskripsi"
                                className="label"
                            >
                                Deskripsi
                            </InputLabel>
                            <TextInput
                                type="text"
                                id="deskripsi"
                                name="deskripsi"
                                onChange={(event) =>
                                    setDeskripsi(event.target.value)
                                }
                                value={deskripsi}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="harga"
                                value="Harga"
                                className="label"
                            >
                                Harga
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="harga"
                                name="harga"
                                onChange={(event) =>
                                    setHarga(event.target.value)
                                }
                                value={harga}
                            />
                        </div>
                        <div className="">
                            <button
                                onClick={handleTombolSubmit}
                                className="btn bg-black text-white px-4 py-2 rounded-md"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import Counter from "@/Components/Counter";
import NameShower from "@/Components/NameShower";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddPost from "@/Components/AddPost";

export default function Dashboard({ auth, posts }) {
    const name = {
        firstName: "hamza",
        middleName: "Al",
        lastName: "alchbli",
        gender: "male",
    };
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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <AddPost />
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex flex-col gap-6">
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-gray-100 p-4 flex flex-col gap-4"
                                    >
                                        <h1 className="text-2xl">
                                            {post.user.name}
                                        </h1>
                                        <p>{post.content}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Counter />
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Counter />
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Counter />
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <NameShower name={name} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

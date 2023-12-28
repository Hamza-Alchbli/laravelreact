import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
const AddPost = ({ className }) => {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            content: user.content,
        });
    const submit = (e) => {
        e.preventDefault();

        post(route("posts.store"));
        setData("content", '')
    };
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Add new post
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Your account name will be visable to other users.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="content" value="content" />

                    <TextInput
                        id="content"
                        className="mt-1 block w-full"
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        required
                        isFocused
                        autoComplete="content"
                    />

                    <InputError className="mt-2" message={errors.content} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
};

export default AddPost;

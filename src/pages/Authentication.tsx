
import { useEffect, useState } from "react";
import Logout from "./Logout";
import Linkpage from "./Linkpage";
import DisplayAll from "./DisplayAll";

type User = {
    _id?: string;
    name?: string;
    email?: string;
    age?: number;
    course?:string;
};

function Authentication() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const getMe = async () => {
        try {
            console.log("getMe is running");

            const response = await fetch("/api/me", {
                method: "GET",
                credentials: "include",
            });

            const result = await response.json();

            console.log("Me response:", result);

            if (!response.ok) {
                throw new Error(result.message || "Unable to get user");
            }

            setUser(result.user);
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMe();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">
                    Loading your profile...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-xl font-semibold text-red-500">
                        Unable to load profile
                    </h1>

                    <p className="mt-2 text-gray-500">
                        {error}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">

            <header className="h-16 bg-white border-b flex items-center justify-between px-8">

                <h1 className="text-xl font-semibold">
                    My Account
                </h1>

                <div className="relative">

                    <button
                        onClick={() =>
                            setIsDropdownOpen(!isDropdownOpen)
                        }
                        className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
                    >
                        Account
                        <span className="ml-2">
                            {isDropdownOpen ? "▲" : "▼"}
                        </span>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">

                            <div
                                onClick={() =>
                                    setIsDropdownOpen(false)
                                }
                            >
                                <Linkpage
                                    to="/update-user"
                                    text="Update User"
                                />
                            </div>

                            <div
                                onClick={() =>
                                    setIsDropdownOpen(false)
                                }
                            >
                                <Linkpage
                                    to="/delete-user"
                                    text="Delete User"
                                />
                            </div>
                             <div
                                onClick={() =>
                                    setIsDropdownOpen(false)
                                }
                            >
                                <Linkpage
                                    to="/display-user"
                                    text="Display User"
                                />
                            </div>
                          
                            <div className="border-t border-gray-200">
                                <Logout />
                            </div>

                        </div>
                    )}

                </div>

            </header>

            <main className="flex justify-center px-6 py-12">

                <div className="w-full max-w-xl bg-white border rounded-2xl shadow-sm p-8">

                    <div className="flex items-center gap-4 mb-8">

                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-2xl font-semibold text-blue-600">
                                {user?.name?.charAt(0).toUpperCase()}
                            </span>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold">
                                {user?.name || "User"}
                            </h2>

                            <p className="text-gray-500">
                                Your account information
                            </p>
                        </div>

                    </div>

                    <div className="space-y-5">

                        <div>
                            <p className="text-sm text-gray-500">
                                User id
                            </p>

                            <p className="mt-1 text-lg font-medium">
                                {user?._id || "Not available"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Name
                            </p>

                            <p className="mt-1 text-lg font-medium">
                                {user?.name || "Not available"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Email
                            </p>

                            <p className="mt-1 text-lg font-medium">
                                {user?.email || "Not available"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Age
                            </p>

                            <p className="mt-1 text-lg font-medium">
                                {user?.age ?? "Not available"}
                            </p>
                        </div>
                         <div>
                            <p className="text-sm text-gray-500">
                                Course
                            </p>

                            <p className="mt-1 text-lg font-medium">
                                {user?.course || "Not available"}
                            </p>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default Authentication;

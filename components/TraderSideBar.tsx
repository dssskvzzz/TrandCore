import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons"; // Импорт иконки стрелки

const SideBar = () => {
    return (
        <div className="w-72 bg-neutral-950 text-white p-4 fixed top-3 left-3 bottom-3 rounded-xl border">
            <div className="flex justify-between">
                <Image src="/icon.png" alt="Logo" width={130} height={16} />
                
                <Link href="/">
                    <Button variant={"outline"} className="flex items-center w-8 h-8">
                        <ArrowLeftIcon className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
            <ul className="mt-4">
                <li className="mb-4">
                    <Link href="/education/intro" className="hover:text-blue-400">
                        Introduction
                    </Link>
                </li>
                <li className="mb-4">
                    <Link href="/education/resources" className="hover:text-blue-400">
                        Resources
                    </Link>
                </li>
                <li className="mb-4">
                    <Link href="/education/courses" className="hover:text-blue-400">
                        Courses
                    </Link>
                </li>
                <li className="mb-4">
                    <Link href="/education/community" className="hover:text-blue-400">
                        Community
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;

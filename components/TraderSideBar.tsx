import { Button } from "@/components/ui/button";
import { 
    ArrowLeftIcon, 
    DashboardIcon, 
    TableIcon, 
    GearIcon, 
    CookieIcon 
} from "@radix-ui/react-icons";
import Link from "next/link";

interface SideBarProps {
    activeSection: string; // Активная секция
    setActiveSection: (section: string) => void; // Функция для смены секции
}

const SideBar: React.FC<SideBarProps> = ({ activeSection, setActiveSection }) => {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", Icon: DashboardIcon },
        { id: "table", label: "Table", Icon: TableIcon },
        { id: "settings", label: "Settings", Icon: GearIcon },
        { id: "currencies", label: "Currencies", Icon: CookieIcon },
    ];

    return (
        <div className="w-72 bg-neutral-950 text-white p-4 fixed top-3 left-3 bottom-3 rounded-xl border">
            <div className="flex justify-between">
                <div className="flex rounded-sm border w-full mr-2 items-center">
                    <h1 className="text-sm ml-2">TrendCore</h1>
                </div>
                <Link href="/">
                    <Button variant={"outline"} className="flex items-center w-9 h-9">
                        <ArrowLeftIcon className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
            <ul className="mt-4">
                {menuItems.map((item) => (
                    <li key={item.id} className="mb-2">
                        <Button
                            variant={activeSection === item.id ? "outline" : "ghost"}
                            className="w-full justify-start flex items-center gap-8"
                            onClick={() => setActiveSection(item.id)}
                        >
                            <item.Icon className="w-5 h-5" /> {/* Рендеринг иконки */}
                            <span className="text-neutral-300 font-semibold">{item.label}</span>
                            
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

import Link from "next/link";

export const Footer = () => {
    return ( 
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">
                <Link href="https://omgtu.ru/">
                    ОмГТУ 2023
                    </Link>
                    
                </Button>
                <Button variant="ghost" size="sm">
                    <Link href="https://vk.com/timaxutka">
                    Тимофеев М.Е.
                    </Link>
                </Button>
                <Button variant="ghost" size="sm">
                    <Link href="https://vk.com/department_of_computer_science">
                    ИВТ
                    </Link>
                </Button>
            </div>
        </div>
     );
}
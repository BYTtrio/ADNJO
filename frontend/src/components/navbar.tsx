import { Link, NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import logo from 'C:/Users/aleks/IdeaProjects/ADNJO/frontend/src/assets/image-removebg-preview.png'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function Navbar () {
    return (
        <NavigationMenu className='navbar w-full fixed clear-both'>
            <NavigationMenuList className='flex flex-wrap items-center justify-center'>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <img className='logo h-7 w-auto' src={logo} alt="" />
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Documentation
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Leaderboard
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        My Trophies
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Link href="/login">
                            Login
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Avatar>
                        <AvatarImage className='w-10'  src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        Aleksander Stankowski
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar;

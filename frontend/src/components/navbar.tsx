import { House, ListOrdered, LogOut, Menu, SquarePlus, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/fishkey-logo-blue-trim.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section className="py-4">
      <div className="container max-w-full">
        <nav className="hidden justify-between lg:flex mx-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <img src={logo} className="w-7" alt="logo" />
              <span className="text-3xl font-bold">Fishkey</span>
            </div>
            <div className="flex items-center">
              <a
                className={cn(
                  "text-muted-foreground",
                  "text-2xl",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="/"
              >
                <House />
                <span className="text-base">Home</span>
              </a>
              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="/flashcards/create"
              >
                <SquarePlus />
                <span className="text-base">Create flashcards</span>
              </a>
              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="/trophies"
              >
                <Trophy />
                <span className="text-base">My Trophies</span>
              </a>
              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="/leaderboard"
              >
                <ListOrdered />
                <span className="text-base">Leaderboard</span>
              </a>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <a
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost",
                }),
              )}
              href="/profile"
            >
              <User />
              <span className="text-base">My profile</span>
            </a>
            <Button variant="outline" onClick={() => navigate("/login")}>Log out<LogOut /></Button>
            <ModeToggle/>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between mx-4">
            <div className="flex items-center gap-1.5">
              <img src={logo} className="w-7" alt="logo" />
              <span className="text-3xl font-bold">Fishkey</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-1.5">
                      <img src={logo} className="w-7" alt="logo" />
                      <span className="text-3xl font-bold">Fishkey</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  <a href="/" className="font-semibold">
                    Home
                  </a>
                  <a href="/flashcards/create" className="font-semibold">
                    Create flashcards
                  </a>
                  <a href="/trophies" className="font-semibold">
                    My Trophies
                  </a>
                  <a href="/leaderboard" className="font-semibold">
                    Leaderboard
                  </a>
                  <a href="/profile" className="font-semibold">
                    My profile
                  </a>
                </div>
                <div className="border-t pt-4">
                  <div className="mt-2 flex flex-col gap-3">
                    <Button variant="outline" onClick={() => navigate("/login")}>Log out<LogOut /></Button>
                    <ModeToggle/>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section className="py-4">
      <div className="container max-w-full">
        <nav className="hidden justify-between lg:flex mx-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="https://images.vexels.com/media/users/3/142789/isolated/lists/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" className="w-8" alt="logo" />
              <span className="text-2xl font-bold">Andjo</span>
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
                href="#"
              >
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
                <span className="text-base">Leaderboard</span>
              </a>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => navigate("/login")}>Log in</Button>
            <Button onClick={() => navigate("/register")}>Sign up</Button>
            <ModeToggle/>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between mx-4">
            <div className="flex items-center gap-2">
              <img src="https://images.vexels.com/media/users/3/142789/isolated/lists/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" className="w-8" alt="logo" />
              <span className="text-xl font-bold">Andjo</span>
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
                    <div className="flex items-center gap-2">
                    <img src="https://images.vexels.com/media/users/3/142789/isolated/lists/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" className="w-8" alt="logo" />
                      <span className="text-xl font-bold">Andjo</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  <a href="/" className="font-semibold">
                    Home
                  </a>
                  <a href="/trophies" className="font-semibold">
                    My Trophies
                  </a>
                  <a href="/leaderboard" className="font-semibold">
                    Leaderboard
                  </a>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Github
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </a>
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    <Button variant="outline">Log in</Button>
                    <Button>Sign up</Button>
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

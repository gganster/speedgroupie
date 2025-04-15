"use client"
import {useState} from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { BackgroundGradientAnimation } from "./aceternity/background-gradient-animation";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    router.push(`/ai?searchterm=${searchTerm}`);

  }
//m-4 mb-2 p-4 py-8
  return (
    <div className="relative">
      <BackgroundGradientAnimation
        className=" h-56 flex flex-col items-center justify-center m-4 mb-2 p-4 py-8 rounded-lg "
      >
        <h1 className="text-6xl font-bold">SpeedGroupie</h1>
        <h3 className="text-lg mt-4 mb-16">Trouvez le concert que vous ne cherchez pas en un claquement de doigt 🎉</h3>
      </BackgroundGradientAnimation>
      <div className="absolute top-38 left-0 right-0 w-screen flex justify-center px-8">
        <form className="flex items-center justify-center gap-0.5 w-full max-w-2xl" onSubmit={handleSearch}>
          <Input
            className="mt-4 dark:bg-secondary/60 "
            type="text"
            placeholder="Décrivez le concert de vos rêves, nous nous occupons du reste"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            size={"icon"}
            variant="ghost"
            className="mt-4 ml-2 bg-secondary/60 hover:bg-secondary/40 text-white cursor-pointer"
            type="submit"
          >
              <Search />
          </Button>
        </form>
      </div>
    </div>
  )
}
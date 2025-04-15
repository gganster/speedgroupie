"use client"
import {useState} from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { BackgroundGradientAnimation } from "./aceternity/background-gradient-animation";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;

  }
//m-4 mb-2 p-4 py-8
  return (
      <BackgroundGradientAnimation
        className=" h-56 flex flex-col items-center justify-center m-4 mb-2 p-4 py-8 rounded-lg "
      >

        <h1 className="text-6xl font-bold">SpeedGroupie</h1>
        <h3 className="text-lg mt-4">Trouvez le concert que vous ne cherchez pas en un claquement de doigt 🎉</h3>
        <form className="flex items-center gap-0.5 w-full max-w-2xl" onSubmit={handleSearch}>
          <Input
            className="mt-4 dark:bg-secondary/50 "
            type="text"
            placeholder="Décrivez le concert que vous cherchez (date, genre, artiste)"
          />
          <Button
            size={"icon"}
            variant="ghost"
            className="mt-4 ml-2 bg-secondary/50 hover:bg-secondary/70 text-white cursor-pointer"
            type="submit"
          >
              <Search />
          </Button>
        </form>
      </BackgroundGradientAnimation>
  )
}
import axios from "axios";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CardConcert from "@/components/CardConcert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {Spotlight} from "@/components/aceternity/spotlight";

export default async function Artist({ params }) {
  const { id } = await params;

  const urls = [
    `https://groupietrackers.herokuapp.com/api/artists/${id}`,
    `https://groupietrackers.herokuapp.com/api/dates/${id}`,
    `https://groupietrackers.herokuapp.com/api/locations/${id}`,
    `https://groupietrackers.herokuapp.com/api/relation/${id}`
  ]

  const res = await Promise.all(urls.map(url => axios.get(url)));

  const [
    artistData,
    datesData,
    locationsData,
    relationsData
  ] = res.map(res => res.data);

  return (
    <div className="p-4 relative max-w-screen min-h-screen overflow-x-hidden">
      <div className="relative">
        <img src={artistData.image} alt={artistData.name} className="w-full h-48 object-cover rounded-md mb-4 blur-xs" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 rounded-md blur-xs"></div>
        <h1 className="text-6xl font-bold mb-2 absolute top-16 left-8">{artistData.name}</h1>
      </div>
      
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 95%, .20) 0, hsla(210, 100%, 75%, .10) 50%, hsla(210, 100%, 65%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 95%, .15) 0, hsla(210, 100%, 75%, .10) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 95%, .10) 0, hsla(210, 100%, 65%, .10) 80%, transparent 100%)"
      />

      <div className="flex gap-4 flex-wrap">
          {/*dates de concert*/}
          <Card className="flex-1 bg-gray-900">
            <CardHeader>
              <CardTitle><h2 className="text-2xl">Concert Dates</h2></CardTitle>
              <CardDescription>Dates and locations of concerts</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(relationsData.datesLocations).map(([location, dates], index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="cursor-pointer">{location}</AccordionTrigger>
                    <AccordionContent className="flex flex-wrap gap-2">
                      {dates.map((date, index) => (
                        <Badge key={index} className="mb-1">{date}</Badge>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          {/*membres du groupe*/}
          <Card className="flex-1 bg-gray-900">
            <CardHeader>
              <CardTitle><h2 className="text-2xl">Group member</h2></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {artistData.members.map((member, index) => (
                <Badge key={index} className="mb-1">{member}</Badge>
              ))}
            </CardContent>
          </Card>
          {/*infos diverses*/}
          <Card className="flex-1 bg-gray-900">
            <CardHeader>
              <CardTitle><h2 className="text-2xl">Additionnal Infos</h2></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg ">First Album: {artistData.firstAlbum}</p>
              <p className="text-lg ">Creation Date: {artistData.creationDate}</p>
            </CardContent>
          </Card>
      </div>

    </div>
  )
}
import sleep from "@/lib/sleep";
import { getConcerts } from "@/lib/openai";

export default async function Page({ searchParams }) {
  const { searchterm } = await searchParams;

  const concerts = await getConcerts(searchterm);

  return (
    <div className="p-4">
      <div dangerouslySetInnerHTML={{ __html: concerts }} className="text-white text-lg" />
    </div>
  )
}
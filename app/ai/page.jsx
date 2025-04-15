import sleep from "@/lib/sleep";

export default async function Page({ searchParams }) {
  const { searchterm } = await searchParams;

  await sleep(15000);
  
  return (
    <div className="p-4">
    </div>
  )
}
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-4 rounded-xl border-2 border-orange-400 bg-orange-100 ">
        <h1 className="">Welcome</h1>
        <Button>
          Sumbit
        </Button>
      </div>
    </main>
  );
}

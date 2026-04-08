import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js!</h1>
      {/* <Button className="border">Click Me</Button> */}
       <Button variant="outline" size={"lg"}>Click Me</Button>
        <Button variant="secondary">Click Me</Button>
         <Button variant="default" className="secondary">Click Me</Button>
          <Button variant="destructive">Click Me</Button>
           <Button variant="link">Click Me</Button>
    </div>
  );
}

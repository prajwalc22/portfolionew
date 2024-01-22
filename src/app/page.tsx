import Navbar from "@/components/Navbar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <main className="flex w-full h-screen ">
      <div className="w-full">
        <Navbar />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>One</ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}

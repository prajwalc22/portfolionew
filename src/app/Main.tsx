import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Main() {
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel className="w-max-[300px] w-min-[200px]">One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>;
}

export default Main;

import { Tabs } from "@/components/ui/aceternity/tabs";

export function AceternityTabsPreview() {
  const tabs = [
    { title: "Product", value: "product", content: <p>Product Content</p> },
    { title: "Services", value: "services", content: <p>Services Content</p> },
    { title: "Playground", value: "playground", content: <p>Playground Content</p> },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

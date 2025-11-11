"use client";

import * as React from "react";
// import { Icons } from "@/components/icons";
// import { Button } from "@/components/ui/button";
// import { Link } from "next-view-transitions";
import { ProjectItemSchema } from "@/schema/item";

type ProjectViewerContext = {
  item: ProjectItemSchema;
};

const ProjectViewerContext = React.createContext<ProjectViewerContext | null>(
  null
);

function useProjectViewer() {
  const context = React.useContext(ProjectViewerContext);
  if (!context) {
    throw new Error(
      "useProjectViewer must be used within a ProjectViewerProvider."
    );
  }
  return context;
}

function ProjectViewerProvider({
  item,
  children,
}: Pick<ProjectViewerContext, "item"> & {
  children: React.ReactNode;
}) {
  return (
    <ProjectViewerContext.Provider
      value={{
        item,
      }}
    >
      <div
        id={item.name}
        className="flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-3 overflow-hidden md:flex-col"
      >
        {children}
      </div>
    </ProjectViewerContext.Provider>
  );
}

// function ProjectContent() {
//   return <div></div>;
// }

function RelatedProject() {
  const { item } = useProjectViewer();
  console.log("====================================");
  console.log(item);
  console.log("====================================");
  return <div>{item.name}</div>;
}

// function ProjectNavigation() {
//   const { item } = useProjectViewer();
//   return (
//     <div className="grid gap-4 md:grid-cols-2">
//       <div className={`${next ? "" : "md:col-span-2"}`}>
//         {previous ? (
//           <Button
//             variant="outline"
//             asChild
//             className="group h-auto w-full justify-start p-4 text-left"
//           >
//             <Link href={`/projects/${previous.slug}`}>
//               <div className="flex items-center gap-3">
//                 <Icons.arrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
//                 <div>
//                   <div className="text-xs text-muted-foreground">
//                     Previous Project
//                   </div>
//                   <div className="font-medium">{previous.title}</div>
//                 </div>
//               </div>
//             </Link>
//           </Button>
//         ) : (
//           <div className="h-16" />
//         )}
//       </div>

//       <div className={`${previous ? "" : "md:col-span-2"}`}>
//         {next ? (
//           <Button
//             variant="outline"
//             asChild
//             className="group h-auto w-full justify-end p-4 text-right"
//           >
//             <Link href={`/projects/${next.slug}`}>
//               <div className="flex items-center gap-3">
//                 <div>
//                   <div className="text-xs text-muted-foreground">
//                     Next Project
//                   </div>
//                   <div className="font-medium">{next.title}</div>
//                 </div>
//                 <Icons.arrowRight className="size-4 transition-transform group-hover:translate-x-1" />
//               </div>
//             </Link>
//           </Button>
//         ) : (
//           <div className="h-16" />
//         )}
//       </div>
//     </div>
//   );
// }

function ProjectViewer({ item, ...props }: Pick<ProjectViewerContext, "item">) {
  return (
    <ProjectViewerProvider item={item} {...props}>
      hello project content viewer
      <RelatedProject />
    </ProjectViewerProvider>
  );
}

export { ProjectViewer };

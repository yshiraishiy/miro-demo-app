import {Loader} from "lucide-react"

import {Skeleton} from "@/components/ui/skeleton"
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

export const Loading = () => {
  return (
      <main className="h-full w-full fixed top-0 left-0 bg-neutral-100 touch-none flex items-center justify-center">
        <Loader className="h-6 w-6 text-muted-foreground animate-spin"/>
        <Info.Skeleton />
        <Participants.Skeleton />
        <Toolbar.Skeleton />
      </main>
    );      
};

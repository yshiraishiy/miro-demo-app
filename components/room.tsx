"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export function Room({ children, roomId, fallback, }: RoomProps) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_lUAOntB6yq2U7XUCgKM6nSOBcTuLGgjMaF8wxRkJaOSTsGwI8lZxoqrxEzd14ReS"
      }
    >
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

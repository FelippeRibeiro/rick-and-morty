import React, { useCallback } from "react";

export default function Page({ params }: { params: { id: number } }) {
  const CaracterId = useCallback(() => params.id, [params.id]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {CaracterId()}
    </div>
  );
}

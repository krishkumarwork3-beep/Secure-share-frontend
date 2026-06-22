"use client";

import { Button } from "@workspace/ui/components/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
      const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
      setIsLoading(true);

      // Simulate a network request
      setTimeout(() => {
          setIsLoading(false);
      }, 2000);
  };
  return (
      <div className="flex justify-center items-center min-h-screen">
      <Button isLoading={isLoading} onClick={handleClick}>
        Click me
      </Button>
    </div>
  );
}
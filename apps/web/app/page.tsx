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
      <Button disabled={isLoading} onClick={handleClick}>
        {isLoading && <Loader2/>}
        Click me
      </Button>
  );
}
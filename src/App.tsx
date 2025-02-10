import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Click me</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Verify that you are human</DialogTitle>
        </DialogHeader>
        <div className="w-full flex justify-center p-4">
          {/* Cloudflare Turnstile widget */}
          <div
            className="cf-turnstile"
            data-sitekey="0x4AAAAAAA7SN9BgICU6k8R5"
            data-callback="handleCallback"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default App

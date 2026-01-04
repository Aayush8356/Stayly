import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">STAY.LY</h1>
            <p className="max-w-sm text-muted-foreground">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-medium">Become hotel Owner</h4>
            <Button size="sm" className="self-start">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

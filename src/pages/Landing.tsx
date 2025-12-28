import { Camera, Luggage, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Landing() {
  const gallary = [
    {
      Image: "",
      Title: "hotel-1",
    },
  ];
  return (
    <div className="m-4 w-full container">
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4 p-4 ">
        <div className="col-span-1 lg:col-span-1 p-4 g-4 flex flex-col justify-between h-full">
          <div className="lg:text-3xl text-xl font-semibold">
            Forget Busy Work, Start Next Vacation
          </div>
          <div>
            <p className="w-[80%]">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button size={"sm"} className="self-start">
              Show More
            </Button>
          </div>
          <div className="flex gap-4">
            <div className="stats">
              <Luggage className="mb-2" />
              <p>100 Users</p>
            </div>
            <div className="stats">
              <Camera className="mb-2" />
              <p>50 Treasure</p>
            </div>
            <div className="stats">
              <MapPin className="mb-2" />
              <p>10 City</p>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 p-4 lg:col-span-2">
          <img
            className="rounded-lg min-w-60 min-h-40"
            alt="hotel"
            src="https://assets.architecturaldigest.in/photos/60083e1151daf9662c1492c6/16:9/w_2560%2Cc_limit/The-Oberoi-Mumbai-feature-image-1366x768.jpg"
          />
        </div>
        <div className="lg:col-span-3 border bg-[#EAF1FF] p-3 rounded-full">
          <div className="flex justify-center">
            <form
              className="flex flex-wrap items-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("clicked");
              }}
            >
              <Input
                type="text"
                placeholder="Check Availability"
                className="h-10 w-48"
              />
              <Select>
                <SelectTrigger className="h-10 w-40">
                  <SelectValue placeholder="Persons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Person 1</SelectItem>
                  <SelectItem value="2">Person 2</SelectItem>
                  <SelectItem value="3">Person 3</SelectItem>
                </SelectContent>
              </Select>

              <Input type="text" placeholder="Location" className="h-10 w-48" />
              <Button type="submit" className="h-10">
                Search
              </Button>
            </form>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="flex w-full flex-wrap justify-center gap-2">
            {Array.from({ length: 10 }).map((_) => (
              <img
                className="rounded-lg max-w-60 max-h-40"
                alt="hotel"
                src="https://assets.architecturaldigest.in/photos/60083e1151daf9662c1492c6/16:9/w_2560%2Cc_limit/The-Oberoi-Mumbai-feature-image-1366x768.jpg"
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-3">Gallary</div>
        <div className="lg:col-span-3">Footer</div>
      </div>
    </div>
  );
}

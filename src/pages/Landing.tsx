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
import MenuCard from "@/components/MenuCard";
import { gallary, MostPickMenu } from "../assets/staticData";
import MostPick from "@/components/MostPick";
export default function Landing() {
  return (
    <div className="m-4 w-full container">
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4 p-4 ">
        <div className="col-span-1 lg:col-span-1 p-4 g-4 flex flex-col justify-between h-full">
          <div className="lg:text-3xl text-xl font-semibold">
            Forget Busy Work, Start Next Vacation
          </div>
          <div>
            <p className="w-[80%] mb-4">
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
          <h1 className="text-3xl font-semibold border-b-2 text-center border-slate-200">
            Most Picked
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
            {MostPickMenu.map((card, index) => (
              <MostPick
                key={index}
                imageURL={card.Image}
                className={"rounded-lg max-w-75 max-h-55"}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h1 className="text-3xl font-semibold border-b-2 text-center border-slate-200 ">
            Gallery
          </h1>
          <div className="flex w-full flex-wrap justify-center gap-2 mt-4">
            {gallary.map((card, index) => (
              <MenuCard
                imageURL={card.Image}
                title={`${card.Title}${index + 1}`}
                className={"rounded-lg max-w-65 max-h-40"}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 h-[10rem] m-4 p-2 border-t border-slate-200">
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex flex-col h-full">
              <h1 className="text-3xl font-semibold ">STAY.LY</h1>
              <p>We kaboom your beauty holiday instantly and memorable.</p>
            </div>
            <div className="h-full">
              <p>Become hotel Owner</p>
              <Button size={"sm"} className="btn btn-primary">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

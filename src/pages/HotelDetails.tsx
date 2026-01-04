import { useParams } from "react-router-dom";
import { gallary } from "../assets/staticData";
import { Button } from "@/components/ui/button";
export const HotelDetails = () => {
  const { id } = useParams();
  const hotel = gallary.find((item) => item.id === Number(id));
  return (
    <div className="container h-full mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Hotel {id}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:h-[70vh] h-[45vh] w-full overflow-hidden rounded-lg">
          <img
            src={hotel?.Image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:h-[70vh] h-[45vh] grid grid-rows-2 gap-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={hotel?.More[0] ? hotel?.More[0] : hotel?.Image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <img
              src={hotel?.More[1] ? hotel?.More[1] : hotel?.Image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="grid des-stat grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-2 m-2">
          <div className="left des w-max-[50%] bg-slate-50  flex flex-col">
            <h1 className="font-semibold text-xl">About this place</h1>
            <p className="leading-loose">
              Minimal techno is a minimalist subgenre of techno music. It is
              characterized by a stripped-down aesthetic that exploits the use
              of repetition and understated development. Minimal techno is
              thought to have been originally developed in the early 1990s by
              Detroit-based producers Robert Hood and Daniel Bell. Such trends
              saw the demise of the soul-infused techno that typified the
              original Detroit sound. Robert Hood has noted that he and Daniel
              Bell both realized something was missing from techno in the
              post-rave era.
            </p>
          </div>
          <div className="right pricing-stat bg-slate-50  rounded-lg p-4 flex flex-col items-center gap-2">
            <h3 className="text-lg font-medium border-2 rounded-md p-2">
              Start Booking
            </h3>
            <h1 className="text-2xl font-semibold mb-6">
              Rs.{Math.floor((Math.random() * (3000 - 1000)) / 5) * 5 + 1000}{" "}
              PER NIGHT
            </h1>
            <Button className="">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

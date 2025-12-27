import { Camera, Luggage, MapPin } from "lucide-react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Landing() {
  return (
    <div className="m-4 container overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4 p-4 ">
        <div className="lg:col-span-2 flex max-lg:flex-wrap justify-center gap-4 p-4">
          <div className=" flex flex-col gap-4">
            <div className="text-3xl font-semibold">
              Forget Busy Work,
              <br /> Start Next Vacation
            </div>
            <p>
              We provide what you need to enjoy <br />
              your holiday with family. Time to make <br /> another memorable
              moments.
            </p>
            <Button variant="primary">Show More</Button>
            <div className="flex gap-4">
              <div className="stats">
                <Luggage />
                <p>100 Users</p>
              </div>
              <div className="stats">
                <Camera />
                <p>50 Users</p>
              </div>
              <div className="stats">
                <MapPin />
                <p>10 City</p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className="rounded-lg w-min-230 h-min-160"
              alt="hotel"
              src="https://assets.architecturaldigest.in/photos/60083e1151daf9662c1492c6/16:9/w_2560%2Cc_limit/The-Oberoi-Mumbai-feature-image-1366x768.jpg"
            />
          </div>
        </div>
        <div className="lg:col-span-2 border bg-[#EAF1FF] p-2 rounded-full">
          <div className="flex justify-center">
            <Form
              className="flex gap-4"
              onSubmit={() => console.log("clicked")}
            >
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Check Avability" />
              </Form.Group>
              <Form.Group>
                <Form.Select aria-label="Default select example">
                  <option value="1">Person 1</option>
                  <option value="2">Person 2</option>
                  <option value="3">Person 3</option>
                </Form.Select>{" "}
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
              <Button variant="primary" type="submit" className="h-10">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="lg:col-span-2">Most Picked</div>
        <div className="lg:col-span-2">Gallary</div>
        <div className="lg:col-span-2">Footer</div>
      </div>
    </div>
  );
}

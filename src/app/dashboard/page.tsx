import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const hostedEvents = [
  {
    title: "Concert in the Park",
    location: "Central Park, New York",
    date: "January 1, 2024",
    time: "6:00 PM",
    image: "/placeholder.svg"
  },
  {
    title: "Art Gallery Opening",
    location: "Gallery District, Los Angeles",
    date: "February 15, 2024",
    time: "7:00 PM",
    image: "/placeholder.svg"
  },
  {
    title: "Tech Symposium",
    location: "Tech Hub, San Francisco",
    date: "March 10, 2024",
    time: "9:00 AM",
    image: "/placeholder.svg"
  },
  {
    title: "Food and Wine Festival",
    location: "Downtown, Chicago",
    date: "April 25, 2024",
    time: "12:00 PM",
    image: "/placeholder.svg"
  }
];

const registeredEvents = [
  {
    title: "Music Festival",
    location: "Central Park, New York",
    date: "June 15, 2024 - June 17, 2024",
    time: "All day",
    image: "/placeholder.svg"
  },
  {
    title: "Art Exhibit",
    location: "Gallery District, Los Angeles",
    date: "July 1, 2024 - August 15, 2024",
    time: "10:00 AM - 6:00 PM",
    image: "/placeholder.svg"
  },
  {
    title: "Tech Conference",
    location: "Convention Center, San Francisco",
    date: "September 10, 2024 - September 12, 2024",
    time: "9:00 AM - 5:00 PM",
    image: "/placeholder.svg"
  },
  {
    title: "Food Festival",
    location: "Waterfront Park, Seattle",
    date: "October 5, 2024 - October 7, 2024",
    time: "11:00 AM - 8:00 PM",
    image: "/placeholder.svg"
  }
];

export default function Component() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 justify-center">
      <div className="w-full max-w-4xl">
        <Tabs defaultValue="hosted events" className="w-full items-center ">
          <TabsList className="flex  border-b  shadow-md rounded-xl mt-6 md:h-12">
            <div className="flex flex-row gap-5">
            <TabsTrigger value="hosted events" className="py-2 px-4 text-sm font-semibold md:text-xl   rounded-t-lg bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] bg-clip-text text-transparent">Hosted Events</TabsTrigger>
            <TabsTrigger value="registered events" className="py-2 px-4 text-sm font-semibold md:text-xl  rounded-t-lg bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] bg-clip-text text-transparent">Registered Events</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="hosted events" className="p-4 ">
            <div className="flex flex-col gap-6">
              {hostedEvents.map((event) => (
                <Card key={event.title} className="w-full flex flex-col  sm:flex-row overflow-hidden border-purple-200 border-[3px] shadow-lg">
                  <div className="w-full sm:w-2/5 h-48 sm:h-auto ">
                    <Image
                      src={event.image}
                      alt="Event Image"
                      width={200}
                      height={100}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="w-px bg-purple-200 self-stretch mx-4 hidden sm:block " />
                  <div className="p-6 flex flex-col justify-center space-y-4 ">
                    <h2 className="text-2xl font-bold text-purple-500">{event.title}</h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>Date: {event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4" />
                      <span>Time: {event.time}</span>
                    </div>
                    
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="registered events" className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
              {registeredEvents.map((event) => (
                <div key={event.title} className="bg-background rounded-lg overflow-hidden shadow-lg  md:w-[200px] md:rounded-xl border-purple-200 border-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Image
                    src={event.image}
                    alt="Event Image"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-purple-400">{event.title}</h3>
                    <div className="flex items-center text-sm mb-2 text-black/70">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-black/70">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

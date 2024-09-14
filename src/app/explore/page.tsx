"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { FC } from "react"
import { useRouter } from "next/navigation"

const Explore = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const handleRedirect = () => {
    router.push('/display'); // Redirect to /display route
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
         <Image
          src="https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?w=1060&t=st=1726221487~exp=1726222087~hmac=8b91dd329c3f886c0a5c2d55c9949fa2dad7b15b2d06e53e48675aa7cc54f5b7"
          layout="fill"
          alt="Hero Image"
          className="absolute inset-0 h-full w-full object-cover object-center"
        /> 
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-6 px-4 text-center text-primary-foreground">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Explore Some <span className="bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] bg-clip-text text-transparent">Exciting Events</span>
          </h2>           
          <p className="max-w-3xl text-lg sm:text-xl text-gray-300">
            Find the best events in your area and plan your next adventure.
          </p>
          <form className="w-full max-w-md">
            <div className="flex rounded-md shadow-sm gap-3">
              <Input
                type="text"
                placeholder="Search events..."
                className="flex-1 rounded-l-md border-r-0 focus:ring-primary rounded-xl h-10 text-white"
              />
              <Button
                type="submit"
                className=" bg-white text-black font-semibold rounded-xl "
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Events Cards Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#f0f0f0]">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {eventsData.map((event) => (
            <Card key={event.id} className="shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer border-purple-200 hover:border-purple-300">
              <Image
                src={event.imageSrc}
                width={400}
                height={225}
                alt="Event Image"
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-xl font-semibold text-purple-400">{event.title}</h3>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] text-white"
                  onClick={handleRedirect} // Add the onClick event here
                >
                  {event.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Explore

// Icons
const CalendarIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

const MapPinIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// Sample Data
const eventsData = [
  {
    id: 1,
    title: "Music Festival",
    date: "June 1, 2023",
    location: "New York, NY",
    imageSrc: "/placeholder.svg",
    buttonText: "Get Tickets",
  },
  {
    id: 2,
    title: "Art Exhibit",
    date: "July 15, 2023",
    location: "Los Angeles, CA",
    imageSrc: "/placeholder.svg",
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Tech Conference",
    date: "September 1, 2023",
    location: "San Francisco, CA",
    imageSrc: "/placeholder.svg",
    buttonText: "Register",
  },
  // More event objects...
]

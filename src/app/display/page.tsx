import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Display() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full bg-muted">
        <div className="container grid gap-8 px-4 py-12 md:grid-cols-1 lg:grid-cols-[1fr_400px] md:gap-12 md:py-24 lg:gap-16 xl:py-32">
          <div className="flex flex-col items-start gap-4">
            {/* Image Section */}
            <Image
              src="/placeholder.svg"
              width="800"
              height="500"
              alt="Event"
              className="aspect-[16/9] w-full overflow-hidden rounded-xl object-cover"
            />
            {/* Event Title and Details */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-purple-400">
                Acme Inc. Annual Conference
              </h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5" />
                  <span>San Francisco, CA</span>
                </div>
                <Separator orientation="vertical" className="h-5 hidden md:block" />
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  <span>June 15, 2024</span>
                </div>
                <Separator orientation="vertical" className="h-5 hidden md:block" />
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <UsersIcon className="h-5 w-5" />
                <span>1,200 participants</span>
              </div>
            </div>
          </div>

          {/* About Event Section */}
          <Card className="p-6 md:p-8 border-purple-300 shadow-lg">
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-purple-400">About the Event</h2>
                  <Separator className="my-2" />
                </div>
                <div className="text-black/70">
                  <p>
                    Join us for the Acme Inc. Annual Conference, a must-attend event for industry leaders, innovators, and professionals.
                    This year’s conference will feature inspiring keynotes, informative workshops, and unparalleled networking opportunities.
                  </p>
                  <p>
                    Explore the latest trends, technologies, and best practices in your field, and connect with like-minded individuals who are shaping the future of their industries.
                  </p>
                  <p>
                    Register now to secure your spot and take advantage of early bird pricing. We look forward to seeing you in San Francisco!
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] text-white border-none rounded-lg hover:scale-105 transition-transform duration-300">Register Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

// SVG Icons for Event Details
function CalendarIcon(props: React.ComponentProps<"svg">) {
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
  );
}

function ClockIcon(props: React.ComponentProps<"svg">) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon(props: React.ComponentProps<"svg">) {
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
  );
}

function UsersIcon(props: React.ComponentProps<"svg">) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

import Image from "next/image"

export default function RegisterEvents() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        <div className="bg-background rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg"
            alt="Event Image"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Music Festival</h3>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>Central Park, New York</span>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>June 15, 2024 - June 17, 2024</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg"
            alt="Event Image"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Art Exhibit</h3>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>Gallery District, Los Angeles</span>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>July 1, 2024 - August 15, 2024</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg"
            alt="Event Image"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tech Conference</h3>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>Convention Center, San Francisco</span>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>September 10, 2024 - September 12, 2024</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg"
            alt="Event Image"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Food Festival</h3>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>Waterfront Park, Seattle</span>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>October 5, 2024 - October 7, 2024</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function CalendarIcon(props) {
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
  
  
  function MapPinIcon(props) {
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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>   
                <title>BhavyaMPatel | Contact Page</title>
                <meta name="description" content="Contact BhavyaMPatel | Bhavya Manishkumar Patel | BhvyaMPatel VIT | Surat | Developer"/>
                <link rel="canonical" href="https://bhavyapatel.vercel.app/contact" />
      </Helmet>

  
    <div className="p-4 rounded-md shadow-md space-y-8 m-4 font-thin">
      
      <div className="space-y-2">
        <h2 className="text-3xl">Contact Me</h2>
        <p className="text-gray-500 ">
          I'LL Happy to Connect With You ✨
        </p>
      </div>

      <div className="space-y-4">

        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-600 dark:text-gray-400">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-600 dark:text-gray-400">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-600 dark:text-gray-400">Message</Label>
          <Input
            id="message"
            defaultValue="Write here plz ..."
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
        </div>

      </div>
      <button className="bg-black text-white font-thin rounded-md p-3">Submit</button>
    </div>
    </>
  )
}
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>   
                <title>BhavyaMPatel | Contact Bhavya</title>
                <meta name="description" content="Contact BhavyaMPatel | Bhavya Manishkumar Patel | BhvyaMPatel VIT | Surat | Developer"/>
                <link rel="canonical" href="https://bhavyapatel.vercel.app/contact" />
      </Helmet>

  
    <div className="p-4 rounded-md shadow-md space-y-8 m-4 font-thin">
      
      <div className="space-y-2">
        <h2 className="text-3xl">Contact Me</h2>
        <p className="text-gray-500 ">
          I'll Happy to Connect With You ✨
          <br/>Linkedin - bhavyapatel94
        </p>
      </div>

      <div className="space-y-4">

      <form id="ContactForm" action="https://formsubmit.co/bhavyapatel4012@gmail.com" method="POST">
        
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-600 dark:text-gray-400">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            name="name"
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-600 dark:text-gray-400">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-600 dark:text-gray-400">Message</Label>
          <Input
            id="message"
            name="message"
            placeholder="Write your message"
            require
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
        </div>

        <button type="submit" className="bg-black text-white font-thin rounded-md p-3">Submit</button>
      
      </form>

      </div>
    </div>
    </>
  )
}
export default function Navbar() {
  return (
    <>
        <div className="ml-5 mr-5 flex justify-center items-center">
            <div className="m-5 p-3 rounded-xl border-solid border-2 border-gray-50 shadow-md shadow-blue-50 font-thin">
                <div className="flex justify-center space-x-6 cursor-pointer">
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Project</ul>
                    <ul>Skills</ul>
                    <ul>Contact</ul>
                </div>
            </div>
        </div>
    </>
  )
}

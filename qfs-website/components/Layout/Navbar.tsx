

export default function Navbar () {


    return (
       <div className="w-full fixed top-0 left-0 h-20 bg-red-500 ">

            {/* web and tablet nav */}

            <div>
                {/* logo div */}
                <div>
                    <h1 className="text-xl font-bold">QFS</h1>
                </div>

                <nav>
                    <ul>
                        <li>Features</li>
                        <li>Markets</li>
                        <li>About</li>
                        <li>Contact</li>
                  </ul>
                </nav>
            </div>
            
       </div>
    )
}
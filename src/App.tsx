import './App.css'
import nextjs from "./assets/nextjs-icon.svg";
import firebase from "./assets/firebase-icon.svg";
function App() {
  return (

    <>












      {/* nab section  */}
      <div className="navbar bg-base-100 shadow-sm block  sm:bg-amber-700">
        <div className="flex-1">
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 md:px-2">
            <li><a>Skills</a></li>
            <li><a>Project</a></li>
          </ul>
        </div>
      </div>

      <div className='text-center text-3xl'>
        <h1>
          My project
        </h1>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="card bg-base-100 w-96 shadow-sm m-10 cursor-pointer">
          {/* <div className="card bg-base-100 w-full max-w-md shadow-sm m-4 cursor-pointer"> */}

          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm m-10 cursor-pointer">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Choose-mvp</h2>
            <p>
              A web site to vote who is the nba Mvp for 2025 season
            </p>
            <details>
              <summary>Why I build this app?</summary>
              <ul>
                <li>To learn how to build a full stack app...</li>
                <li>To learn how to use nextjs</li>
              </ul>
            </details>
            <div className='flex flex-row items-center'>
              <img src={firebase} className='w-15 h-15' />

              <img src={nextjs} className='w-15 h-15' />
            </div>


            <div className="card-actions justify-end">
              <a href="https://choose-mvp.vercel.app/" target="_blank">
                <button className="btn btn-primary">   Show</button>
              </a>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default App

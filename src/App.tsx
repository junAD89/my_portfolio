import './App.css'

function App() {
  return (
    <>

      {/* nab section  */}
      <div className="navbar bg-base-100 shadow-sm">
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
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

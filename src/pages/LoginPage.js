export default function LoginPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="grid h-screen bg-blue-500 place-items-center">
        <div className="card w-96 bg-base-100 rounded-xl shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl text-blue-700">
              LoginPage
            </h2>

            <div className="form-control">
              <p>UserName</p>
              <label className="input-group mt-4">
                <input
                  type="text"
                  placeholder="enter your username"
                  className="input input-bordered w-full"
                />
              </label>
              <p className="mt-4">Password</p>
              <label className="input-group mt-4">
                <input
                  type="password"
                  placeholder="enter your password"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary rounded-full mt-4">login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

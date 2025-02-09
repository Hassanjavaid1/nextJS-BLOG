import { connect } from "../lib/Database";t6

async function page() {
  try {
    let isConnected = await connect();
    console.log("Connection success:", isConnected);
  } catch (err) {
    console.log("Connection failed:", err);
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <form action="" method="post">
        <h1 className="text-3xl text-yellow-400 font-semibold">
          Add New Post!
        </h1>
        <div className="flex items-start flex-col gap-3 mt-8">
          <label htmlFor="title" className="text-lg">
            Title *
          </label>
          <input
            type="text"
            name="title"
            placeholder="Post title..."
            className="bg-slate-100 p-4 text-black capitalize rounded-md w-1/2 outline-yellow-400"
            required
          />
          <label htmlFor="category" className="text-lg">
            Category *
          </label>
          <select
            name="category"
            className="bg-slate-100 p-4 text-black capitalize rounded-md w-1/2 outline-yellow-400"
          >
            <option value="webdev">Web Dev</option>
            <option value="ai">AI</option>
            <option value="coding">Coding</option>
            <option value="softwareDeveloper">Software Development</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="Image" className="text-lg">
            Image *
          </label>
          <input
            type="file"
            name="title"
            placeholder="Post title..."
            className="bg-slate-100 text-black p-3 rounded-md w-1/2 border-2 border-yellow-400"
            required
          />
          <label htmlFor="description" className="text-lg">
            Description *
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Post description..."
            rows={7}
            className="bg-slate-100 p-4 text-black rounded-md w-1/2 outline-yellow-400 resize-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black text-lg p-3 px-10 mt-6 rounded-md font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;

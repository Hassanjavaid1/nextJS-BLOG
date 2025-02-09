import Image from "next/image";
import blogImg from "@/public/blogImg.jpg";

function BlogCards() {
  return (
    <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-3xl font-semibold">Latest Trending Blogs.</h1>
      <section className="flex items-center justify-center flex-wrap gap-6 gap-y-12">
        <div className="card min-w-[32%] w-[32%] overflow-hidden">
          <Image
            src={blogImg}
            width={400}
            height={700}
            className="w-full object-cover border-2 border-yellow-400 rounded-sm transition-transform duration-200 overflow-hidden hover:scale-110"
            alt=""
          />

          <div className=" flex flex-col items-start gap-4 mt-6">
            <span className="text-sm font-semibold bg-yellow-400 text-black p-2 rounded-sm uppercase">
              Technology
            </span>
            <h1 className="text-lg font-semibold capitalize leading-normal">
              The ai revolutions is the next big thing in 2025
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              neque laborum nostrum, ut incidunt ipsum. Harum vero placeat
              ratione asperiores
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.png"
                height={40}
                width={70}
                className="rounded-full h-12 w-12 object-cover"
                alt=""
              />
              <div className="leading-6">
                <h4 className="font-semibold">Black Devil</h4>
                <span className="text-gray-400">01-02-2025-02:24PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card min-w-[32%] w-[32%] overflow-hidden">
          <Image
            src={blogImg}
            width={400}
            height={700}
            className="w-full object-cover border-2 border-yellow-400 rounded-sm transition-transform duration-200 overflow-hidden hover:scale-110"
            alt=""
          />

          <div className=" flex flex-col items-start gap-4 mt-6">
            <span className="text-sm font-semibold bg-yellow-400 text-black p-2 rounded-sm uppercase">
              Technology
            </span>
            <h1 className="text-lg font-semibold capitalize leading-normal">
              The ai revolutions is the next big thing in 2025
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              neque laborum nostrum, ut incidunt ipsum. Harum vero placeat
              ratione asperiores
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.png"
                height={40}
                width={70}
                className="rounded-full h-12 w-12 object-cover"
                alt=""
              />
              <div className="leading-6">
                <h4 className="font-semibold">Black Devil</h4>
                <span className="text-gray-400">01-02-2025-02:24PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card min-w-[32%] w-[32%] overflow-hidden">
          <Image
            src={blogImg}
            width={400}
            height={700}
            className="w-full object-cover border-2 border-yellow-400 rounded-sm transition-transform duration-200 overflow-hidden hover:scale-110"
            alt=""
          />

          <div className=" flex flex-col items-start gap-4 mt-6">
            <span className="text-sm font-semibold bg-yellow-400 text-black p-2 rounded-sm uppercase">
              Technology
            </span>
            <h1 className="text-lg font-semibold capitalize leading-normal">
              The ai revolutions is the next big thing in 2025
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              neque laborum nostrum, ut incidunt ipsum. Harum vero placeat
              ratione asperiores
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.png"
                height={40}
                width={70}
                className="rounded-full h-12 w-12 object-cover"
                alt=""
              />
              <div className="leading-6">
                <h4 className="font-semibold">Black Devil</h4>
                <span className="text-gray-400">01-02-2025-02:24PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card min-w-[32%] w-[32%] overflow-hidden">
          <Image
            src={blogImg}
            width={400}
            height={700}
            className="w-full object-cover border-2 border-yellow-400 rounded-sm transition-transform duration-200 overflow-hidden hover:scale-110"
            alt=""
          />

          <div className=" flex flex-col items-start gap-4 mt-6">
            <span className="text-sm font-semibold bg-yellow-400 text-black p-2 rounded-sm uppercase">
              Technology
            </span>
            <h1 className="text-lg font-semibold capitalize leading-normal">
              The ai revolutions is the next big thing in 2025
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              neque laborum nostrum, ut incidunt ipsum. Harum vero placeat
              ratione asperiores
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.png"
                height={40}
                width={70}
                className="rounded-full h-12 w-12 object-cover"
                alt=""
              />
              <div className="leading-6">
                <h4 className="font-semibold">Black Devil</h4>
                <span className="text-gray-400">01-02-2025-02:24PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card min-w-[32%] w-[32%] overflow-hidden">
          <Image
            src={blogImg}
            width={400}
            height={700}
            className="w-full object-cover border-2 border-yellow-400 rounded-sm transition-transform duration-200 overflow-hidden hover:scale-110"
            alt=""
          />

          <div className=" flex flex-col items-start gap-4 mt-6">
            <span className="text-sm font-semibold bg-yellow-400 text-black p-2 rounded-sm uppercase">
              Technology
            </span>
            <h1 className="text-lg font-semibold capitalize leading-normal">
              The ai revolutions is the next big thing in 2025
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              neque laborum nostrum, ut incidunt ipsum. Harum vero placeat
              ratione asperiores
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.png"
                height={40}
                width={70}
                className="rounded-full h-12 w-12 object-cover"
                alt=""
              />
              <div className="leading-6">
                <h4 className="font-semibold">Black Devil</h4>
                <span className="text-gray-400">01-02-2025-02:24PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card min-w-[32%] w-[32%] overflow-hidden">
          <Image
            src={blogImg}
            width={400}
            height={700}
            className="w-full object-cover border-2 border-yellow-400 rounded-sm transition-transform duration-200 overflow-hidden hover:scale-110"
            alt=""
          />

          <div className=" flex flex-col items-start gap-4 mt-6">
            <span className="text-sm font-semibold bg-yellow-400 text-black p-2 rounded-sm uppercase">
              Technology
            </span>
            <h1 className="text-lg font-semibold capitalize leading-normal">
              The ai revolutions is the next big thing in 2025
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              neque laborum nostrum, ut incidunt ipsum. Harum vero placeat
              ratione asperiores
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.png"
                height={40}
                width={70}
                className="rounded-full h-12 w-12 object-cover"
                alt=""
              />
              <div className="leading-6">
                <h4 className="font-semibold">Black Devil</h4>
                <span className="text-gray-400">01-02-2025-02:24PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogCards;

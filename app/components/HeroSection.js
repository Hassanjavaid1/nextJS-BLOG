import Image from "next/image";

function HeroSection() {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <section className="flex items-center justify-center gap-6">
          <div className="w-1/2 overflow-hidden rounded-lg border-2 border-yellow-400">
            <Image
              src="/blogImg.jpg"
              width={600}
              height={500}
              className="w-full object-cover transition-transform duration-200 overflow-hidden hover:scale-125"
              alt=""
            />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-7">
            <span className="bg-yellow-400 text-black p-2 font-semibold rounded-sm uppercase">
              Technology
            </span>
            <h1 className="text-4xl capitalize leading-normal">
              The ai revolutions is the next big thing in 2025
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              neque laborum nostrum, ut incidunt ipsum. Harum vero placeat
              ratione asperiores.lorem10 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ad, laudantium?
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.png"
                height={40}
                width={70}
                className="rounded-full h-16 w-16 object-cover"
                alt=""
              />
              <div className="leading-6">
                <h4 className="font-semibold">Black Devil</h4>
                <span className="text-gray-400">01-02-2025-02:24PM</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;

import Image from "next/image";
const avatars: {
  alt: string;
  src: string;
}[] = [
  {
    alt: "User avatar",
    // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
    src: "",
  },
  {
    alt: "User avatar",
    src: "",
  },
  {
    alt: "User avatar",
    src: "",
  },
  {
    alt: "User avatar",
    src: "",
  },
  {
    alt: "User avatar",
    src: "",
  },
];

const TestimonialsAvatars = ({ priority }: { priority?: boolean }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 max-sm:mb-2 md:flex-row md:items-start">
      {/* AVATARS */}
      <div className={`flex justify-start -space-x-4`}>
        {avatars.map((image, i) => (
          <div className="h-12 w-12 rounded-full" key={i}>
            <Image
              className="inline-block h-10 w-10 rounded-full bg-gray-200 object-cover ring-2 ring-white"
              src={image.src}
              alt={image.alt}
              priority={priority}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>

      {/* RATING */}
      <div className="flex flex-col items-center justify-center gap-1 md:items-start">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-yellow-500"
              key={i}
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        <div className="text-sm text-slate-500">
          <span>loved by teachers worldwide</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAvatars;

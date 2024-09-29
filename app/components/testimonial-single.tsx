export default function TestimonialSingle({
  testimonial,
}: {
  testimonial: {
    name: string;
    content: React.ReactNode;
    schoolName: string;
    image: string;
  };
}) {
  const image = testimonial.image;
  return (
    <div className="mx-auto mt-16 max-w-md space-y-4 md:mt-24 md:space-y-6">
      <div className="rating !flex justify-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <div className="mx-auto max-w-md space-y-2 text-center text-base leading-relaxed text-slate-800">
        {testimonial.content}
      </div>
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <img
          alt="Philipp Keller feedback for ZenVoice"
          loading="lazy"
          width="48"
          height="48"
          decoding="async"
          data-nimg="1"
          className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
          style={{ color: "transparent" }}
          src={image}
        />
        <div>
          <p className="font-semibold text-slate-800">{testimonial.name}</p>
          <p className="text-sm text-slate-600">{testimonial.schoolName}</p>
        </div>
      </div>
    </div>
  );
}

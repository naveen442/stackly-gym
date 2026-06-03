import img1 from "../assets/images/Blog_images(1).png";
import img2 from "../assets/images/Blog_images(2).png";
import img3 from "../assets/images/Blog_images(3).png";
import img4 from "../assets/images/Blog_images.png";

const posts = [
  {
    id: 1,
    image: img1,
    date: "22 NOV",
    title: "Build yourself in hours of exercise everyday for 6 months.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 2,
    image: img3,
    date: "22 NOV",
    title: "Fat burning cardio workout to keep yourself in shape",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 3,
    image: img2,
    date: "22 NOV",
    title: "Crossfit Guide for beginners: 10 things you must know",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

function BlogCard({ post }) {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ height: "270px" }}
        />
        <div
          className="absolute top-4 right-0 text-white text-xs font-bold tracking-widest uppercase px-3 py-2"
          style={{ backgroundColor: "#e8192c" }}
        >
          {post.date}
        </div>
      </div>

      <div className="pt-5">
        <h3 className="text-gray-900 font-bold text-base leading-snug mb-3">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="text-center mb-12">
        <h1
          className="text-4xl sm:text-5xl font-extrabold uppercase tracking-widest mb-3"
          style={{ color: "#e8192c", letterSpacing: "0.15em" }}
        >
          BLOG
        </h1>
        <p className="text-xs font-bold tracking-widest uppercase text-gray-800">
          READ TO STAY IN SHAPE
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <img
        src={img4}
        alt="Blog Image"
        className="w-full object-cover mt-8"
        // style={{ height: "300px" }}
      />  
    </div>
  );
}

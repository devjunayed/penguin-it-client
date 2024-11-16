import HomePage from "@/components/UI/pages/home/HomePage";

export default function Home() {
  // Generate 100-150 random stars
  const stars = Array.from({ length: Math.floor(Math.random() * 51) + 100 }, () => ({
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 2 + 1 + "px",
    delay: Math.random() * 2 + "s",
  }));
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full shadow-glow animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Star */}
      <div
        className="absolute bg-white rounded-full w-2 h-2 animate-moveOnce shadow-glow"
        style={{
          animationDuration: "7s",  // Slow movement duration
          animationIterationCount: "infinite",  // Infinite loop
        }}
      ></div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full text-white text-3xl">
        <HomePage />
      </div>
    </div>
  );
}

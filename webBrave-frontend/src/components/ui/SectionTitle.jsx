const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {/* Small Badge / Tagline */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <h5 className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
          {title}
        </h5>
      </div>

      {/* Main Subtitle / Main Heading */}
      {subtitle && (
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Subtle Glow Line Under Title */}
      <div className="mt-4 flex items-center justify-center gap-1">
        <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-amber-400" />
        <div className="w-2 h-[2px] bg-amber-400 rounded-full" />
        <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-amber-400" />
      </div>
    </div>
  );
};

export default SectionTitle;
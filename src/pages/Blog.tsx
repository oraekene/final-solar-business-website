export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mb-20">
        <span className="text-primary font-heading font-bold uppercase tracking-widest text-xs mb-4 block">The SolarOne Knowledge Base</span>
        <h1 className="text-5xl font-heading font-bold mb-6">Everything we know about solar in Nigeria — <span className="text-primary italic">written honestly.</span></h1>
        <p className="text-white/60 text-lg">No sponsored posts. No affiliate rankings. Just real testing and learning what the Nigerian solar market gets wrong.</p>
      </div>

      {/* Featured Article Mockup */}
      <div className="bg-white rounded-subtle overflow-hidden flex flex-col md:flex-row lux-border mb-20">
        <div className="bg-neutral md:w-1/2 min-h-[300px] flex items-center justify-center p-12">
           <h2 className="text-4xl font-heading font-bold text-primary text-center">The Inverter That Destroyed My Laptop.</h2>
        </div>
        <div className="p-12 md:w-1/2 flex flex-col justify-center bg-white text-neutral">
          <span className="bg-primary text-neutral text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-tighter">Must Read</span>
          <h3 className="text-3xl font-heading font-bold mb-4">The Inverter That Destroyed My Laptop. Three Times.</h3>
          <p className="text-neutral/70 mb-8 leading-relaxed">For three years I used a modified sine wave inverter. This is the story I wish existed when I started.</p>
          <div className="flex items-center justify-between mt-auto">
             <span className="text-[10px] uppercase font-bold text-neutral/40">8 min read • By Kene</span>
             <button className="text-primary font-bold hover:underline">Read full story →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

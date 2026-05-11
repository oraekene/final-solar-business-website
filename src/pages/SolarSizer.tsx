export default function SolarSizer() {
  return (
    <div className="w-full h-[calc(100vh-96px)] bg-neutral flex flex-col">
      <div className="p-6 border-b border-white/10 bg-neutral/50 backdrop-blur-md">
        <h1 className="text-2xl font-heading font-bold">Solar Sizer Pro Engine</h1>
        <p className="text-sm text-white/40">Build your custom power profile and see what setup fits your life.</p>
      </div>
      
      {/* 
        This is a placeholder for the full-height iframe embed as per requirements.
        In a real scenario, this would point to the deployed SolarSizer Pro instance.
      */}
      <div className="flex-grow relative bg-neutral">
        <iframe 
          src="https://solar-sizer-pro.example.com/?compact=true"
          className="absolute inset-0 w-full h-full border-none"
          title="SolarSizer Pro"
        />
        
        {/* Fallback / Loading State for Iframe */}
        <div className="absolute inset-0 flex items-center justify-center bg-neutral/80 z-[-1]">
          <div className="text-center space-y-4">
             <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
             <p className="font-heading text-white/40 uppercase tracking-widest text-xs">Loading Calculator Engine</p>
          </div>
        </div>
      </div>
    </div>
  );
}

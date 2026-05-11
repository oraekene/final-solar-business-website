import { Wallet, Fuel, Construction, PackageSearch } from 'lucide-react';

const problems = [
  {
    title: 'Solar too cost',
    icon: Wallet,
    body: "Real solar power shouldn't cost ₦600,000+ and three weeks of your life waiting for an installer. SolarOne starts at ₦185,000 — full system, panel included, zero installation fee. No installer markup. No middleman."
  },
  {
    title: 'The Generator Trap',
    icon: Fuel,
    body: "You're paying every month to run a machine that was supposed to be temporary. Fuel, servicing, noise, fumes — and it still cuts off the moment you finally get into a flow state."
  },
  {
    title: 'The Installer Problem',
    icon: Construction,
    body: "You got quoted ₦350,000 for a solar setup. The installer used modified sine wave. It's quietly destroying your laptop, your charger, and your WiFi — and nobody told you."
  },
  {
    title: 'The Sealed Box Problem',
    icon: PackageSearch,
    body: "You bought a portable power station. Now you need more capacity. You can't expand it — so you're looking at buying an entirely new unit that costs more than your first one."
  }
];

export default function Problem() {
  return (
    <section className="py-24 bg-surface-elevated text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Sound familiar?</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight tracking-tight">
            NEPA took the light again. <br />
            Your generator just drank ₦8,000 in fuel. <br />
            <span className="text-white opacity-40 italic">And your laptop is at 4%.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div key={problem.title} className="p-8 border border-white/5 rounded-subtle bg-neutral flex flex-col items-start gap-8 group hover:border-primary/30 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center bg-surface-elevated lux-border rounded-subtle text-primary group-hover:bg-primary group-hover:text-neutral transition-all">
                <problem.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-heading font-bold tracking-tight">{problem.title}</h3>
                <p className="text-xs leading-relaxed text-white/40 group-hover:text-white/70 transition-colors uppercase font-bold tracking-widest">{problem.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary italic">There has to be a better way to power your hustle. And there is.</p>
        </div>
      </div>
    </section>
  );
}

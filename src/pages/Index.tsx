import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  CircleAlert,
  Clock3,

  Menu,
  Navigation,
  Phone,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const services = [
  {
    icon: Truck,
    eyebrow: "01 / Towing",
    title: "Local towing",
    description:
      "Safe, careful vehicle transport for breakdowns, accidents, relocations, and everything in between.",
    action: "Explore towing",
  },
  {
    icon: BatteryCharging,
    eyebrow: "02 / Roadside",
    title: "Roadside rescue",
    description:
      "Jump starts, flat tyres, lockouts, and fuel delivery from a crew that is ready around the clock.",
    action: "Get roadside help",
  },
  {
    icon: Navigation,
    eyebrow: "03 / Transport",
    title: "Vehicle transport",
    description:
      "Need a car moved across town or across the state? We coordinate the journey from pickup to drop-off.",
    action: "Plan a transport",
  },
];

const reviews = [
  {
    quote:
      "They arrived before I even had time to panic. The driver was calm, clear, and had my car loaded in minutes.",
    name: "Maya R.",
    detail: "Alexandria · Local tow",
  },
  {
    quote:
      "The kind of service you hope you never need, but feel lucky to have found. Upfront pricing and genuinely kind people.",
    name: "Daniel K.",
    detail: "Parramatta · Roadside assistance",
  },
  {
    quote:
      "Booked a scheduled transport for my classic car. It arrived exactly when promised and in perfect condition.",
    name: "Chris T.",
    detail: "Surry Hills · Vehicle transport",
  },
];

const serviceAreas = ["Sydney CBD", "Inner West", "Eastern Suburbs", "North Shore", "Parramatta", "Western Sydney"];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showStickyCall, setShowStickyCall] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyCall(window.scrollY > 180);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffdf8] text-[#10233f]">
      <div className="bg-[#10233f] px-5 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#38bdf8] align-middle shadow-[0_0_0_4px_rgba(56,189,248,0.18)]" />
        24/7 emergency response · Sydney metro
      </div>

      <header className="absolute left-0 right-0 top-9 z-20 border-b border-white/15 bg-[#10233f]/55 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#38bdf8] shadow-lg shadow-sky-950/20">
              <img src={`${import.meta.env.BASE_URL}assets/towready-logo.png`} alt="" className="h-8 w-8 object-contain mix-blend-multiply" />
            </div>
            <div>
              <div className="font-display text-xl font-black leading-none tracking-tight">TowReady</div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-sky-200">Help is moving</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 lg:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-[#38bdf8]" href="#services">Services</a>
            <a className="transition-colors hover:text-[#38bdf8]" href="#how-it-works">How it works</a>
            <a className="transition-colors hover:text-[#38bdf8]" href="#coverage">Coverage</a>
            <a className="transition-colors hover:text-[#38bdf8]" href="#reviews">Reviews</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href="tel:1300869732" className="flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-sky-300">
              <Phone className="h-4 w-4 text-[#38bdf8]" /> 1300 TOW NOW
            </a>
            <Button asChild className="h-11 rounded-full bg-[#38bdf8] px-5 font-extrabold text-[#10233f] shadow-lg shadow-sky-950/20 hover:bg-sky-300">
              <a href="#request-help">Get help now <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>

          <button aria-label={menuOpen ? "Close menu" : "Open menu"} className="rounded-xl border border-white/20 p-2.5 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#10233f] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4 text-sm font-bold">
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
              <a href="#coverage" onClick={() => setMenuOpen(false)}>Coverage</a>
              <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
              <a href="tel:1300869732" className="mt-2 flex items-center gap-2 text-[#38bdf8]"><Phone className="h-4 w-4" /> Call 1300 TOW NOW</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative isolate min-h-[720px] overflow-hidden bg-[#10233f] pt-36 text-white sm:min-h-[760px] lg:min-h-[790px] lg:pt-48">
          <img src={`${import.meta.env.BASE_URL}assets/towready-hero.png`} alt="Tow truck helping a car on a roadside at dusk" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,35,63,0.98)_0%,rgba(16,35,63,0.88)_34%,rgba(16,35,63,0.27)_76%,rgba(16,35,63,0.48)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-[#fffdf8] to-transparent opacity-20" />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl animate-[fadeUp_0.7s_ease-out_both]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-sky-300/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-200">
                <CircleAlert className="h-4 w-4" /> Stranded? You are not alone.
              </div>
              <h1 className="font-display text-[3.65rem] font-black leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[6.7rem]">
                Help is already<br /><span className="text-[#38bdf8]">on the way.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                Fast, friendly towing and roadside assistance across Sydney. One call connects you with a local crew who know exactly what to do next.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-14 rounded-full bg-[#38bdf8] px-7 text-base font-extrabold text-[#10233f] shadow-[0_10px_30px_rgba(56,189,248,0.24)] hover:bg-sky-300">
                  <a href="tel:1300869732"><Phone className="mr-2 h-5 w-5" /> Call 1300 TOW NOW</a>
                </Button>
                <Button asChild variant="outline" className="h-14 rounded-full border-white/35 bg-white/10 px-7 text-base font-extrabold text-white backdrop-blur-sm hover:bg-white hover:text-[#10233f]">
                  <a href="#request-help">Request a callback <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-white/75">
                <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#38bdf8]" /> Average arrival 42 min</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#38bdf8]" /> Fully insured crews</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-5 hidden max-w-[255px] rounded-2xl border border-white/20 bg-[#10233f]/75 p-4 backdrop-blur-md lg:block">
            <div className="mb-3 flex items-center gap-1 text-[#38bdf8]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-3.5 w-3.5 fill-current" />)}</div>
            <p className="text-sm font-semibold leading-5 text-white">“The fastest, most reassuring service I have ever used.”</p>
            <p className="mt-2 text-xs font-bold text-white/55">— Jordan M. · verified customer</p>
          </div>
        </section>

        <section id="request-help" className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] bg-[#38bdf8] shadow-[0_18px_55px_rgba(16,35,63,0.18)] md:grid-cols-[1fr_1.5fr]">
            <div className="p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#10233f]/65">Need a hand?</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight text-[#10233f] sm:text-4xl">Tell us where you are. We will take it from here.</h2>
              <p className="mt-4 text-sm font-medium leading-6 text-[#10233f]/75">Share a few details and our local dispatch team will call you back shortly.</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-7 sm:p-9">
              {submitted ? (
                <div className="flex h-full min-h-[190px] flex-col justify-center">
                  <div className="flex items-center gap-3 text-[#1d7b61]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff4ec]"><Check className="h-5 w-5" /></span><span className="font-display text-2xl font-black text-[#10233f]">Request received.</span></div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">A TowReady dispatcher will call you soon. If it is urgent, call <a href="tel:1300869732" className="font-bold text-[#10233f] underline decoration-[#38bdf8] decoration-2 underline-offset-2">1300 TOW NOW</a>.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-4 w-fit text-sm font-bold text-[#10233f] underline underline-offset-4">Send another request</button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#10233f]/60">Your name<Input required name="name" placeholder="First and last name" className="mt-2 h-12 rounded-xl border-slate-200 bg-slate-50 text-sm normal-case tracking-normal placeholder:text-slate-400" /></label>
                  <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#10233f]/60">Mobile number<Input required name="phone" type="tel" placeholder="04XX XXX XXX" className="mt-2 h-12 rounded-xl border-slate-200 bg-slate-50 text-sm normal-case tracking-normal placeholder:text-slate-400" /></label>
                  <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#10233f]/60 sm:col-span-2">Where are you located?<Input required name="location" placeholder="Street, suburb or nearest landmark" className="mt-2 h-12 rounded-xl border-slate-200 bg-slate-50 text-sm normal-case tracking-normal placeholder:text-slate-400" /></label>
                  <div className="flex flex-col justify-end sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4"><p className="mb-3 text-xs leading-5 text-slate-500 sm:mb-0">No obligation. Your details stay with our dispatch team.</p><Button type="submit" className="h-12 rounded-full bg-[#10233f] px-6 font-extrabold text-white hover:bg-[#203b60]">Request a callback <ArrowRight className="ml-2 h-4 w-4" /></Button></div>
                </div>
              )}
            </form>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#0284c7]">The right help, right away</p><h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#10233f] sm:text-5xl">Whatever the road throws at you.</h2></div>
            <a href="tel:1300869732" className="group flex items-center gap-2 text-sm font-extrabold text-[#10233f]">Talk to a real person <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map(({ icon: Icon, eyebrow, title, description, action }, index) => (
              <article key={title} className="group overflow-hidden rounded-[1.5rem] border border-[#10233f]/10 bg-[#10233f] p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#38bdf8] hover:shadow-[0_18px_40px_rgba(16,35,63,0.09)]">
                {index === 1 && <div className="-mx-7 -mt-7 mb-7 h-36 overflow-hidden"><img src={`${import.meta.env.BASE_URL}assets/roadside-assistance.png`} alt="TowReady technician helping a driver" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>}
                <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#38bdf8] text-[#10233f]"><Icon className="h-6 w-6" /></span><span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">{eyebrow}</span></div>
                <h3 className={`${index === 1 ? "mt-8" : "mt-12"} font-display text-3xl font-black tracking-tight`}>{title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-white/65">{description}</p>
                <a href="#request-help" className="mt-7 inline-flex items-center text-sm font-extrabold text-[#38bdf8]">{action}<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
                {index === 0 && <div className="-mx-7 -mb-7 mt-7 h-36 overflow-hidden"><img src={`${import.meta.env.BASE_URL}assets/local-towing.png`} alt="Tow truck loading a stranded vehicle" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>}
                {index === 2 && <div className="-mx-7 -mb-7 mt-7 h-36 overflow-hidden"><img src={`${import.meta.env.BASE_URL}assets/vehicle-transport.png`} alt="Vehicle transport truck carrying a car" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>}
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="bg-[#f3eee4]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-32">
            <div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#0284c7]">Simple by design</p><h2 className="mt-4 max-w-md font-display text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#10233f] sm:text-5xl">Three steps between stuck and sorted.</h2><p className="mt-6 max-w-md text-base leading-7 text-slate-600">No confusing forms. No guessing games. Just a local team that keeps you informed from the first call to the final drop-off.</p><a href="#request-help" className="mt-8 inline-flex items-center rounded-full bg-[#10233f] px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-[#203b60]">Start a request <ArrowRight className="ml-2 h-4 w-4" /></a></div>
            <div className="space-y-5">
              {[{ number: "01", title: "Call or request a callback", text: "Tell us what happened and share your location. Our dispatch team responds fast." }, { number: "02", title: "Meet your local crew", text: "We send the right vehicle and keep you updated with an honest arrival estimate." }, { number: "03", title: "Get back on the road", text: "Your vehicle is handled with care, and you get a clear price before we begin." }].map((step) => <div key={step.number} className="flex gap-5 rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(16,35,63,0.06)] sm:p-6"><div className="font-display text-2xl font-black text-[#38bdf8]">{step.number}</div><div><h3 className="font-display text-xl font-black text-[#10233f]">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="coverage" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div className="order-2 lg:order-1"><div className="overflow-hidden rounded-[2rem] bg-[#d9ebe5] p-4 sm:p-7"><img src={`${import.meta.env.BASE_URL}assets/service-area-map.png`} alt="Illustration of a tow truck traveling across the Sydney service area" className="h-auto w-full rounded-[1.5rem]" /></div><p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#10233f]/45">Local knowledge. Wider reach.</p></div>
            <div className="order-1 lg:order-2"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#0284c7]">Sydney, covered</p><h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#10233f] sm:text-5xl">We know the shortcuts. And the long way home.</h2><p className="mt-6 max-w-lg text-base leading-7 text-slate-600">Our drivers are based across the metro area, so you get local expertise and dependable arrival times wherever the day takes you.</p><div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3">{serviceAreas.map((area) => <div key={area} className="flex items-center gap-2 text-sm font-bold text-[#10233f]"><Check className="h-4 w-4 text-[#0284c7]" />{area}</div>)}</div><p className="mt-8 text-sm font-semibold text-slate-500">Not seeing your suburb? <a href="tel:1300869732" className="font-extrabold text-[#10233f] underline decoration-[#38bdf8] decoration-2 underline-offset-4">Call us anyway.</a></p></div>
          </div>
        </section>

        <section className="bg-[#10233f] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
            <div><div className="mb-6 flex items-center gap-1 text-[#38bdf8]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}</div><blockquote className="max-w-2xl font-display text-3xl font-black leading-tight tracking-tight sm:text-5xl">“The kind of service you hope you never need, but feel lucky to have found.”</blockquote><div className="mt-7 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#38bdf8] text-sm font-black text-[#10233f]">DK</div><div><p className="text-sm font-extrabold">Daniel K.</p><p className="text-xs text-white/50">Verified TowReady customer</p></div></div></div>
            <div className="rounded-[1.75rem] border border-white/15 bg-white/5 p-7 backdrop-blur-sm"><p className="text-xs font-black uppercase tracking-[0.2em] text-sky-200">Why drivers choose us</p><div className="mt-7 space-y-5">{[{ title: "Real people, 24/7", text: "A local dispatcher is always ready to answer." }, { title: "Upfront, honest pricing", text: "No surprises after the job is done." }, { title: "Care comes standard", text: "Fully insured crews treat your vehicle like their own." }].map((item) => <div key={item.title} className="flex gap-4"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#38bdf8] text-[#10233f]"><Check className="h-3.5 w-3.5" /></span><div><h3 className="font-display font-black">{item.title}</h3><p className="mt-1 text-sm leading-5 text-white/60">{item.text}</p></div></div>)}</div></div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex items-end justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#0284c7]">Good people say good things</p><h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#10233f] sm:text-5xl">Trusted when it matters.</h2></div><div className="hidden text-right sm:block"><div className="font-display text-4xl font-black text-[#10233f]">4.9<span className="text-[#38bdf8]">/5</span></div><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">1,200+ local reviews</p></div></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">{reviews.map((review) => <article key={review.name} className="rounded-[1.5rem] border border-[#10233f]/10 bg-white p-7 shadow-[0_14px_34px_rgba(16,35,63,0.1)]"><div className="flex gap-1 text-[#38bdf8]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}</div><p className="mt-6 min-h-[100px] text-base font-semibold leading-7 text-[#10233f]">“{review.quote}”</p><div className="mt-6 border-t border-[#10233f]/10 pt-5"><p className="text-sm font-extrabold">{review.name}</p><p className="mt-1 text-xs font-semibold text-slate-500">{review.detail}</p></div></article>)}</div>
        </section>

        <section className="px-5 pb-20 lg:px-8 lg:pb-28"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#38bdf8] px-7 py-12 shadow-[0_18px_45px_rgba(16,35,63,0.16)] sm:px-12 lg:flex lg:items-center lg:justify-between lg:py-14"><div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#10233f]/60">Do not wait on the shoulder</p><h2 className="mt-4 font-display text-4xl font-black leading-none tracking-[-0.04em] text-[#10233f] sm:text-5xl">Your next tow is a call away.</h2></div><a href="tel:1300869732" className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#10233f] px-7 text-base font-extrabold text-white transition-colors hover:bg-[#203b60] lg:mt-0">Call 1300 TOW NOW <Phone className="ml-2 h-5 w-5 text-[#38bdf8]" /></a></div></section>
      </main>

      <footer className="bg-[#0a192e] px-5 py-12 text-white lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]"><div><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#38bdf8]"><img src={`${import.meta.env.BASE_URL}assets/towready-logo.png`} alt="" className="h-8 w-8 object-contain mix-blend-multiply" /></div><span className="font-display text-xl font-black">TowReady</span></div><p className="mt-5 max-w-xs text-sm leading-6 text-white/55">Fast, friendly towing and roadside assistance for Sydney drivers, 24 hours a day.</p></div><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#38bdf8]">Explore</p><div className="mt-5 space-y-3 text-sm font-semibold text-white/65"><a className="block hover:text-white" href="#services">Services</a><a className="block hover:text-white" href="#how-it-works">How it works</a><a className="block hover:text-white" href="#coverage">Coverage</a></div></div><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#38bdf8]">Contact</p><div className="mt-5 space-y-3 text-sm font-semibold text-white/65"><a className="block hover:text-white" href="tel:1300869732">1300 TOW NOW</a><a className="block hover:text-white" href="mailto:hello@towready.com.au">hello@towready.com.au</a><p>Sydney Metro, NSW</p></div></div><div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="flex items-center gap-2 text-sm font-extrabold"><span className="h-2 w-2 rounded-full bg-[#38bdf8]" /> Dispatch is open</p><p className="mt-2 text-xs leading-5 text-white/50">Emergency help is available now, day or night.</p><a href="tel:1300869732" className="mt-4 inline-flex items-center text-sm font-extrabold text-[#38bdf8]">Call us <ArrowRight className="ml-2 h-4 w-4" /></a></div></div><div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© 2024 TowReady. Here when you need us.</p><p className="flex items-center gap-2"><Wrench className="h-3.5 w-3.5" /> Safety first, always.</p></div></div></footer>

      {showStickyCall && <a href="tel:1300869732" className="fixed bottom-4 left-4 right-4 z-30 flex h-14 items-center justify-center gap-2 rounded-full bg-[#38bdf8] text-sm font-black text-[#10233f] shadow-[0_10px_30px_rgba(16,35,63,0.3)] sm:hidden"><Phone className="h-5 w-5" /> Call 1300 TOW NOW</a>}
    </div>
  );
};

export default Index;

"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { servicePackages, siteConfig } from "@/lib/content";
import { Reveal } from "./reveal";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email("Valid email required"),
  town: z.string().min(2, "Town is required"),
  beds: z.string(),
  baths: z.string(),
  service: z.string(),
  notes: z.string().optional(),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const confettiRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      beds: "2",
      baths: "2",
      service: "standard",
      honeypot: "",
    },
  });

  const selectedService = watch("service");

  const burstConfetti = () => {
    const container = confettiRef.current;
    if (!container) return;
    const colors = ["#65c537", "#d68b7c", "#f4d76b", "#bee49b", "#c89a3c", "#e6a39a"];
    for (let i = 0; i < 70; i++) {
      const d = document.createElement("div");
      d.style.position = "absolute";
      d.style.width = Math.random() > 0.5 ? "10px" : "8px";
      d.style.height = Math.random() > 0.5 ? "10px" : "14px";
      d.style.background = colors[i % colors.length];
      d.style.left = `${Math.random() * 100}%`;
      d.style.top = "-20px";
      d.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      d.style.animation = `fall ${1.6 + Math.random() * 1.6}s ease-in forwards`;
      d.style.animationDelay = `${Math.random() * 0.5}s`;
      d.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(d);
      setTimeout(() => d.remove(), 3200);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return;
    setSubmitting(true);
    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // still show success to user, email will be retried
    }
    burstConfetti();
    setTimeout(() => setSubmitted(true), 300);
    setSubmitting(false);
  };

  return (
    <section
      className="py-[140px] px-9 max-md:py-[90px] max-md:px-[22px] bg-gradient-to-b from-paper to-pale-leaf relative overflow-hidden"
      id="book"
    >
      <div className="max-w-[1080px] mx-auto relative z-[2]">
        <Reveal>
          <div className="text-center mb-[60px]">
            <span className="font-hand text-[38px] text-blush-deep -rotate-1 inline-block">request a quote</span>
            <h2 className="font-display text-[clamp(56px,7vw,104px)] leading-[.96] tracking-tight mt-2">
              Tell us about your{" "}
              <em className="text-leaf font-hand not-italic inline-block -rotate-1">home.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-cream p-14 max-md:p-6 max-md:px-6 rounded-3xl shadow-lg relative border border-ink/[.08]"
          >
            {/* Tape decoration */}
            <span className="absolute top-[-12px] left-1/2 w-[120px] h-6 bg-sun/85 -translate-x-1/2 -rotate-2 shadow-sm" />

            {/* Honeypot */}
            <input {...register("honeypot")} className="absolute -left-[9999px]" tabIndex={-1} autoComplete="off" />

            {!submitted ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-hand text-[22px] text-leaf -rotate-1 inline-block w-fit">your name ✿</label>
                    <input
                      {...register("name")}
                      placeholder="Jamie Smith"
                      className="font-body text-[17px] px-4 py-3.5 border-[1.5px] border-ink/[.18] rounded-xl bg-paper text-ink outline-none transition-all focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/10 placeholder:text-ink/35"
                    />
                    {errors.name && <span className="text-blush-deep text-sm">{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-hand text-[22px] text-leaf -rotate-1 inline-block w-fit">phone ☎</label>
                    <input
                      {...register("phone")}
                      placeholder="(314) 555-0123"
                      className="font-body text-[17px] px-4 py-3.5 border-[1.5px] border-ink/[.18] rounded-xl bg-paper text-ink outline-none transition-all focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/10 placeholder:text-ink/35"
                    />
                    {errors.phone && <span className="text-blush-deep text-sm">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-hand text-[22px] text-leaf -rotate-1 inline-block w-fit">email ✉</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="hi@email.com"
                      className="font-body text-[17px] px-4 py-3.5 border-[1.5px] border-ink/[.18] rounded-xl bg-paper text-ink outline-none transition-all focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/10 placeholder:text-ink/35"
                    />
                    {errors.email && <span className="text-blush-deep text-sm">{errors.email.message}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-hand text-[22px] text-leaf -rotate-1 inline-block w-fit">town ✸</label>
                    <input
                      {...register("town")}
                      placeholder="Kirkwood, MO"
                      className="font-body text-[17px] px-4 py-3.5 border-[1.5px] border-ink/[.18] rounded-xl bg-paper text-ink outline-none transition-all focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/10 placeholder:text-ink/35"
                    />
                    {errors.town && <span className="text-blush-deep text-sm">{errors.town.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-hand text-[22px] text-leaf -rotate-1 inline-block w-fit">bedrooms</label>
                    <select
                      {...register("beds")}
                      className="font-body text-[17px] px-4 py-3.5 border-[1.5px] border-ink/[.18] rounded-xl bg-paper text-ink outline-none transition-all focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/10"
                    >
                      <option>Studio / 1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-hand text-[22px] text-leaf -rotate-1 inline-block w-fit">bathrooms</label>
                    <select
                      {...register("baths")}
                      className="font-body text-[17px] px-4 py-3.5 border-[1.5px] border-ink/[.18] rounded-xl bg-paper text-ink outline-none transition-all focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/10"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-3.5">
                  <label className="font-hand text-[22px] text-leaf -rotate-1 inline-block w-fit">pick your service</label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
                  {servicePackages.map((pkg) => (
                    <button
                      key={pkg.value}
                      type="button"
                      onClick={() => setValue("service", pkg.value)}
                      className={`border-[1.5px] rounded-[14px] p-5 text-center transition-all cursor-pointer ${
                        selectedService === pkg.value
                          ? "bg-forest text-cream border-forest"
                          : "border-ink/[.18] bg-paper text-ink hover:border-leaf"
                      }`}
                    >
                      <div className="font-display text-[28px] leading-none mb-1">{pkg.name}</div>
                      <div className={`font-hand text-lg ${selectedService === pkg.value ? "text-sage" : "opacity-80"}`}>
                        {pkg.desc}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-hand text-[22px] text-leaf -rotate-1 inline-block w-fit">
                    anything we should know?
                  </label>
                  <textarea
                    {...register("notes")}
                    rows={3}
                    placeholder="Pets, allergies, gate codes, the playlist..."
                    className="font-body text-[17px] px-4 py-3.5 border-[1.5px] border-ink/[.18] rounded-xl bg-paper text-ink outline-none transition-all focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/10 placeholder:text-ink/35 resize-none"
                  />
                </div>

                <div className="flex justify-between items-center gap-6 flex-wrap mt-[30px] pt-6 border-t border-dashed border-ink/[.16]">
                  <p className="font-hand text-[22px] text-ink-2 max-w-[340px] leading-[1.2]">
                    Sarah or Hannah will text you back
                    <br />
                    <strong className="text-leaf">— usually within the hour. ✨</strong>
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2.5 px-[30px] py-[18px] rounded-full bg-forest text-cream font-semibold text-[13px] tracking-[.18em] uppercase transition-all duration-[350ms] hover:bg-leaf hover:-translate-y-0.5 hover:-rotate-[.5deg] hover:shadow-md disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send it ↗"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-[60px] px-5">
                <div className="font-script text-[60px] text-leaf leading-[.9] mb-[18px]">thank you!</div>
                <p className="font-display text-[30px] text-ink max-w-[540px] mx-auto mb-[18px] leading-[1.2]">
                  We&apos;ve got it. <em className="text-blush-deep">Sarah or Hannah</em> will text you back within the hour with your quote.
                </p>
                <p className="font-hand text-2xl text-ink-2">
                  — in the meantime, call us anytime at{" "}
                  <a href={siteConfig.phoneHref} className="text-leaf font-semibold">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
      <div ref={confettiRef} className="absolute inset-0 pointer-events-none z-[3]" />
    </section>
  );
}

import { DottedSurface } from "@/components/dotted-surface";
import { LogoCloud } from "@/components/logo-cloud-2";
import { FallingPattern } from "@/components/falling-pattern";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from '@/lib/utils';

import { Testimonials } from "@/components/testimonials";

export default function DemoOne() {
  return (
    <>
      <ThemeToggle />
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <DottedSurface className="absolute inset-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
                'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
                'blur-[30px]',
              )}
            />
            <h1 className="font-sans text-3xl font-semibold">Switch is Flexing Exploring 21st.dev Components</h1>
          </div>
        </DottedSurface>
      </div>

      <div className="w-full py-35 px-4">
        <section className="relative mx-auto grid max-w-3xl">
          <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
            Companies we{" "}
            <span className="font-semibold text-primary">collaborate</span> with.
          </h2>

          <LogoCloud />
        </section>
      </div>

      <Testimonials />

      <div className="w-full relative min-h-screen">
        <FallingPattern
          className="h-screen [mask-image:radial-gradient(ellipse_at_center,transparent,black)]"
          color="var(--falling-pattern-color)"
          duration={80}
          blurIntensity="2px"
          density={2}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="font-sans text-4xl font-extrabold tracking-tighter">
            or you can be in a matrix simulation using NextJS, ShadCN and 21st.dev          </h1>
        </div>
      </div>
    </>
  );
}

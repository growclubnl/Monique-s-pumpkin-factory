import Image from "next/image";
import Link from "next/link";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
type Dish = { tag: string; name: string; description: string };
const DISHES: Dish[] = [
  {
    tag: "Soep",
    name: "Pompoensoep",
    description:
      "Romige klassieker met geroosterde flespompoen, gember en een vleugje kokosmelk. Werkt altijd, ook voor wie geen pompoen lust.",
  },
  {
    tag: "Hoofdgerecht",
    name: "Pompoenrisotto",
    description:
      "Kleurrijke risotto met geroosterde pompoen, salie, parmezaan en geroosterde pompoenpitten als knapperige finish.",
  },
  {
    tag: "Hoofdgerecht",
    name: "Gevulde pompoen",
    description:
      "Hele kleine pompoen uit de oven, gevuld met spelt, paddenstoelen en geitenkaas. Eet je gewoon uit de schil.",
  },
  {
    tag: "Stamppot",
    name: "Pompoenstamppot",
    description:
      "Najaarsklassieker met zoete oranje pompoen, kruimige krieltjes en een gerookte worst er bovenop.",
  },
  {
    tag: "Bakken",
    name: "Pompoenbrood",
    description:
      "Zacht brood met pompoenpuree, pompoenpitten en een hint van kaneel. Lekker bij soep of gewoon met roomboter.",
  },
  {
    tag: "Taart",
    name: "Pompoentaart",
    description:
      "Hollandse variant van de Amerikaanse pumpkin pie: speculaaskruiden, kaneel, slagroom en een knapperige bodem.",
  },
];
type FaqItem = { q: string; a: string };
const FAQ_COL_A: FaqItem[] = [
  {
    q: "Heb ik een afspraak nodig om langs te komen?",
    a: "Nee, je hebt geen afspraak nodig om langs te komen! Wij zijn dagelijks geopend van 08:00 tot 20:00. Loop gerust binnen.",
  },
  {
    q: "Waar kan ik parkeren?",
    a: "Parkeren kan gewoon voor de deur. Er zijn genoeg plekken voor iedereen en parkeren is gratis!",
  },
  {
    q: "Wat kan je allemaal doen op de locatie?",
    a: "Op de locatie kan je kiezen uit maar liefst 50 soorten pompoenen! Daarnaast delen wij regelmatig in het weekend pompoengerechten uit. Gezellig!",
  },
  {
    q: "Kan ik pompoenen reserveren?",
    a: "Helaas is het niet mogelijk om pompoenen te reserveren. Kom op tijd langs voor de beste keuze!",
  },
];
const FAQ_COL_B: FaqItem[] = [
  {
    q: "Vanaf welke datum is de Pumpkin Factory open?",
    a: "Monique's Pumpkin Factory is geopend vanaf maandag 14 september 2026 tot half oktober 2026.",
  },
  {
    q: "Hoe groot is het terrein / hoeveel pompoenen zijn er?",
    a: "De tuin is ongeveer 100 m², maar er is genoeg voor iedereen! Wij vullen dagelijks onze voorraad aan, zodat ook grote of bijzondere pompoenen altijd beschikbaar zijn. Raakt de voorraad toch op? Dan kondigen wij dit ruim van tevoren aan op onze socials.",
  },
  {
    q: "Hoe kan ik betalen?",
    a: "Je kunt bij ons betalen met contant geld of via een Tikkie. Makkelijk en snel!",
  },
  {
    q: "Zijn alle pompoenen eetbaar?",
    a: "Alle pompoenen zijn eetbaar, maar sommige smaken gewoon niet lekker — dit zijn echte decoratiepompoenen. Dit staat duidelijk aangegeven bij de aankoop. Geen zorgen: ziek worden kan er niet van!",
  },
];
function FaqPill({ item }: { item: FaqItem }) {
  return (
    <details className="group rounded-[28px] border border-black bg-white open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 [&::-webkit-details-marker]:hidden">
        <span className="text-left text-base leading-snug text-black sm:text-lg">{item.q}</span>
        <Image
          src={FIGMA_ASSETS.chevron}
          alt=""
          width={23}
          height={20}
          className="shrink-0 rotate-180 transition-transform duration-200 group-open:rotate-0"
        />
      </summary>
      <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-neutral-700 sm:px-8 sm:text-base">
        {item.a}
      </div>
    </details>
  );
}
export function PumpkinLanding() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top notice */}
      <div className="bg-pumpkin-green py-2 text-center text-base text-white sm:text-lg">
        Wij zijn vandaag geopend tot 20:00
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-pumpkin-cream">
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <Image
            src={FIGMA_ASSETS.heroBackdrop}
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1920px] px-4 pb-16 pt-4 sm:px-8 lg:px-16 lg:pb-24">
          <header className="flex flex-wrap items-center justify-between gap-4 py-4">
            <Link href="/" className="block shrink-0">
              <Image
                src={FIGMA_ASSETS.logoHeader}
                alt="Monique's Pumpkin Factory"
                width={243}
                height={138}
                priority
              />
            </Link>
            <nav className="flex flex-wrap items-center justify-end gap-4 sm:gap-8">
              <Link
                href="#contact"
                className="font-bakbak text-xl tracking-wide text-pumpkin-green-dark hover:underline"
              >
                CONTACT
              </Link>
              <Link
                href="https://maps.google.com/?q=Akervoorderlaan+1,+2161+DP+Lisse"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bakbak inline-flex h-11 min-w-[120px] items-center justify-center rounded-full bg-white px-6 text-xl text-pumpkin-green-dark transition hover:bg-neutral-100"
              >
                ROUTE
              </Link>
              <Image
                src={FIGMA_ASSETS.flagNl}
                alt="Nederlands"
                width={36}
                height={27}
                className="shrink-0"
              />
            </nav>
          </header>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-6 xl:gap-12">
            <div className="max-w-xl">
              <h1 className="font-gasoek text-5xl leading-none text-pumpkin-orange sm:text-6xl lg:text-7xl xl:text-[96px]">
                Wij zijn open!
              </h1>
              <p className="mt-6 text-2xl leading-[1.35] text-pumpkin-body sm:text-3xl lg:text-4xl">
                Maandag tot en met zondag
                <br />
                van 08:00 tot 20:00
              </p>
              <div className="mt-10">
                <Link
                  href="https://maps.google.com/?q=Akervoorderlaan+1,+2161+DP+Lisse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bakbak inline-flex h-14 min-w-[180px] items-center justify-center rounded-full bg-white px-10 text-xl text-black transition hover:bg-neutral-100"
                >
                  ROUTE
                </Link>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-none lg:justify-self-end">
              <div className="absolute left-1/2 top-1/2 w-[85%] max-w-md -translate-x-1/2 -translate-y-1/2 rotate-[42deg] lg:w-[110%] lg:max-w-none">
                <div className="relative aspect-[636/693] w-full">
                  <Image src={FIGMA_ASSETS.heroBlob} alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="absolute bottom-[8%] right-[10%] w-[28%] max-w-[140px]">
                <div className="relative aspect-square w-full">
                  <Image src={FIGMA_ASSETS.heroEllipse} alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="relative z-[1] mx-auto w-[72%] max-w-sm lg:w-[80%] lg:max-w-md">
                <div className="relative aspect-[515/540] w-full">
                  <Image
                    src={FIGMA_ASSETS.heroPumpkin}
                    alt="Vrolijke pompoen"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Visit us strip + How it works */}
      <section>
        <div className="bg-pumpkin-orange py-4 text-center">
          <h2 className="font-gasoek text-3xl text-white sm:text-4xl">Visit us</h2>
        </div>
        <div className="relative overflow-hidden bg-white pb-12 pt-10 sm:pb-16 lg:pb-20">
          <div className="mx-auto grid max-w-[1920px] gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-16">
            <div>
              <h2 className="font-gasoek text-4xl text-pumpkin-orange sm:text-5xl">Zo werkt het</h2>
              <div className="mt-8 space-y-6 text-base leading-[1.75] text-black sm:text-lg">
                <p>
                  Bij de Pumpkin Factory houden we het graag eenvoudig en gemoedelijk. Iedereen is welkom om rustig
                  rond te lopen tussen de pompoenen, te kijken, te vergelijken en de mooiste exemplaren uit te zoeken.
                  Of je nu komt voor decoratie, om te koken of gewoon voor de gezelligheid, neem mee wat je aanspreekt
                  en geniet van de sfeer van het seizoen.
                </p>
                <p>
                  Betalen kan contant of met een Tikkie, wat voor jou het makkelijkst is. Alles wat je ziet is door
                  onszelf gekweekt, met aandacht, plezier en een flinke dosis liefde voor het vak. Elke pompoen is
                  anders, met zijn eigen vorm, kleur en karakter. En zoals altijd bij ons: op is op.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none lg:justify-self-end">
              <div className="relative aspect-[743/502] w-full rotate-[4deg] overflow-hidden rounded-[26px] shadow-lg">
                <Image
                  src={FIGMA_ASSETS.photoTop}
                  alt="Pompoenen op het veld"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
              <div className="relative -mt-[18%] ml-[8%] aspect-[703/475] w-[92%] -rotate-1 overflow-hidden rounded-[26px] shadow-xl sm:-mt-[14%]">
                <Image
                  src={FIGMA_ASSETS.photoBottom}
                  alt="Bezoekers tussen de pompoenen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 92vw"
                />
              </div>
            </div>
          </div>
          <div className="mt-16 h-2 bg-pumpkin-accent-bar sm:mt-24" aria-hidden />
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        <h2 className="font-gasoek text-center text-4xl text-pumpkin-orange sm:text-5xl">
          Veel gestelde vragen
        </h2>
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:mt-14 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-5">
          <div className="flex flex-col gap-4 lg:gap-5">
            {FAQ_COL_A.map((item) => (
              <FaqPill key={item.q} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            {FAQ_COL_B.map((item) => (
              <FaqPill key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>
      {/* Dishes */}
      <section className="bg-pumpkin-cream px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-gasoek text-4xl text-pumpkin-orange sm:text-5xl">
            Van soep tot taart
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pumpkin-body sm:text-lg">
            Pompoen is het meest veelzijdige seizoensingrediënt. Een paar Nederlandse
            klassiekers om je te inspireren.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish) => (
            <article
              key={dish.name}
              className="rounded-[28px] border border-black bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <p className="font-bakbak text-xs uppercase tracking-widest text-pumpkin-orange">
                {dish.tag}
              </p>
              <h3 className="font-gasoek mt-3 text-2xl text-pumpkin-green-dark sm:text-3xl">
                {dish.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                {dish.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      {/* Instagram */}
      <section className="border-t border-neutral-200 bg-white px-4 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto mb-6 flex max-w-[1920px] flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-gasoek text-2xl text-pumpkin-orange sm:text-3xl">
            Volg ons op Instagram
          </h2>
          <a
            href="https://www.instagram.com/pumpkin.factory/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bakbak inline-flex items-center gap-2 rounded-full bg-pumpkin-orange px-6 py-3 text-base text-white transition hover:bg-orange-500"
          >
            @pumpkin.factory
          </a>
        </div>
        <div className="mx-auto grid max-w-[1920px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <a
              key={i}
              href="https://www.instagram.com/pumpkin.factory/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bekijk @pumpkin.factory op Instagram"
              className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#fdf497] via-[#fd5949] to-[#d6249f] transition hover:opacity-90"
            >
              <Image
                src={FIGMA_ASSETS.socialInstagram}
                alt=""
                width={64}
                height={64}
                className="opacity-95 transition-transform duration-200 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="bg-pumpkin-orange px-4 py-14 text-center text-white sm:py-20">
        <div className="relative mx-auto h-28 w-48 sm:h-36 sm:w-60">
          <Image
            src={FIGMA_ASSETS.logoFooter}
            alt="Monique's Pumpkin Factory"
            fill
            className="object-contain"
          />
        </div>
        <p className="mt-8 text-lg sm:text-xl">Akervoorderlaan 1, 2161 DP Lisse</p>
        <div className="mt-4 space-y-1 text-base sm:text-lg">
          <p>
            <a href="tel:+31626102741" className="underline-offset-2 hover:underline">
              +31626102741
            </a>
          </p>
          <p>Maandag tot en met zondag</p>
          <p>van 09:00 tot 20:00</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/pumpkin.factory/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="Instagram"
          >
            <Image src={FIGMA_ASSETS.socialInstagram} alt="" width={35} height={35} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="Facebook"
          >
            <Image src={FIGMA_ASSETS.socialFacebook} alt="" width={34} height={35} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="TikTok"
          >
            <Image src={FIGMA_ASSETS.socialTiktok} alt="" width={37} height={37} />
          </a>
        </div>
      </footer>
    </div>
  );
}

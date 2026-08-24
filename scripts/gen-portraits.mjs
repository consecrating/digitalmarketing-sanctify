/**
 * Regenerates the 11 team portraits with deliberately varied faces.
 *
 * The first attempt produced near-identical people because every prompt used
 * the same wording. Each entry below now varies age, regional appearance,
 * face shape, hair, outfit, background and camera angle so the model does not
 * converge on one face.
 *
 * Usage: FREEPIK_KEY=... node scripts/gen-portraits.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(OUT, { recursive: true });

const KEY = process.env.FREEPIK_KEY;
if (!KEY) { console.error("FREEPIK_KEY not set"); process.exit(1); }

const MODEL = "https://api.freepik.com/v1/ai/gemini-2-5-flash-image-preview";
const FALLBACK = "https://api.freepik.com/v1/ai/text-to-image/seedream-v4";
const H = { "x-freepik-api-key": KEY, "Content-Type": "application/json" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function post(url, body) {
  const r = await fetch(url, { method: "POST", headers: H, body: JSON.stringify(body) });
  return { status: r.status, json: await r.json().catch(() => ({})) };
}

async function poll(url, id, tries = 40) {
  for (let i = 0; i < tries; i++) {
    await sleep(3000);
    const r = await fetch(`${url}/${id}`, { headers: H });
    const d = (await r.json().catch(() => ({}))).data || {};
    if (d.status === "COMPLETED" && d.generated?.length) return d.generated;
    if (d.status === "FAILED") throw new Error("task failed");
  }
  throw new Error("timeout");
}

async function save(src, file) {
  const dest = path.join(OUT, file);
  if (src.startsWith("http")) {
    const r = await fetch(src);
    fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
  } else {
    fs.writeFileSync(dest, Buffer.from(src, "base64"));
  }
  console.log(`   saved ${file} (${(fs.statSync(dest).size / 1024).toFixed(0)} KB)`);
}

/* Framing + quality, applied to every portrait */
const FRAMING =
  "Waist-up three-quarter length corporate portrait, framed from just above the waist to the top of the head, " +
  "subject fully clothed in professional office attire, relaxed confident posture, looking toward camera with a natural friendly expression. " +
  "Photorealistic editorial photography, 85mm lens, soft directional daylight, shallow depth of field, " +
  "sharp focus on the face, natural skin texture, no text, no logos, no watermark.";

/* Each entry is deliberately distinct across age, region, face, hair, outfit, backdrop and angle */
const people = [
  {
    file: "team-01.webp",
    who: "A 32-year-old Indian woman of North Indian Punjabi appearance, oval face, medium-fair complexion, strong defined eyebrows, " +
         "long straight dark-brown hair worn loose with a centre parting",
    outfit: "a tailored sage-green single-breasted blazer over a white silk shell top, slim gold hoop earrings",
    bg: "standing in a bright open-plan office with softly blurred glass partitions behind her",
    angle: "body angled slightly to her left, shoulders squared",
  },
  {
    file: "team-02.webp",
    who: "A 30-year-old Indian woman of Gujarati appearance, round face with full cheeks, warm medium complexion, " +
         "shoulder-length dark hair with a soft blunt cut, wearing thin black rectangular glasses",
    outfit: "a rust-orange fine-knit turtleneck with high-waisted charcoal wide-leg trousers, thin silver chain necklace",
    bg: "leaning lightly against a warm wooden office wall with a large window to one side",
    angle: "three-quarter turn to camera right, arms loosely crossed",
  },
  {
    file: "team-03.webp",
    who: "A 28-year-old Indian woman of Maharashtrian appearance, heart-shaped face with a pointed chin, olive complexion, " +
         "very long dark wavy hair swept over one shoulder",
    outfit: "a cream linen co-ord set with a relaxed open collar and matching straight trousers, small stud earrings",
    bg: "in a minimal white studio with a soft grey seamless backdrop",
    angle: "facing camera directly, one hand resting at her side",
  },
  {
    file: "team-04.webp",
    who: "A 26-year-old Indian woman of coastal Goan Konkani appearance, square jawline, deeper warm-brown complexion, " +
         "dark curly shoulder-length hair with natural volume",
    outfit: "a cobalt-blue wrap top with tailored beige trousers, thin leather watch",
    bg: "standing near an office balcony with tropical greenery blurred in the background",
    angle: "turned three-quarters to camera left, chin slightly lifted",
  },
  {
    file: "team-05.webp",
    who: "A 27-year-old Indian woman of Maharashtrian appearance, long slender face, light-medium complexion, " +
         "sleek dark hair pulled into a low neat ponytail",
    outfit: "a dusty-pink oversized cotton shirt tucked into charcoal tailored trousers, sleeves lightly rolled",
    bg: "in a designer's workspace with a blurred monitor and pinboard behind her",
    angle: "seated on a stool, leaning slightly forward toward camera",
  },
  {
    file: "team-06.webp",
    who: "A 24-year-old Indian woman of Gujarati appearance, soft round face, fair complexion, " +
         "chin-length dark bob with a fringe",
    outfit: "a mustard-yellow crew-neck knit jumper over a crisp white collared shirt, small pearl earrings",
    bg: "in a bright creative studio with pale brick wall and soft window light",
    angle: "head tilted slightly, warm open smile, facing camera",
  },
  {
    file: "team-07.webp",
    who: "A 23-year-old Indian woman of Goan Catholic appearance, diamond-shaped face with high cheekbones, " +
         "medium complexion with light freckles, long dark-brown hair with subtle caramel highlights",
    outfit: "a burgundy fitted knit top under an unstructured cream linen jacket, delicate gold pendant",
    bg: "standing in a sunlit café-style office corner with plants",
    angle: "three-quarter turn to camera right, relaxed shoulders",
  },
  {
    file: "team-08.webp",
    who: "A 25-year-old Indian woman of Goan appearance, oval face with a slim nose, olive-tan complexion, " +
         "dark hair in a practical high bun with loose strands at the temples",
    outfit: "a slate-grey pinstripe waistcoat over a pale-blue shirt with rolled sleeves",
    bg: "at a developer's desk with two blurred monitors and warm ambient light behind",
    angle: "seated, torso turned toward camera, one arm on the desk",
  },
  {
    file: "team-09.webp",
    who: "A 29-year-old Indian woman of coastal Karnataka appearance, broad soft face, deeper brown complexion, " +
         "long dark hair in a side-swept style, wearing fine gold-rimmed round glasses",
    outfit: "an olive-green midi shirt dress with a slim tan leather belt at the waist",
    bg: "standing beside a bookshelf in a warm neutral office interior",
    angle: "facing camera, hands lightly clasped in front",
  },
  {
    file: "team-10.webp",
    who: "A 31-year-old Indian woman of Mangalorean Tulu appearance, angular face with defined cheekbones, " +
         "medium-deep complexion, straight dark hair cut to collarbone length with a middle parting",
    outfit: "a structured navy blazer worn open over a fine ivory ribbed top, minimal silver studs",
    bg: "in a modern meeting room with a softly blurred glass wall and city daylight",
    angle: "three-quarter turn to camera left, composed confident posture",
  },
  {
    file: "team-11.webp",
    who: "A 21-year-old Indian woman of North Indian appearance, youthful round-oval face, fair-medium complexion, " +
         "very long straight dark hair worn loose past the shoulders",
    outfit: "a soft camel-coloured cardigan over a white crew-neck tee with dark tailored trousers",
    bg: "in a bright reception area with a pale wall and a leafy plant to one side",
    angle: "facing camera with a bright genuine smile, arms relaxed",
  },
];

async function gen(p) {
  const prompt = `${p.who}, wearing ${p.outfit}, ${p.bg}, ${p.angle}. ${FRAMING}`;
  console.log(`-> ${p.file}`);
  try {
    const { json } = await post(MODEL, { prompt, aspect_ratio: "traditional_3_4", num_images: 1 });
    const id = json?.data?.task_id;
    if (!id) throw new Error(JSON.stringify(json).slice(0, 140));
    await save((await poll(MODEL, id))[0], p.file);
  } catch (e) {
    console.log(`   primary failed (${e.message.slice(0, 70)}) — fallback`);
    try {
      const { json } = await post(FALLBACK, { prompt, aspect_ratio: "traditional_3_4" });
      const id = json?.data?.task_id;
      if (!id) throw new Error("no task id");
      await save((await poll(FALLBACK, id))[0], p.file);
    } catch (e2) {
      console.log(`   FAILED ${p.file}: ${e2.message.slice(0, 100)}`);
    }
  }
}

(async () => {
  // clear the look-alike set so each regenerates
  for (const p of people) {
    const f = path.join(OUT, p.file);
    if (fs.existsSync(f)) fs.unlinkSync(f);
  }
  console.log(`=== Regenerating ${people.length} varied portraits (3:4, waist-up) ===`);
  for (const p of people) await gen(p);
  console.log("\nDone.");
})();

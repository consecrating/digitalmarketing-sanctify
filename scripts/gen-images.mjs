/**
 * Generates site imagery via the Freepik AI API (hosts Magnific / Nano Banana models).
 * Usage: FREEPIK_KEY=... node scripts/gen-images.mjs [group]
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
  const j = await r.json().catch(() => ({}));
  return { status: r.status, json: j };
}

async function poll(url, taskId, tries = 40) {
  for (let i = 0; i < tries; i++) {
    await sleep(3000);
    const r = await fetch(`${url}/${taskId}`, { headers: H });
    const j = await r.json().catch(() => ({}));
    const d = j.data || {};
    if (d.status === "COMPLETED" && d.generated?.length) return d.generated;
    if (d.status === "FAILED") throw new Error(`task failed: ${JSON.stringify(d.error)}`);
  }
  throw new Error("timeout");
}

async function save(urlOrB64, file) {
  const dest = path.join(OUT, file);
  if (urlOrB64.startsWith("http")) {
    const r = await fetch(urlOrB64);
    const buf = Buffer.from(await r.arrayBuffer());
    fs.writeFileSync(dest, buf);
  } else {
    fs.writeFileSync(dest, Buffer.from(urlOrB64, "base64"));
  }
  const kb = (fs.statSync(dest).size / 1024).toFixed(0);
  console.log(`   saved ${file} (${kb} KB)`);
}

async function generate(name, prompt, aspect = "widescreen_16_9") {
  const dest = path.join(OUT, name);
  if (fs.existsSync(dest)) { console.log(`   skip ${name} (exists)`); return; }
  console.log(`-> ${name}`);
  try {
    const { json } = await post(MODEL, { prompt, aspect_ratio: aspect, num_images: 1 });
    const id = json?.data?.task_id;
    if (!id) throw new Error(JSON.stringify(json).slice(0, 160));
    const gen = await poll(MODEL, id);
    await save(gen[0], name);
  } catch (e) {
    console.log(`   primary failed (${e.message.slice(0, 90)}) — trying fallback`);
    try {
      const { json } = await post(FALLBACK, { prompt, aspect_ratio: aspect });
      const id = json?.data?.task_id;
      if (!id) throw new Error(JSON.stringify(json).slice(0, 160));
      const gen = await poll(FALLBACK, id);
      await save(gen[0], name);
    } catch (e2) {
      console.log(`   FAILED ${name}: ${e2.message.slice(0, 120)}`);
    }
  }
}

/* ---------------- Prompt sets ---------------- */

const STYLE =
  "professional editorial photography, natural window light, shallow depth of field, " +
  "muted deep-navy and warm neutral palette with subtle lime-green accents, crisp, " +
  "high detail, realistic, no text, no logos, no watermarks";

const scenes = [
  ["hero-team.jpg", `A small modern digital marketing team collaborating around a desk with laptops and analytics dashboards on screen, bright contemporary office with large windows and tropical greenery visible outside, Goa India. ${STYLE}`],
  ["office-collab.jpg", `Two marketing strategists reviewing printed campaign analytics and a laptop together at a light wooden table, bright airy studio office, plants, Goa India. ${STYLE}`],
  ["seo-analytics.jpg", `Close-up of a laptop screen showing a clean search-analytics dashboard with rising line graphs, notebook and coffee beside it on a light desk, soft daylight. ${STYLE}`],
  ["social-content.jpg", `A content creator photographing a flat-lay of products on a light background with a ring light and smartphone on tripod, bright studio. ${STYLE}`],
  ["web-design.jpg", `A designer working on a website wireframe in a design tool on a large monitor, colour swatches and sketchbook on the desk, bright minimal studio. ${STYLE}`],
  ["paid-ads.jpg", `A marketer analysing a paid-advertising performance dashboard on two monitors showing charts and cost metrics, modern office, soft daylight. ${STYLE}`],
  ["ai-search.jpg", `Abstract editorial visual representing artificial intelligence and search: softly glowing translucent geometric network nodes over a deep navy gradient background with lime accents, clean and premium, no text. ${STYLE}`],
  ["content-writing.jpg", `A writer working at a laptop with a notebook of handwritten notes and coffee, bright calm workspace by a window with plants. ${STYLE}`],
  ["hospitality-goa.jpg", `Elegant boutique hotel exterior with pool, palm trees and Portuguese-influenced architecture in Goa India at golden hour, inviting and premium. ${STYLE}`],
  ["restaurant-goa.jpg", `Warmly lit modern restaurant interior with wooden tables and tropical plants, coastal Goa India, welcoming evening atmosphere. ${STYLE}`],
  ["realestate-goa.jpg", `Contemporary villa exterior with clean lines, large windows and tropical landscaping in Goa India, bright daylight, architectural photography. ${STYLE}`],
  ["goa-city.jpg", `Aerial view of Panaji Goa India waterfront with colourful Portuguese-era buildings, river and palm trees, clear bright day. ${STYLE}`],
  ["meeting-client.jpg", `A friendly client meeting across a table with a laptop and documents, two people talking, bright modern office, natural light. ${STYLE}`],
  ["og-image.jpg", `Clean premium brand banner composition: deep navy gradient background with subtle geometric grid and soft lime-green accent glow, generous empty space, no text. ${STYLE}`],
];

const PORTRAIT_STYLE =
  "professional corporate headshot, friendly confident expression, looking at camera, " +
  "soft even studio lighting, plain light neutral background, sharp focus on face, " +
  "business-casual attire, photorealistic, no text, no watermark";

const portraits = [
  ["team-01.jpg", "a professional Indian woman in her late twenties, shoulder-length dark hair"],
  ["team-02.jpg", "a professional Indian woman in her early thirties, long dark hair, glasses"],
  ["team-03.jpg", "a professional Indian woman in her mid twenties, dark hair in a low bun"],
  ["team-04.jpg", "a professional Indian woman in her late twenties, wavy shoulder-length hair"],
  ["team-05.jpg", "a professional Indian woman in her early thirties, straight dark hair, subtle earrings"],
  ["team-06.jpg", "a professional Indian woman in her mid twenties, curly dark hair"],
  ["team-07.jpg", "a professional Indian woman in her late twenties, long dark hair, warm smile"],
  ["team-08.jpg", "a professional Indian woman in her early thirties, short bob haircut"],
  ["team-09.jpg", "a professional Indian woman in her mid twenties, dark hair tied back, glasses"],
  ["team-10.jpg", "a professional Indian woman in her early thirties, shoulder-length layered hair"],
  ["team-11.jpg", "a professional Indian woman in her late twenties, long straight dark hair"],
];

const group = process.argv[2] || "scenes";

(async () => {
  if (group === "scenes" || group === "all") {
    console.log(`\n=== Scenes (${scenes.length}) ===`);
    for (const [f, p] of scenes) await generate(f, p, "widescreen_16_9");
  }
  if (group === "portraits" || group === "all") {
    console.log(`\n=== Portraits (${portraits.length}) ===`);
    for (const [f, subject] of portraits) {
      await generate(f, `Headshot of ${subject}. ${PORTRAIT_STYLE}`, "square_1_1");
    }
  }
  const files = fs.readdirSync(OUT).filter((f) => /\.(jpg|png|webp)$/i.test(f));
  console.log(`\nDone. ${files.length} image(s) in public/images/`);
})();

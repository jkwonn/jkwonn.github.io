import { useState } from "react";

export default function Gear() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    tech: true,
    camera: true,
    stationary: true,
  });

  const toggle = (section: string) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <article className="about-content">
      <section>
        <h3
          className="gear-category collapsible"
          onClick={() => toggle("tech")}
        >
          <span className="collapse-icon">{expanded.tech ? "−" : "+"}</span>{" "}
          tech
        </h3>
        {expanded.tech && (
          <ul>
            <li>main computer — m1 macbook pro 16GB 512GB</li>
            <li>secondary computers — x62, thinkpad t14s gen 4</li>
            <li>
              monitor — dell S2722DC (cheap second hand but nice monitor!)
            </li>
            <li>headphones - airpods pro, beats studio buds+, kz zsn pro x</li>
            <li>keyboard — hhkb hybrid type s</li>
            <li>mouse — hpc 02</li>
            <li>
              eink — hisense touch blue / supernote a5x2/a6x2 + lamy collab pen
            </li>
            <li>phone — iphone 15 pro / 202 kc</li>
          </ul>
        )}
        <p className="gear-date">[1/14/26]</p>
      </section>
      <section>
        <h3
          className="gear-category collapsible"
          onClick={() => toggle("camera")}
        >
          <span className="collapse-icon">{expanded.camera ? "−" : "+"}</span>{" "}
          camera
        </h3>
        {expanded.camera && (
          <ul>
            <li>main cam — fujifilm xh2s</li>
            <li>general lens — xf 16-55 f2.8-4</li>
            <li>vlog lens / ultrawide — xf 10-24 f4 non wr</li>
            <li>prime lenses — xf 35mm f2 wr / sirui sniper 33mm f1.2</li>
            <li>fisheye lens — tt artisan 7.5mm/2</li>
          </ul>
        )}
        <p className="gear-date">[1/14/26]</p>
      </section>
      <section>
        <h3
          className="gear-category collapsible"
          onClick={() => toggle("stationary")}
        >
          <span className="collapse-icon">
            {expanded.stationary ? "−" : "+"}
          </span>{" "}
          stationery
        </h3>
        {expanded.stationary && (
          <ul>
            <li>
              main pencil rotation — rotring 600 loft 0.5mm / kurutoga dive
            </li>
            <li>main pen rotation — kaweco special f / ohto GS01</li>
            <li>
              pencil collection — rotring 800 0.5mm / ohto MS01 0.5mm / rotring
              600 green 0.5mm / pentel orenz nero 0.5mm
            </li>
          </ul>
        )}
        <p className="gear-date">[1/14/26]</p>
      </section>
    </article>
  );
}

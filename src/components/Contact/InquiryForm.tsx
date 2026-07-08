import { useEffect, useRef, useState } from "react";
import { catalog } from "@/data/catalog";
import { IconArrowRight } from "@/components/icons/Icons";
import styles from "./InquiryForm.module.css";

const CLIENT_TYPES = [
  "Bullion dealer / wholesaler",
  "Jewellery manufacturer / retailer",
  "Refinery / smelter",
  "Mining company",
  "Private investor / HNWI",
  "Financial institution / bank",
  "Government / central bank",
  "Family office / wealth manager",
  "Logistics / vaulting provider",
  "Exchange / trading platform",
] as const;
const METALS = ["Gold", "Silver", "Platinum", "Palladium"] as const;

type FormState = {
  clientType:  string;
  firstName:   string;
  lastName:    string;
  company:     string;
  email:       string;
  phone:       string;
  country:     string;
  metals:      string[];
  volume:      string;
  product:     string;
  message:     string;
};

const initial: FormState = {
  clientType: "",
  firstName:  "",
  lastName:   "",
  company:    "",
  email:      "",
  phone:      "",
  country:    "",
  metals:     [],
  volume:     "",
  product:    "",
  message:    "",
};

/**
 * B2B inquiry form. On submit, composes a well-structured plain-text
 * email and opens the user's default mail client via mailto:. This
 * avoids running a backend — the enquiry lands in preciousmetals@
 * as a normal email from the user.
 *
 * A "Request Quote" click on the Products catalogue triggers the
 * 'mg:quote-request' custom event with a CatalogProduct payload;
 * we listen for it and pre-fill the product + metal.
 */
export function InquiryForm() {
  const [f, setF] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const productSelectRef = useRef<HTMLSelectElement>(null);

  /* Pre-fill from Products catalogue request. */
  useEffect(() => {
    const handler = (e: Event) => {
      const evt = e as CustomEvent<{ slug: string; name: string; metal: string }>;
      const p = evt.detail;
      if (!p) return;
      setF((prev) => ({
        ...prev,
        product: p.slug,
        metals: Array.from(new Set([...prev.metals, cap(p.metal)])),
      }));
      // A moment later, focus the message field so the user can add context.
      window.setTimeout(() => {
        document.getElementById("mg-inquiry-message")?.focus();
      }, 600);
    };
    window.addEventListener("mg:quote-request", handler as EventListener);
    return () => window.removeEventListener("mg:quote-request", handler as EventListener);
  }, []);

  const toggleMetal = (m: string) => {
    setF((prev) => ({
      ...prev,
      metals: prev.metals.includes(m) ? prev.metals.filter((x) => x !== m) : [...prev.metals, m],
    }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!f.clientType) e.clientType = "Please choose a client type.";
    if (!f.firstName.trim()) e.firstName = "First name is required.";
    if (!f.lastName.trim())  e.lastName  = "Last name is required.";
    if (!f.company.trim())   e.company   = "Company is required.";
    if (!f.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "A valid email is required.";
    if (!f.country.trim())   e.country   = "Country is required.";
    if (!f.message.trim() || f.message.trim().length < 10)
      e.message = "Please tell us more (min. 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const productLine =
      f.product ? catalog.find((c) => c.slug === f.product)?.name ?? f.product : "";

    const subject = `[B2B enquiry] ${f.clientType} — ${f.company}`;
    const bodyLines = [
      "New enquiry via marmaragold.ae",
      "",
      `Name        : ${f.firstName} ${f.lastName}`,
      `Company     : ${f.company}`,
      `Client type : ${f.clientType}`,
      `Country     : ${f.country}`,
      `Email       : ${f.email}`,
      `Phone       : ${f.phone || "—"}`,
      `Metals      : ${f.metals.length ? f.metals.join(", ") : "—"}`,
      `Volume      : ${f.volume || "—"} kg/month`,
      productLine ? `Product     : ${productLine}` : "",
      "",
      "Message:",
      f.message,
    ];
    const body = bodyLines.filter(Boolean).join("\n");

    const mailto =
      `mailto:preciousmetals@marmaragold.ae` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Open the user's default mail client.
    window.location.href = mailto;
    setStatus("sent");
  };

  const reset = () => { setF(initial); setStatus("idle"); setErrors({}); };

  if (status === "sent") {
    return (
      <div className={styles.done}>
        <div className={styles.doneMark}>✓</div>
        <h3>Your email client should be open now.</h3>
        <p>
          We prepared a full brief in your default mail app to
          <a href="mailto:preciousmetals@marmaragold.ae"> preciousmetals@marmaragold.ae</a>.
          Send it and a named desk will get back within one business day.
        </p>
        <button type="button" className={styles.reset} onClick={reset}>
          Start another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <header className={styles.formHead}>
        <span className={styles.eyebrow}>B2B Enquiry</span>
        <h3>Request a call-back</h3>
        <p>Routed to a named desk within one business day. All fields treated as confidential.</p>
      </header>

      <div className={styles.row}>
        <Field label="I am a…" error={errors.clientType} full>
          <select
            className={styles.select}
            value={f.clientType}
            onChange={(e) => setF({ ...f, clientType: e.target.value })}
            required
          >
            <option value="">— Select client type —</option>
            {CLIENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="First name" error={errors.firstName}>
          <input
            className={styles.input}
            value={f.firstName}
            onChange={(e) => setF({ ...f, firstName: e.target.value })}
            autoComplete="given-name"
          />
        </Field>
        <Field label="Last name" error={errors.lastName}>
          <input
            className={styles.input}
            value={f.lastName}
            onChange={(e) => setF({ ...f, lastName: e.target.value })}
            autoComplete="family-name"
          />
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="Company" error={errors.company}>
          <input
            className={styles.input}
            value={f.company}
            onChange={(e) => setF({ ...f, company: e.target.value })}
            autoComplete="organization"
          />
        </Field>
        <Field label="Country" error={errors.country}>
          <input
            className={styles.input}
            value={f.country}
            onChange={(e) => setF({ ...f, country: e.target.value })}
            autoComplete="country-name"
          />
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="Business email" error={errors.email}>
          <input
            type="email"
            className={styles.input}
            value={f.email}
            onChange={(e) => setF({ ...f, email: e.target.value })}
            autoComplete="email"
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            className={styles.input}
            value={f.phone}
            onChange={(e) => setF({ ...f, phone: e.target.value })}
            autoComplete="tel"
          />
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="Metals of interest" full>
          <div className={styles.chips}>
            {METALS.map((m) => {
              const on = f.metals.includes(m);
              return (
                <label key={m} className={`${styles.chip} ${on ? styles.chipOn : ""}`}>
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => toggleMetal(m)}
                    aria-label={m}
                  />
                  {m}
                </label>
              );
            })}
          </div>
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="Estimated volume (kg/month)">
          <input
            className={styles.input}
            value={f.volume}
            onChange={(e) => setF({ ...f, volume: e.target.value })}
            placeholder="e.g. 25"
            inputMode="decimal"
          />
        </Field>
        <Field label="Product (optional)">
          <select
            ref={productSelectRef}
            className={styles.select}
            value={f.product}
            onChange={(e) => setF({ ...f, product: e.target.value })}
          >
            <option value="">— No specific product —</option>
            {catalog.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="Tell us what you need" error={errors.message} full>
          <textarea
            id="mg-inquiry-message"
            className={styles.textarea}
            value={f.message}
            onChange={(e) => setF({ ...f, message: e.target.value })}
            rows={5}
            placeholder="Volumes, timing, custody preference, jurisdiction, any KYC context…"
          />
        </Field>
      </div>

      <div className={styles.footRow}>
        <p className={styles.legal}>
          By sending this enquiry you agree to Marmara Gold contacting you about your request.
          Full KYC and AML checks apply before any pricing is issued.
        </p>
        <button type="submit" className={styles.submit}>
          Send enquiry <IconArrowRight />
        </button>
      </div>
    </form>
  );
}

/* --- helpers --- */

function Field({
  label, children, error, full,
}: { label: string; children: React.ReactNode; error?: string; full?: boolean }) {
  return (
    <label className={`${styles.field} ${full ? styles.full : ""}`}>
      <span className={styles.fieldLabel}>{label}</span>
      {children}
      {error && <span className={styles.err}>{error}</span>}
    </label>
  );
}

function cap(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }

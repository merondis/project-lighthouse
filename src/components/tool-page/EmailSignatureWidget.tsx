"use client";

import { useState } from "react";
import { CopyButton } from "@/components/ui/CopyButton";

export function EmailSignatureWidget() {
  const [name, setName] = useState("Jane Doe");
  const [title, setTitle] = useState("Marketing Manager");
  const [company, setCompany] = useState("Acme Inc.");
  const [phone, setPhone] = useState("+1 555 123 4567");
  const [email, setEmail] = useState("jane@acme.com");
  const [website, setWebsite] = useState("https://acme.com");

  const titleLine = company ? title + ", " + company : title;

  const phoneLine = phone ? "Tel: " + phone + "<br/>" : "";
  const emailLine = email
    ? 'Email: <a href="mailto:' + email + '" style="color:#2563eb;text-decoration:none;">' + email + "</a><br/>"
    : "";
  const websiteLine = website
    ? 'Web: <a href="' + website + '" style="color:#2563eb;text-decoration:none;">' + website + "</a>"
    : "";

  const htmlCode =
    '<table style="font-family:Arial,sans-serif;font-size:14px;color:#111827;"><tr><td style="font-weight:bold;font-size:16px;">' +
    name +
    '</td></tr><tr><td style="color:#374151;">' +
    titleLine +
    '</td></tr><tr><td style="padding-top:6px;">' +
    phoneLine +
    emailLine +
    websiteLine +
    "</td></tr></table>";

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Full Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Job Title
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Company
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Phone
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Email
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Website
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none" />
        </label>
      </div>

      <div className="mt-8">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-secondary">Live Preview</p>
        <div className="rounded-lg border border-white/10 bg-white p-4" dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">HTML Code (paste into your email client)</p>
          <CopyButton value={htmlCode} />
        </div>
        <textarea
          readOnly
          value={htmlCode}
          rows={6}
          onClick={(e) => (e.target as HTMLTextAreaElement).select()}
          className="w-full resize-none rounded-lg border border-white/10 bg-brand-bg px-3 py-2 font-mono text-xs text-brand-secondary focus:border-brand-accent focus:outline-none"
        />
      </div>

      <p className="mt-6 text-xs text-brand-secondary">
        Your signature is generated entirely in your browser. Nothing is sent to any server.
      </p>
    </div>
  );
}
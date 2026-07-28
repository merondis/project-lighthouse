export interface InvoiceDueDateResult {
  dueDate: string;
  daysFromToday: number;
}

export function calculateInvoiceDueDate(invoiceDateStr: string, termDays: number): InvoiceDueDateResult {
  const invoiceDate = new Date(invoiceDateStr + "T00:00:00");
  const due = new Date(invoiceDate);
  due.setDate(due.getDate() + termDays);

  const dueDate = due.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysFromToday = Math.round((due.getTime() - today.getTime()) / msPerDay);

  return { dueDate, daysFromToday };
}

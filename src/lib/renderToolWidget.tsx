import { ToolConfig } from "@/types/tool";
import { CalculatorWidget } from "@/components/tool-page/CalculatorWidget";
import { CountdownWidget } from "@/components/tool-page/CountdownWidget";
import { UnitConverterWidget } from "@/components/tool-page/UnitConverterWidget";
import { MergePdfWidget } from "@/components/tool-page/MergePdfWidget";
import { SplitPdfWidget } from "@/components/tool-page/SplitPdfWidget";
import { CurrencyConverterWidget } from "@/components/tool-page/CurrencyConverterWidget";
import { CompressPdfWidget } from "@/components/tool-page/CompressPdfWidget";
import { AiTextToolWidget } from "@/components/tool-page/AiTextToolWidget";
import { AmortizationWidget } from "@/components/tool-page/AmortizationWidget";
import { RegexTesterWidget } from "@/components/tool-page/RegexTesterWidget";
import { HexRgbConverterWidget } from "@/components/tool-page/HexRgbConverterWidget";

export function renderToolWidget(tool: ToolConfig) {
  if (tool.widgetType === "countdown") return <CountdownWidget />;
  if (tool.widgetType === "unitConverter") {
    return <UnitConverterWidget category={tool.converterCategory ?? "length"} />;
  }
  if (tool.widgetType === "mergePdf") return <MergePdfWidget />;
  if (tool.widgetType === "splitPdf") return <SplitPdfWidget />;
  if (tool.widgetType === "currencyConverter") return <CurrencyConverterWidget />;
  if (tool.widgetType === "compressPdf") return <CompressPdfWidget />;
  if (tool.widgetType === "aiText") {
    return (
      <AiTextToolWidget
        systemPrompt={tool.aiSystemPrompt ?? "You are a helpful writing assistant."}
        actionLabel={tool.aiActionLabel ?? "Submit"}
        placeholder={tool.aiPlaceholder ?? "Enter your text..."}
      />
    );
  }
if (tool.widgetType === "amortization") {
    return <AmortizationWidget tenureUnit={tool.amortizationTenureUnit ?? "months"} />;
  }
  if (tool.widgetType === "regexTester") return <RegexTesterWidget />;
  if (tool.widgetType === "hexRgbConverter") return <HexRgbConverterWidget />;
  return <CalculatorWidget slug={tool.slug} />;
}
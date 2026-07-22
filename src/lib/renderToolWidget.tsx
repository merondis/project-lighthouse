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
import { PdfToJpgWidget } from "@/components/tool-page/PdfToJpgWidget";
import { JpgToPdfWidget } from "@/components/tool-page/JpgToPdfWidget";
import { TextDiffWidget } from "@/components/tool-page/TextDiffWidget";
import { RotatePdfWidget } from "@/components/tool-page/RotatePdfWidget";
import { MarkdownPreviewWidget } from "@/components/tool-page/MarkdownPreviewWidget";
import { ScientificCalculatorWidget } from "@/components/tool-page/ScientificCalculatorWidget";
import { DebtPayoffWidget } from "@/components/tool-page/DebtPayoffWidget";
import { ContrastCheckerWidget } from "@/components/tool-page/ContrastCheckerWidget";
import { ColorPaletteWidget } from "@/components/tool-page/ColorPaletteWidget";
import { FontSignatureWidget } from "@/components/tool-page/FontSignatureWidget";
import { HandwrittenSignatureWidget } from "@/components/tool-page/HandwrittenSignatureWidget";
import { EmailSignatureWidget } from "@/components/tool-page/EmailSignatureWidget";
import { WatermarkPdfWidget } from "@/components/tool-page/WatermarkPdfWidget";
import { BmiCalculatorWidget } from "@/components/tool-page/BmiCalculatorWidget";

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
  if (tool.widgetType === "pdfToJpg") return <PdfToJpgWidget />;
  if (tool.widgetType === "jpgToPdf") return <JpgToPdfWidget />;
  if (tool.widgetType === "textDiff") return <TextDiffWidget />;
  if (tool.widgetType === "rotatePdf") return <RotatePdfWidget />;
  if (tool.widgetType === "markdownPreview") return <MarkdownPreviewWidget />;
  if (tool.widgetType === "scientificCalculator") return <ScientificCalculatorWidget />;
  if (tool.widgetType === "debtPayoff") return <DebtPayoffWidget />;
  if (tool.widgetType === "contrastChecker") return <ContrastCheckerWidget />;
  if (tool.widgetType === "colorPalette") return <ColorPaletteWidget />;
  if (tool.widgetType === "fontSignature") return <FontSignatureWidget />;
  if (tool.widgetType === "handwrittenSignature") return <HandwrittenSignatureWidget />;
  if (tool.widgetType === "emailSignature") return <EmailSignatureWidget />;
  if (tool.widgetType === "watermarkPdf") return <WatermarkPdfWidget />;
  if (tool.widgetType === "bmi") return <BmiCalculatorWidget />;
  return <CalculatorWidget slug={tool.slug} />;
}
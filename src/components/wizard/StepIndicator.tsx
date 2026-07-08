import type { Step } from "./types";

const STEP_LABELS: { key: Step; label: string }[] = [
  { key: "name", label: "氏名" },
  { key: "birthDate", label: "生年月日" },
  { key: "confirm", label: "確認" },
  { key: "complete", label: "完了" },
];

export default function StepIndicator({ step }: { step: Step }) {
  const stepIndex = STEP_LABELS.findIndex((s) => s.key === step);

  return (
    <ol className="flex w-full max-w-md items-center justify-between text-sm">
      {STEP_LABELS.map((s, i) => (
        <li key={s.key} className="flex flex-1 items-center">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                i <= stepIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={
                i <= stepIndex ? "text-foreground" : "text-muted-foreground"
              }
            >
              {s.label}
            </span>
          </div>
          {i < STEP_LABELS.length - 1 && (
            <div
              className={`mx-2 h-px flex-1 ${
                i < stepIndex ? "bg-primary" : "bg-border"
              }`}
            />
          )}
        </li>
      ))}
    </ol>
  );
}

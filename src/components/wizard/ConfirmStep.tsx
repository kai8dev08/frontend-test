import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { FormData } from "./types";

type Props = {
  form: FormData;
  submitting: boolean;
  error: string | null;
  onBack: () => void;
  onSubmit: () => void;
};

export default function ConfirmStep({
  form,
  submitting,
  error,
  onBack,
  onSubmit,
}: Props) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>入力内容の確認</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between border-b border-border pb-2">
            <dt className="text-muted-foreground">苗字</dt>
            <dd className="font-medium">{form.lastName}</dd>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <dt className="text-muted-foreground">名前</dt>
            <dd className="font-medium">{form.firstName}</dd>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <dt className="text-muted-foreground">生年月日</dt>
            <dd className="font-medium">{form.birthDate}</dd>
          </div>
        </dl>
        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
        <div className="mt-6 flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            disabled={submitting}
            className="flex-1"
          >
            戻る
          </Button>
          <Button
            type="button"
            onClick={onSubmit}
            disabled={submitting}
            className="flex-1"
          >
            {submitting ? "登録中..." : "登録する"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

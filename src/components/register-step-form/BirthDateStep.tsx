import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { FormData } from "./types";

type Props = {
  form: FormData;
  onChange: (patch: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function BirthDateStep({
  form,
  onChange,
  onNext,
  onBack,
}: Props) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>生年月日を選択してください</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            onNext();
          }}
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="birthDate">生年月日</Label>
            <Input
              id="birthDate"
              required
              type="date"
              value={form.birthDate}
              onChange={(e) => onChange({ birthDate: e.target.value })}
            />
          </div>
          <div className="mt-2 flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              戻る
            </Button>
            <Button type="submit" className="flex-1">
              次へ
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

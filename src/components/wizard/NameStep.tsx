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
};

export default function NameStep({ form, onChange, onNext }: Props) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>氏名を入力してください</CardTitle>
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
            <Label htmlFor="lastName">苗字</Label>
            <Input
              id="lastName"
              required
              value={form.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
              placeholder="山田"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="firstName">名前</Label>
            <Input
              id="firstName"
              required
              value={form.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
              placeholder="太郎"
            />
          </div>
          <Button type="submit" className="mt-2 w-full">
            次へ
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

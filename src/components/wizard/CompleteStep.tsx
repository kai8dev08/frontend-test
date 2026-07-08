import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { FormData } from "./types";

type Props = {
  form: FormData;
  onRestart: () => void;
};

export default function CompleteStep({ form, onRestart }: Props) {
  return (
    <Card className="w-full max-w-md">
      <CardContent>
        <div className="flex flex-col items-center gap-4 py-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600 dark:bg-green-500/20 dark:text-green-400">
            ✓
          </div>
          <h2 className="text-lg font-semibold">登録が完了しました</h2>
          <p className="text-sm text-muted-foreground">
            {form.lastName} {form.firstName} さんの情報を登録しました。
          </p>
          <div className="mt-2 flex w-full gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onRestart}
              className="flex-1"
            >
              もう一度入力する
            </Button>
            <Button
              render={<Link href="/list" />}
              nativeButton={false}
              className="flex-1"
            >
              一覧を見る
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

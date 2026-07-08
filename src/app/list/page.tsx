import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import type { Entry } from "@/generated/prisma/client";

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export default async function ListPage() {
  const entries = await prisma.entry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-1 flex-col items-center gap-6 px-4 py-10">
      <h1 className="text-xl font-semibold">登録一覧</h1>

      {entries.length === 0 ? (
        <p className="text-sm text-muted-foreground">まだ登録がありません。</p>
      ) : (
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {entries.map((entry: Entry) => (
            <Card key={entry.id}>
              <CardContent>
                <p className="text-base font-medium">
                  {entry.lastName} {entry.firstName}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  生年月日: {formatDate(entry.birthDate)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  登録日時: {formatDate(entry.createdAt)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

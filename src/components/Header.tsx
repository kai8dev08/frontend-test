import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <nav className="mx-auto flex max-w-3xl items-center gap-6 px-4 py-3">
        <Link href="/" className="font-semibold">
          登録フォーム
        </Link>
        <Link
          href="/register"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          新規登録
        </Link>
        <Link
          href="/list"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          登録一覧
        </Link>
      </nav>
    </header>
  );
}

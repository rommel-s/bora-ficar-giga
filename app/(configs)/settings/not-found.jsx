import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Erro 404</h2>
      <p>acho que por aqui tá meio vazio...</p>
      <hr />
      <Link href="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
}

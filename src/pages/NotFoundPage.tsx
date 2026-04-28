import { Link, useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-dark-bg text-slate-300 flex items-center justify-center px-6">
      <div className="max-w-md w-full glass-panel rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-white">Página no encontrada</h1>
        <p className="text-slate-400 mt-2">
          La ruta no existe o ocurrió un error.
        </p>

        <pre className="mt-4 text-xs text-slate-500 overflow-auto">
          {JSON.stringify(err, null, 2)}
        </pre>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-brand-cyan text-dark-bg font-bold rounded-full"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import dirceuFamilia from "@/assets/dirceu-familia.jpg";

export const Route = createFileRoute("/test-image")({
  component: () => (
    <div className="p-10 bg-black min-h-screen">
      <h1 className="text-white mb-4">Teste de Imagem</h1>
      <img src={dirceuFamilia} alt="Teste" className="w-64 h-auto border-2 border-white" />
      <p className="text-white mt-4">Caminho importado: {dirceuFamilia}</p>
    </div>
  ),
});

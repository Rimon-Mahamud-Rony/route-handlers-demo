import { ReactNode } from "react";

type CommonPageDesignProps = {
  children: ReactNode;
};

export default function CommonPageDesign({ children }: CommonPageDesignProps) {
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-slate-300 via-slate-600 to-cyan-300 py-8">
      <header className="bg-cyan-500 text-white p-4 fixed top-0 w-full text-start">
        <h1 className="text-2xl font-bold text-center text-black">
          Next.js Route Handlers Demo App
        </h1>
      </header>
      {children}
      <footer className="bg-cyan-500 text-white p-4 fixed bottom-0 w-full text-center">
        <p>&copy; 2026 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}

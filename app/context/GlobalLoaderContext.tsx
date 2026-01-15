"use client";
import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const callApi = async (callback) => {
    setLoading(true);
    await callback();
    setLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ loading, callApi }}>
      {children}

      {/* Global Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
        </div>
      )}
    </LoaderContext.Provider>
  );
}

export const useGlobalLoader = () => useContext(LoaderContext);

'use client';

import { Drawer } from 'vaul';

export function ProjectDrawer() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute top-0 w-[1000px] z-10 h-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#A4A4A3, transparent 50%)' }}
      />
    
      <div className="max-w-2xl mx-auto text-center pt-64">
       
        <div className="flex gap-4 justify-center mt-6">
          <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
              <button
                type="button"
                className="rounded-full bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Open Drawer
              </button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
                <div className="p-4 bg-white rounded-t-[10px] flex-1">
                  <Drawer.Handle className="bg-gray-300 mb-8" />
                  <div className="max-w-md mx-auto">
                    <Drawer.Title className="font-medium mb-4">Drawer for React.</Drawer.Title>
                    <p className="text-gray-600 mb-2">
                      This component can be used as a Dialog replacement on mobile and tablet devices. You can read
                      about why and how it was built{' '}
                      <a
                        target="_blank"
                        className="underline"
                        href="https://emilkowal.ski/ui/building-a-drawer-component"
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className="text-gray-600 mb-2">
                      It comes unstyled, has gesture-driven animations, and is made by{' '}
                      ass
                      .
                    </p>
                    <p className="text-gray-600 mb-8">
                      It uses{' '}
                      <a
                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                        className="underline"
                        target="_blank"
                      >
                        Radix's Dialog primitive
                      </a>{' '}
                      under the hood and is inspired by{' '}
                      <a
                        href="https://twitter.com/devongovett/status/1674470185783402496"
                        className="underline"
                        target="_blank"
                      >
                        this tweet.
                      </a>
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
                  <div className="flex gap-6 justify-end max-w-md mx-auto">
                    <a
                      className="text-xs text-gray-600 flex items-center gap-0.25"
                      href="https://github.com/Ebrahim-Ramadan/ahmed-ramadan-portofolio"
                      target="_blank"
                    >
                      Behance
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                    <a
                      className="text-xs text-gray-600 flex items-center gap-0.25"
                      href="https://twitter.com/scoopsahoykidooo"
                      target="_blank"
                    >
                      Instagram
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
         
        </div>
      </div>
    </div>
  );
}
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
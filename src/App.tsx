import { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <span 
        onClick={() => setIsOpen(true)}
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
      >
        Click me
      </span>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h2 className="text-xl font-semibold mb-4">Verify that you are human</h2>
            
            <div className="flex justify-center">
              <div
                className="cf-turnstile"
                data-sitekey="0x4AAAAAAA7SN9BgICU6k8R5"
                data-callback="handleCallback"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
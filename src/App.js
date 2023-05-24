import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main class="min-w-screen flex min-h-screen w-full flex-col items-center bg-white pb-24">
     <div class="max-h-[16.25rem] min-h-[5rem] flex-1"></div>
      <div class="w-full max-w-[456px]">
        <form method="post" action="/login" class="flex w-full flex-col gap-x-[18px] gap-y-4">
          <div class="flex flex-col w-full">
            <input class="placeholder-grey-400 text-lg leading-[1.625rem] font-normal py-4 px-4 bg-grey-100 rounded-2xl border-2 border-transparent outline-black w-full pl-[calc(var(--start-decorator-width,-0.8rem)+1.6rem)] pr-[calc(var(--end-decorator-width,-0.8rem)+1.6rem)]" aria-invalid="false" id="email" aria-label="E-Mail address" placeholder="Enter your email address" name="email" />
          </div>
          <div class="flex flex-col w-full">
            <div class="relative w-full flex">
              <input class="placeholder-grey-400 text-lg leading-[1.625rem] font-normal py-4 px-4 bg-grey-100 rounded-2xl border-2 border-transparent outline-black w-full pl-[calc(var(--start-decorator-width,-0.8rem)+1.6rem)] pr-[calc(var(--end-decorator-width,-0.8rem)+1.6rem)]" aria-invalid="false" id="password" aria-label="Password" placeholder="Enter your password" name="password" type="password" />
              <div data-input-decorator="end" class="absolute top-0 bottom-0 my-auto max-h-fit right-4">
                <button class="focus:outline-none focus-visible:ring-2 leading-4 inline-flex box-border items-center px-3 py-2 bg-white rounded-lg h-11 w-11 shadow-md" type="button" aria-label="Show password">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99991 12C9.99991 10.8954 10.8953 10 11.9999 10C13.1045 10 13.9999 10.8954 13.9999 12C13.9999 13.1046 13.1045 14 11.9999 14C10.8953 14 9.99991 13.1046 9.99991 12Z" fill="#18181B"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 4C9.13824 4 6.80526 5.26472 5.07666 6.70743C3.35041 8.14818 2.16688 9.81429 1.57413 10.7528L1.55005 10.7908C1.43243 10.976 1.27971 11.2164 1.20251 11.5532C1.14018 11.8251 1.14018 12.1749 1.20251 12.4468C1.27971 12.7836 1.43243 13.024 1.55005 13.2092L1.57413 13.2472C2.16688 14.1857 3.35041 15.8518 5.07666 17.2926C6.80526 18.7353 9.13824 20 11.9999 20C14.8616 20 17.1946 18.7353 18.9232 17.2926C20.6494 15.8518 21.833 14.1857 22.4257 13.2472L22.4498 13.2092C22.5674 13.024 22.7201 12.7837 22.7973 12.4468C22.8597 12.1749 22.8597 11.8251 22.7973 11.5532C22.7201 11.2163 22.5674 10.976 22.4498 10.7908L22.4257 10.7528C21.833 9.81429 20.6494 8.14818 18.9232 6.70743C17.1946 5.26472 14.8616 4 11.9999 4ZM11.9999 8C9.79077 8 7.99991 9.79086 7.99991 12C7.99991 14.2091 9.79077 16 11.9999 16C14.209 16 15.9999 14.2091 15.9999 12C15.9999 9.79086 14.209 8 11.9999 8Z" fill="#18181B"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button class="font-sans focus:outline-none focus-visible:ring-2 inline-flex items-center px-6 py-4 text-lg font-medium bg-grey-900 text-white hover:enabled:bg-grey-800 shadow-md focus-visible:ring-grey-500 antialiased rounded-[0.875rem] col-span-2 justify-center" type="submit">Continue →</button>
        </form>
        <a class="mt-20 block text-center font-sans text-sm font-normal text-[#A9A9A9]" href="/reset-password">Forgot your password?</a>
      </div>
    </main>
    </div>
  );
}

export default App;

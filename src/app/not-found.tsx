import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <main className="h-[calc(100vh-65px)] flex justify-center font-montserrat">
        <div className="relative w-full h-full flex justify-center">
          <figure className="w-full h-full mt-[65px]">
            <img
              src="https://picsum.photos/1400/1400/?blur=1"
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="absolute self-center bg-[rgba(240,248,255,0.62)] w-full flex justify-center">
            <div className="w-[300px] p-5 text-black space-y-5">
              <h1 className="text-[45px]">404</h1>
              <h2 className="text-[25px]">Esta página não existe</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

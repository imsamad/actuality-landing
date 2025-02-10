export const OrgLogos = () => {
  return <>
    <p className="mt-14 text-center text-xl text-[#6B7280]">Trusted by</p>

    <div className="logos-wrapper z-[-2] w-screen overflow-hidden">
      <div className="logos my-10 ">
        <div className="logos-slide w-full">
          {Array(3).fill([
            "/icons/logo-ojibik.png",
            "/icons/logo-global.png",
            "/icons/logo-idea.png",
            "/icons/logo-innovation-factory.png",
            "/icons/logo-schulich.png",
            "/icons/logo-yspace.png",
            "/icons/logo-seneca.png",
          ]).flat().map((v) => (
            <img
              className="brightness-0 contrast-100"
              src={v}
              key={Math.random().toString()}
              alt={v}
            />
          ))}
        </div>
      </div>
    </div>
  </>
}

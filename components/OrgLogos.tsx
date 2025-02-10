export const OrgLogos = () => {
  return <>
    <p className="mt-14 text-center text-xl text-[#6B7280]">Trusted by</p>

    <div className="logos-wrapper z-[-2] w-screen overflow-hidden">
      <div className="logos my-10">
        <div className="logos-slide">
          {[
            "/icons/logo-ojibik.png",
            "/icons/logo-global.png",
            "/icons/logo-idea.png",
            "/icons/logo-innovation-factory.png",
            "/icons/logo-schulich.png",
            "/icons/logo-yspace.png",
            "/icons/logo-seneca.png",
          ].map((v) => (
            <img
              className="brightness-0 contrast-100"
              src={v}
              key={v}
              alt={v}
            />
          ))}
        </div>
        <div className="logos-slide">
          {[
            "/icons/logo-ojibik.png",
            "/icons/logo-global.png",
            "/icons/logo-idea.png",
            "/icons/logo-innovation-factory.png",
            "/icons/logo-schulich.png",
            "/icons/logo-yspace.png",
            "/icons/logo-seneca.png",
          ].map((v) => (
            <img
              className="brightness-0 contrast-100"
              src={v}
              key={v}
              alt={v}
            />
          ))}
        </div>
      </div>
    </div>
  </>
}

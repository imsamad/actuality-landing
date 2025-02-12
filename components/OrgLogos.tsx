export const OrgLogos = () => {
  return <>
    <p className="mt-14 z-[-1] text-center text-md md:text-xl text-[#6B7280]">Trusted by</p>

    <div className="logos-wrapper container mx-auto overflow-hidden">
      <div className="logos my-10 ">
        <div className="logos-slide w-full">
          {Array(3).fill([
            "/__0101__new__actuality__/assets/logo-ojibik.png",
            "/__0101__new__actuality__/assets/logo-global.png",
            "/__0101__new__actuality__/assets/logo-idea.png",
            "/__0101__new__actuality__/assets/logo-innovation-factory.png",
            "/__0101__new__actuality__/assets/logo-schulich.png",
            "/__0101__new__actuality__/assets/logo-yspace.png",
            "/__0101__new__actuality__/assets/logo-seneca.png",
          ]).flat().map((v) => (
            <img
              // className="brightness-0 co ntrast-100 "
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

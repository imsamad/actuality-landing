export const OrgLogos = () => {
  return <>
    <p className="mt-[48px] md:mt-[96px] z-[-1] text-center text-[16px] md:text-[18px]  text-[#6B7280] md:leading-[28px] leading-[24px]">Trusted by</p>

    <div className="logos-wrapper container mx-auto overflow-hidden">
      <div className="logos mt-[32px] md:mt-[48px] mb-[48px] md:mb-[128px]">
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

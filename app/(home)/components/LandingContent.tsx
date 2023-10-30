const LandingContent = () => {
    return (
        <div className="box-content absolute inset-0 max-w-screen-2xl h-full mx-auto px-3 xsm:px-10 flex flex-col justify-center items-start">
            <h1 style={{fontSize: "clamp(28px, 4dvw, 42px)"}} className="font-bold">
                VII. İAL Gençlik Çalıştayı
            </h1>
            <p style={{fontSize: "clamp(14px, 2dvw, 20px)", textWrap: "balance"} as object} className="my-7 font-medium max-w-2xl">
                İzmir’e konferans kültürü kazandıran, kalitesinden asla taviz vermeyen, Türkiye’nin en köklü ve iyi konferanslarından biri olan İzmir Atatürk Lisesi Gençlik Çalıştayı tekrardan sizlerle!
            </p>
            <button className="flex justify-between items-center relative bg-white rounded-[100px] border-[1.5px] border-[#9A0000CC]">
                <span style={{fontSize: "clamp(14px, 2dvw, 18px)"}} className="inline-block bg-gradient-to-r p-2 pl-5 pr-3 text-transparent bg-clip-text font-semibold from-[#000] from-40% to-[#F00] to-100%">Başvuru Yap</span>
                <span className="flex justify-center items-center aspect-square w-10 md:w-12 rounded-[100px] bg-gradient-to-l from-[#F00] from-0% to-[#260D0D] to-134% text-2xl font-bold">{">"}</span>
            </button>
        </div>
    )
}

export default LandingContent;
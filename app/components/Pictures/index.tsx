"use client"
import Image from "next/image"

const images:string[] = [
    "https://res.cloudinary.com/dxqg5hify/image/upload/v1726125878/0K0A2219_glh10g.png", "https://res.cloudinary.com/dxqg5hify/image/upload/v1726125878/0K0A2258_lpogkk.png", "https://res.cloudinary.com/dxqg5hify/image/upload/v1726125877/0K0A2263_u5oq1x.png",
    "https://res.cloudinary.com/dxqg5hify/image/upload/v1726125876/0K0A2217_yz8s9t.png",
    "https://res.cloudinary.com/dxqg5hify/image/upload/v1726129158/IMG_2714_cfksyc.png", "https://res.cloudinary.com/dxqg5hify/image/upload/v1726127622/IMG_2819_rgrv48.png"

]
const Pictures = () => {
    return (
        <div> <div className="grid grid-cols-2 gap-4">
            {
                images.map((imageUrl:any, index) => (
                    <Image key={index} alt="" src={imageUrl} width={50} height={50} style={{ width: "100%", height: "auto" }} unoptimized />
                ))
            }
        </div>
        <div className=" mt-4">
    <Image alt="" src={"https://res.cloudinary.com/dxqg5hify/image/upload/v1726127627/IMG_2808_ktnoux.png"} width={50} height={50} style={{ width: "100%", height: "auto" }} unoptimized />
        </div>
        </div>

    )
}

export default Pictures
// import { SimpleImage } from "./Img"
export const FixedLoader = () => {
    return <div className="fixedLoader">
        <i className="mdi mdi-spin mdi-loading"></i>
    </div>
}


export const SimpleIconLoader = () => {
    return <>
        <i className="mdi mdi-spin mdi-loading"></i>
    </>
}

export const SimpleSectionLoader = ({ size }) => {
    return <div className="sectionLoader">
        <i className="mdi mdi-spin mdi-loading" style={{ fontSize: size ? size : "30px" }} ></i>
    </div>
}

// export const LogoLoader = () => {
//     return <section className='websiteLogoLoader'>
//         <SimpleImage props={{ src: 'logo.png', alt: "logo img site Loader" }} />
//     </section>
// }

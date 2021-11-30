import StoreCard from "./StoreCard"

function OfficialStoresBlock({ category }) {
    const textButton = 'Ver todas'
    const text = 'Tiendas destacadas en'
    return (
        <div className="m-top-5 m-bottom-5">
            <div className="row padding-none">
                <div className="col padding-none">
                    <p className="title">{text}</p>
                    <p className="txt-bold title">{category.title}</p>
                </div>
            </div>
            <div className="bg-white row padding-none round m-top-4 m-bottom-0 shadow-sm">
                <div className="col padding-none">
                    <div className="Official-card-wrap">
                        {category.brandsData.map(item => {
                            return <StoreCard brandName={item.brandName} src={item.src} to={item.to} />
                        })}
                    </div>

                </div>
            </div>
            <button className="bg-blue txt-white p-form round txt-bold border-none fz-m w-100">{textButton}</button>
        </div>
    )
}
export default OfficialStoresBlock
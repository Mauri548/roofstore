import categoriesData from './categoriesData'
import HelpBlock from './HelpBlock'
import { useParams } from 'react-router-dom'

function HelpPageCategory() {
    const title = '¿Con qué temas quieres ayuda?'

    const { id } = useParams()

    return (
        <div className="row  bg-main vh-100">
            <div className="col w-100">
                <p className="title m-bottom-1 txt-bold">{title}</p>
                <HelpBlock items={categoriesData.buys} />
            </div>
        </div>)
}

export default HelpPageCategory


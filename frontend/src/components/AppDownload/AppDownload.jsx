import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
        <p>For better exeperience download <br /> our app</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} />
            <img src={assets.app_store} />
        </div>
    </div>
  )
}

export default AppDownload
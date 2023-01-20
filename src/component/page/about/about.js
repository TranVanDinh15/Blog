import classNames from "classnames/bind";
import Header from "../../Header/Header";
import styles from './about.module.scss'
const cx=classNames.bind(styles)
function About(){
return <div className={cx("wrapperAbout")}>
    <Header/>
    <div className={cx("wrapperAbout__Item")}>
        <div className={cx("container__About")}>
            <div className={cx("container__About__Item")}>
                <img src="https://raw.githubusercontent.com/TranVanDinh15/ImageProject/main/UploadImageProject/image/24ca3a2cad0f76512f1e.jpg"/>
            </div>
        <div className={cx("container__About__Content")}>
            <div className={cx("container__About__Content__Heading")}>
                <span>Hey! So Glad You're Here.</span>
            </div>
            <div className={cx("container__About__Content__name")}>
                <span>Trần Văn Định</span>
            </div>
        </div>
        <div className={cx("container__About__Content__Infor")}>
            <div className={cx("container__About__Content__Infor__Job")}>
                <span>Job: </span>
                <span>Student</span>
            </div>
            <div className={cx("container__About__Content__Infor__Job")}>
                <span>Specialized: </span>
                <span>Information technology</span>
            </div>
            <div className={cx("container__About__Content__Infor__Job")}>
            <span>University: </span>
                <span>Ho Chi Minh City University of Transport</span>
            </div>
            <div className={cx("container__About__Content__Infor__Job")}>
            <span>Skill: </span>
                <span>FrontEnd: </span>
                <span>Javascript, ReactJs, Redux, Hook, Axios, ....</span>
                <span>BackEnd: </span>
                <span>NodeJs (Express), MySQl, MiddleWave,...</span>
            </div>
            <div className={cx("container__About__Content__Infor__Job")}>
            <span>Product: </span>
                <span>Restaurant manager</span>
                <span>GitHub: </span>
                <a href="https://github.com/TranVanDinh15/DeployResTauRant">Project</a>
                
            </div>
            <div className={cx("container__About__Content__Infor__Job")}>
            <span>Product: </span>
                <span>Tour</span>
                <span>GitHub: </span>
                <a href="https://github.com/TranVanDinh15/TourDeploy">Project</a>
                
            </div>
        </div>
        </div>
    </div>
</div>
}
export default About
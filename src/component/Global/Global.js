import classNames from "classnames/bind";
import styles from './Global.module.scss'
const cx=classNames.bind(styles)
function Global({children}){
return <div>{children}</div>
}
export default Global
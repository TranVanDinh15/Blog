import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from './Header.module.scss'
const cx=classNames.bind(styles)
function Header(){
    const navigate=useNavigate()
    const menuArray=[
        {
            id:1,
            name: 'Home'
        },
        {
            id:2,
            name: 'About'
        },
        {
            id:3,
            name: 'My Blog'
        },
        {
            id:4,
            name: 'Contact'
        },
        {
            id:5,
            name: <input type={"text"} placeholder={"Search"} />
        },
       
    ]
    const [isNavBar, setIsNavBar]=useState(false)
    const Icon=[
        
                {
                    iconItem: <FontAwesomeIcon icon={faFacebook}/>,
                },
                {
                    iconItem: <FontAwesomeIcon icon={faInstagram}/>,
                },
                {
                    iconItem: <FontAwesomeIcon icon={faGithub}/>,
                }
          
    ]
    return <div className={cx('wrapperHeader')}>
            <div className={cx('wrapperHeader__Item__HeaderReponsive')}>
                <div className={cx('wrapperHeader__Item__HeaderReponsive__Search')}>
                    <div className={cx('wrapperHeader__Item__HeaderReponsive__Search__Item')}>
                    <input type={"text"} placeholder={"Search..."}/>
                    <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className={cx('wrapperHeader__Item__HeaderReponsive__Menu')}
                    onClick={(event)=>{
                        setIsNavBar(true)
                    }}
                    >
                    <FontAwesomeIcon icon={faBars} />
                    </div>
                   
                </div>
                <div className={cx('wrapperHeader__Item__Responsive')}> 
            <div className={cx('wrapperHeader__Item__TitleTwo')}>
                <span>Train of Thought</span>
            </div>
            <div className={cx('wrapperHeader__Item__Title')}>
                <span>EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.</span>
            </div>
            <ul className={cx('wrapperHeader__Item__Menu')}>
                {
                    menuArray.map((item, index)=>{
                        if(item.name){
                            return (
                                <div  key={index}>
                                <li>{item.name}</li>
                                </div>
                            )
                        }
                    })
                }
               
                <div>
                    <li>
                    <FontAwesomeIcon icon={faFacebook} style={{
                        color: "#1877f2"
                    }}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faGithub}/>
                    </li>
                </div>
            </ul>
                </div>
                {
                    isNavBar?
                <div className={cx('wrapperHeader__Item__HeaderReponsive__navBar')}>
                    <div  className={cx('wrapperHeader__Item__HeaderReponsive__navBar__Item')}
                    onClick={(event)=>{
                        setIsNavBar(false)
                    }}
                    >
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>
                        <ul className={cx('listMenu')}>
                            {
                                menuArray.map((item, index)=>{
                                    if(item.id!=5){
                                        return (
                                            <div  key={index}
                                            onClick={(event)=>{
                                                if(item.id==2){
                                                    navigate('/About')
                                                }
                                            }}
                                            >
                                            <li>{item.name}</li>
                                            </div>
                                        )
                                    }
                                })
                            }
                            <a href="https://www.facebook.com/sieu.trum.79">
                    <FontAwesomeIcon icon={faFacebook} style={{
                        color: "#1877f2"
                    }}
                    />
                            </a>
                            <a href="https://www.facebook.com/sieu.trum.79">
                    <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="https://github.com/TranVanDinh15">
                    <FontAwesomeIcon icon={faGithub}/>
                    </a>

                        </ul>
                </div>
                    :''
                }
            </div>
        <div className={cx('wrapperHeader__Item')}> 
            <div className={cx('wrapperHeader__Item__Title')}>
                <span>EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.</span>
            </div>
            <div className={cx('wrapperHeader__Item__TitleTwo')}>
                <span>Train of Thought</span>
            </div>
            <ul className={cx('wrapperHeader__Item__Menu')}>
                {
                    menuArray.map((item, index)=>{
                        if(item.name){
                            return (
                                <div  key={index}>
                                <li>{item.name}</li>
                                </div>
                            )
                        }
                    })
                }
               
                <div>
                    <li>
                    <FontAwesomeIcon icon={faFacebook} style={{
                        color: "#1877f2"
                    }}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faGithub}/>
                    </li>
                </div>
            </ul>
        </div>
    </div>
}
export default Header
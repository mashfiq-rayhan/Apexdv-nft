import React from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import styles from "./TechStack.module.css";

const TechStack = () => {
    const data = [
        {
            id: 1,
            title: "Blockchain Platforms",
            image: [
                {
                    id: 1,
                    img:"/images/TechStack/marketplace-tech1.png"
                },
                {
                    id: 2,
                    img:"/images/TechStack/marketplace-tech2.png"
                },
                {
                    id: 3,
                    img:"/images/TechStack/marketplace-tech3.png"
                },
                {
                    id: 4,
                    img:"/images/TechStack/marketplace-tech4.png"
                },
                {
                    id: 5,
                    img:"/images/TechStack/marketplace-tech5.png"
                },
            ]
        },
        {
            id: 2,
            title: "Token Standards",
            image: [
                {
                    id: 1,
                    img:"/images/TechStack/marketplace-tech6.png"
                },
                {
                    id: 2,
                    img:"/images/TechStack/marketplace-tech7.png"
                },
                {
                    id: 3,
                    img:"/images/TechStack/marketplace-tech8.png"
                },
                {
                    id: 4,
                    img:"/images/TechStack/marketplace-tech9.png"
                },
                {
                    id: 5,
                    img:"/images/TechStack/marketplace-tech10.png"
                },
            ]
        },
        {
            id: 3,
            title: "Front-end Frameworks",
            image: [
                {
                    id: 1,
                    img:"/images/TechStack/marketplace-tech11.png"
                },
                {
                    id: 2,
                    img:"/images/TechStack/marketplace-tech12.png"
                },
                {
                    id: 3,
                    img:"/images/TechStack/marketplace-tech13.png"
                },
            ]
        },
        {
            id: 4,
            title: "Storage Platforms",
            image: [
                {
                    id: 1,
                    img:"/images/TechStack/marketplace-tech14.png"
                },
                {
                    id: 2,
                    img:"/images/TechStack/marketplace-tech15.png"
                },
            ]
        },
        
    ]
    return (
        <div className='container pb-5' >
            <div className={styles.techStack} >
                <h1>Tech Stack For NFT Marketplace Development</h1>
                <div className={styles.techStackInfo} >
                    {
                        data.map((item,index) => (
                            <div className={styles.techStackCard}>
                                <h4>{item.title}</h4>
                                <div className={styles.techStackCardImgs} >
                                    {
                                        item.image.map((items, index) => (
                                            <div className={styles.techStackCardImg}>
                                                <img src={items.img} alt="" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <ModalComponent btnText={"Get Started"} className={styles.startedButton}/>
            </div>
        </div>
    );
};

export default TechStack;
import styles from './FAQ.module.css';

function FAQ() {
    const data = [
        {
            id: 1,
            question: 'How to create NFT marketplace?',
            ans: "Firstly decide your niche and decide the budget for launching a NFT marketplace and then select the reliable service provider that can make your dream into reality."
        },
        {
            id: 2,
            question: 'What is the overall cost of the NFT marketplace creation services?',
            ans: "The cost of building the NFT marketplace depends on the company’s expertise and experience. Also, the geographical location, features and the project complexity adds to the cost."
        },
        {
            id: 3,
            question: 'What are the benefits of NFT website development?',
            ans: "The users can mint the NFTs on the platform or directly import them through a wallet on the platform.It allows to track the seller’s identity and offers full transparency,security to the users."
        },
        {
            id: 4,
            question: 'Why should you go for White Label NFT marketplace?',
            ans: "If you want to hit the market in a short time with a fully customized Marketplace that meets your requirements and under your budget, then launch a white label NFT marketplace."
        },
    ]
    return (
        <div className="container pb-5">
            <div className="row">
                <h5 className={`text-center ${styles.faq}`}>FAQs</h5>
                <h1 className={`text-center ${styles.title}`}>Frequently Asked Questions</h1>

                <div className={`accordion accordion-flush mt-4 faqAccordion`} id="accordionFlushExample">
                    {
                        data.map((item, index) => {
                            return (
                                <div className={`accordion-item`}>
                                    <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`} >
                                            {item.question}
                                        </button>
                                    </h2>
                                    <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            {item.ans}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ
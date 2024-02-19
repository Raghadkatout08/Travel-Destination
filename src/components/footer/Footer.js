import './Footer.css';

function Footer() {
    const linkedinLink = "https://www.linkedin.com/in/raghad-katout-263949211"
    const GethubLink = "https://github.com/Raghadkatout08"
    const autherName = "Raghad Al-Katout"

    return (
        <>
            <div className="site-footer">
                <p className="author-name"> Author of the document is: {autherName}</p>
                <ul className="social-icons">
                    <li>
                        <a className="linkedin" href={linkedinLink} target="_blank">
                            <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/linkedin-512.png" alt="LinkedIn" />
                            <i className="fa fa-linkedin">
                            </i>
                        </a>
                    </li>
                    <li>
                        <a className="github" href={GethubLink} target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" />
                            <i className="fa fa-github">
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Footer
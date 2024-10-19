"use client"
import Link from "next/link"

function ThesisCard({ author, date, title, desc, img_src }) {
    return (
        <div className="col-xl-4 col-md-6 m-b30">
            <div className="dz-card style-1 overlay-shine wow fadeInUp" data-wow-delay="1.0s" style={{ height: '450px', display: 'flex', flexDirection: 'column' }}>
                <div className="dz-media" style={{ height: '250px', overflow: 'hidden' }}>
                    <Link href="/thesis">
                        <img src={img_src} alt="img" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </Link>
                    <span className="date">
                        <a href="#" onClick={(e) => e.preventDefault()}>{date}</a>
                    </span>
                </div>
                <div className="dz-info" style={{ flexGrow: 1, padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div className="dz-meta">
                            <ul>
                                <li className="post-author text-primary">
                                    <span>
                                        <i className="fa-solid fa-user" />
                                    </span>
                                    {author}
                                </li>
                            </ul>
                        </div>
                        <h4 className="dz-title">{title}</h4>
                        <p>{desc}</p>
                    </div>
                    <div>
                        <Link href="/thesis" className="btn btn-primary">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThesisCard;

"use client"
import Link from "next/link"

function ThesisCard({author,date,title,desc,img_src}) {
    return (
                <div className="col-xl-4 col-md-6  m-b30">
        <div className="dz-card style-1 overlay-shine wow fadeInUp" data-wow-delay="1.0s">
          <div className="dz-media">
            <Link href="/thesis"><img src={img_src} alt="img" /></Link>
            <span className="date">
  <a href="#" onClick={(e) => e.preventDefault()}>25 Sep 2015</a>
</span>
          </div>
          <div className="dz-info">
            <div className="dz-meta">
              <ul>
                <li className="post-author text-primary">
                  <span>
                    <i className="fa-solid fa-user" />
                  </span>
                  {author}</li>
             
              </ul>
            </div>
            <h4 className="dz-title">{title}</h4>
            <p>{desc}</p>
            <Link href="/thesis" className="btn btn-primary">Read More</Link>
          </div>
        </div>
      </div>
        
    )
}

export default ThesisCard

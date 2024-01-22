
import Link from "next/link"
const Footer = () => {
  return (
    <div className="bg-secondary text-light d-flex flex-column justify-content-center p-3">
       <div className="d-flex flex-column justify-content-center gap-2">
            <h1>التيار السريع للنقل البري</h1>
            <hr />
            <p>تأسست شركة التيار السريع لنقل البري في عام 2002م باسم الهديب، وتم تغير الاسم إلي التيار السريع في عام 2009م بمدينة الرياض.</p>

        </div> 
        <div className="d-flex flex-column justify-content-center gap-2 ">
            <Link href={'/'} className="text-light list-group-item icon-link-hover link-danger">الرئيسية</Link>
            <hr />
            <Link href={'/about'} className="text-light list-group-item icon-link-hover link-danger">من نحن</Link>
            <hr />
            <Link href={'/blog'} className="text-light list-group-item icon-link-hover link-danger">الاخبار</Link>

        </div>
    </div>
  )
}

export default Footer